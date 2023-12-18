import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import '../css/CartWidgetStyles.css';
import { db, } from '../Config/firebase';
import { getDocs, collection, addDoc } from 'firebase/firestore';

function Checkout() {
    const [OrderList, setOrderList] = useState([]);
    const [orderId, setOrderId] = useState(null);
    const OrderCollectionRef = collection(db, 'Orders');
    console.log("OrderCollectionRef", OrderCollectionRef)

    const { cartState } = useCart();
    const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    const getOrderList = async () => {
      const data = await getDocs(OrderCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setOrderList(filteredData);
    }
    getOrderList();

    const newOrderNumber = Math.floor(Math.random() * 1000000) + 1;
    setOrderNumber(newOrderNumber);

    // Guardar el pedido en Firebase
    const saveOrderToFirebase = async () => {
      try {
        // obtengo la fecha actual
        const currentDate = new Date();

        // Guardar la orden de compra en Firestore
        const newOrderRef = await addDoc(OrderCollectionRef, {
          OrderNumber: newOrderNumber,
          Fecha: currentDate,
          TotalOrder: calculateTotal(),
          Productos: cartState.items,
        });

        console.log('Pedido guardado en Firebase con número de orden:', newOrderNumber);
        console.log('ID del pedido en Firebase:', newOrderRef.id);
        setOrderId(newOrderRef.id);
      } catch (error) {
        console.error('Error al guardar el pedido en Firebase:', error);
      }
    };

    // Cuando muestro el componente checkout guardo los datos en la base
    if (cartState.items.length > 0) {
      saveOrderToFirebase();
    }
  }, [cartState.items]);


  const calculateTotal = () => {
    return cartState.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <div className="table-container">
      <h1 className="title is-4">Resumen del pedido # {orderNumber}</h1>
      {orderId && <p className="title is-6">ID del pedido en Firebase: {orderId}</p>}
      {cartState.items.length > 0 ? (
        <table className="carrito">
          <thead>
            <tr>
              <th className="has-text-white">Producto</th>
              <th className="has-text-white">Precio</th>
              <th className="has-text-white">Cantidad</th>
              <th className="has-text-white">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartState.items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Total:</td>
              <td>${calculateTotal()}</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
}

export default Checkout;