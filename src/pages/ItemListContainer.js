
import React, { useState, useEffect } from 'react';
import productos from '../Data/Products.json'
import '../css/Style.css'
import SearchBar from '../components/SearchBar';
import ImageList from "../components/ImageList";
import ImageShow from "../components/ImageShow";
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { id } = useParams();
  const [categoriasUnicas, setCategoriasUnicas] = useState([]);
  const [productosMostrados, setProductosMostrados] = useState([]);
  const leerArchivoProductos = () => {
    return new Promise((resolve, reject) => {
      try {
        if (Array.isArray(productos)) {
          resolve(productos);
        } else {
          reject(new Error('El archivo no tiene la estructura esperada'));
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  const filtrarProductos = term => {
    const productosFiltrados = productos.filter(producto =>
      producto.descripcion.toLowerCase().includes(term.toLowerCase())
    );
    setProductosMostrados(productosFiltrados);
  };

  useEffect(() => {
    leerArchivoProductos()
      .then(productosMapeados => {
        console.log('productos mapeados:', productosMapeados);
        setProductosMostrados(productosMapeados);
        const categorias = Array.from(new Set(productosMapeados.map(producto => producto.nombreCategoria)));
        setCategoriasUnicas(categorias);
      })
      .catch(error => console.error(error.message));
  }, []);
  useEffect(() => {
    // Filtrar categorias seleccionadas
    const productosFiltrados = id ? productos.filter(producto => producto.nombreCategoria === id) : productos;
    setProductosMostrados(productosFiltrados);
  }, [id, productos]); 

  return (
    <div>
      <h1 className="title-style">Productos New World</h1>
      <div className="is-flex is-justify-content-center is-align-items-center">
        <div className="navbar-item">
          <div className="buttons">
            {categoriasUnicas.map((categoria) => (
              <Link
              key={categoria}
              to={`/category/${categoria}`}
              className={`button ${id === categoria ? 'is-primary' : ''}`}>
              {categoria}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <SearchBar onSubmit={filtrarProductos} />
      <div className="site-container">
        <div className="article-container">
          {productosMostrados.map((producto, index) => (
             <Link key={producto.descripcion} to={`../galeria/${producto.codigo}`}>
            <article key={producto.descripcion} className="article-card">
              <figure className="article-image">
              <ImageList products={[producto]} />
              </figure>
              <div className="article-content">
                <h3 className="card-title">{producto.descripcion}</h3>
                <p className="card-price">${producto.precio.toFixed(2)}</p>
                <button className="add-product-to-cart">Detalle de Producto</button>
                {/*El boton funciona como decorativo ya que toda la tarjeta redirige al detalle de producto*/}
              </div>
            </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;