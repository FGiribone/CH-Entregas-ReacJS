
import React, { useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import 'sweetalert2';
import Swal from 'sweetalert2';
import { useCart } from './CartContext';
import productos from '../Data/Products.json';
import '../css/Style.css';
import '../css/ItemDetail.css';

function ItemDetailContainer(){

  console.log(useParams());

  const { codigo } = useParams();
  const { addItem, isInCart } = useCart();
  const producto = productos.find((producto)=>producto.codigo == codigo)
  const { nombreCategoria, descripcion, precio, stock, urlImagen } = producto;
  const [quantity, setQuantity] = useState(1);

  // Verifico si el producto ya está en el carrito 
  const handleAddToCart = () => {
    if (isInCart(codigo)) {

      Swal.fire({
        title: 'Producto en el carrito',
        text: '¿Deseas agregar más unidades?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          // salida por si, actualizo unidades
          addItem({
            id: codigo,
            name: descripcion,
            price: precio,
            quantity: quantity,
          });
  
          // Mostrar mensaje de unidades actualizadas
          Swal.fire({
            title: 'Unidades actualizadas',
            icon: 'success',
          });
        }
      });
    } else {
      // Si el producto no está en el carrito, agrego normalmente
      addItem({
        id: codigo,
        name: descripcion,
        price: precio,
        quantity: quantity,
      });
  
      // Mostrar mensaje de producto agregado
      Swal.fire({
        title: 'Producto agregado al carrito',
        icon: 'success',
      });
    }
  };

  const handleClickSuma = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleClickResta = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="center-container">
      <div className="site-container">
        <div className="article-container">
          <article className="article-card-detail">
            <figure className="article-image">
              <img src={urlImagen} alt={descripcion} />
            </figure>
            <div className="article-content">
              <h1 className="card-category">{nombreCategoria}</h1>
              <h3 className="card-title">{descripcion}</h3>
              <p className="card-price">${precio.toFixed(2)}</p>
              <p>stock:{stock}</p>
              <p>codigo producto:{codigo}</p>
        
              <div className="quantity-controls">
                <button onClick={handleClickResta} className="button resta">-</button>
                  <span className="quantity-span">Cantidad: {quantity}</span>
                <button onClick={handleClickSuma} className="button suma">+</button>
              </div>
              <button className="add-product-to-cart" onClick={handleAddToCart}>
                Agregar al carrito</button>
            </div>
          </article>
        </div>
          <div className="center-link">
            <Link to="/galeria">Volver</Link>
          </div>
      </div>
    </div>
  );
}
export default ItemDetailContainer;