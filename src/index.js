// Seteo inicial app

// 1) importar librerías React y ReactDOM
import React from "react";                  // La librería react va a definir que es un componente y como funcionan juntos los mismos 
import ReactDOM from "react-dom/client";    // La librería que sabe hacer que un componente aparezca en pantalla
import App from "./App";                    // importo el componente App 

const el = document.getElementById("root"); // Referencia al div con id root
const root = ReactDOM.createRoot(el);       // React toma control del componente 

/*
// 4) Creamos un componente
function App(){
    // se utiliza {} para mostrar una variable
        // strings y numeros se muestran OK
        // arreglos 
        // booleanos no se muestran 
        // null no se muestra
        // objetos no se pueden
        //let arreglo = [10,20,30,40,50];
        //let objeto = {nombre:"Fabricio", apellido: "Giribone"};

    return ( // solo retorna un único elemento, en caso contrario es recomendable anidar los elementos.
        <body>
            <header>
                <h1> Proyecto new World </h1>
                <nav>
                    <ul>
                        <li><a className="nav-link" href="#"> Home </a></li>
                        <li><a className="nav-link" href="#"> Promociones </a></li>
                        <li><a className="nav-link" href="#"> registrarse </a></li>
                        <li><a className="nav-link" href="#"> cotizacion dolar </a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section>
                </section>
            </main>
            <footer>
                <div>
                    <p>Fabricio Giribone - © 2023 Copyright</p>
                </div>
            </footer>
        </body>
    )
}
*/

// 5) Mostrar el componente en pantalla
root.render(<App/>)
