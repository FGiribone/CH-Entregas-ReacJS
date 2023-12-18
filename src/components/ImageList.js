import React from "react";
import ImageShow from "./ImageShow";
import "../css/ImageList.css";

function ImageList({ products }) {
  const renderedImages = products.map((product) => {
    return (
      <div key={product.codigo} className="image-list-item">
        <ImageShow product={product} />
      </div>
    );
  });

  return <div className="image-list">{renderedImages}</div>;
}
export default ImageList;