import React from 'react';
import 'bulma/css/bulma.min.css';
import '../css/Style.css';


const Promociones = () => {
    return (
      <div className="center-container">
        <div>
          <h2 className="title is-3 has-text-centered">Promociones</h2>
            <div className="columns is-multiline article-container">
              <div className="column is-one-third">
                <div className="card article-card">
                  <div className="card-image article-image">
                    <figure className="image-promotion">
                      <img src="https://iili.io/JxduP6X.jpg"alt="promocion1" />
                    </figure>
                  </div>
                  <div className="card-content article-content">
                    <p className="card-category">Promoción 1</p>
                  </div>
                </div>
              </div>
  
              <div className="column is-one-third">
                <div className="card article-card">
                  <div className="card-image article-image">
                    <figure className="image-promotion">
                      <img 
                        src="https://iili.io/JxdWPPs.jpg" alt="promocion2"/>
                    </figure>
                  </div>
                  <div className="card-content article-content">
                    <p className="card-category">Promoción 2</p>
                  </div>
                </div>
              </div>
  
              <div className="column is-one-third">
                <div className="card article-card">
                  <div className="card-image article-image">
                    <figure className="image-promotion">
                      <img src="https://iili.io/Jxdu4nI.jpg" alt="promocion3"/>
                    </figure>
                  </div>
                  <div className="card-content article-content">
                    <p className="card-category">Promoción 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  };
  

export default Promociones;