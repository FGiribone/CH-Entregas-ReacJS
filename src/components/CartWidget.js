import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useCart } from './CartContext';
import '../css/CartWidgetStyles.css';
import 'bulma/css/bulma.css';
import Checkout from './Checkout';
import RegisterForm from '../pages/RegisterForm';

function CartWidget() {
  const { cartState, clearCart, removeItem } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleCheckout = () => {
    setShowCheckout(!showCheckout);
  };

  const calculateTotal = () => {
    return cartState.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0).toFixed(2);
  };

  const toggleRegisterForm = () => {
    if (!cartState.userData && !formSubmitted) {
      Swal.fire({
        title: '¡Debe registrarse primero!',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
      }).then((result) => {
        if (result.isConfirmed) {
          setShowRegisterForm(!showRegisterForm);
        }
      });
    } else {
      toggleCheckout();
    }
  };

  return (
    <div className="table-container">
      <h1 className="titulo-carrito">Carrito de Compras</h1>
      {cartState.items.length > 0 ? (
        <div>
          {showRegisterForm ? (
            <RegisterForm
              onSubmitSuccess={() => {
                setFormSubmitted(true);
                // false después de enviar el formulario
                setShowRegisterForm(false);
                toggleCheckout();
              }}
              setIsRegistered={(isRegistered) => {
              }}
            />
          ) : showCheckout ? (
            <Checkout />
          ) : (
            <table className="table is-fullwidth">
              <thead>
                <tr>
                  <th className="has-text-centered">Producto</th>
                  <th className="has-text-centered" >Precio</th>
                  <th className="has-text-centered">Cantidad</th>
                  <th className="has-text-centered">Total</th>
                  <th className="has-text-centered">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cartState.items.map((item) => (
                  <tr key={item.id}>
                    <td className="has-text-centered">{item.name}</td>
                    <td className="has-text-centered">${item.price.toFixed(2)}</td>
                    <td className="has-text-centered">{item.quantity}</td>
                    <td className="has-text-centered">${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button onClick={() => removeItem(item.id)} className="delete"></button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">Total:</td>
                  <td className="total">${calculateTotal()}</td>
                  <td>
                    <button onClick={toggleRegisterForm} className="button is-info is-light button-custom">
                      Finalizar Pedido
                    </button>
                    <button onClick={() => clearCart()} className="button is-danger is-light">
                      Vaciar Carrito
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      ) : (
        <p className="has-text-centered is-size-3">El carrito está vacío</p>
      )}
    </div>
  );
}

export default CartWidget;
