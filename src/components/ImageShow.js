import React from "react";


function ImageShow({ product }) {
 
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}${product.urlImagen}`}
        alt={product.descripcion}
        style={{ maxWidth: '300px' }}
      />
    </div>
  );
}

export default ImageShow;

/*
function ImageShow({ product }) {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + product.urlImagen}
        alt={product.descripcion}
        
      />
    </div>
  );
}
*/