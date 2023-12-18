import React, { useState } from 'react';
import { useCart } from '../components/CartContext'; 
import { db } from '../Config/firebase';
import { collection, addDoc } from 'firebase/firestore';

function RegisterForm({ onSubmitSuccess, isAuthenticated }) {
  const { setUserData } = useCart();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setUserData(formData);
    onSubmitSuccess();
  // Guarda los datos en Firebase
  try {
    const usersCollection = collection(db, 'Users');
    const docRef = await addDoc(usersCollection, formData);

    console.log('Formulario enviado:', formData);
    console.log('Usuario almacenado en Firestore con ID:', docRef.id);
  
  } catch (error) {
    console.error('Error al almacenar en Firestore:', error.message);
  }
};

  

  return (
    <div className="container">
      {isAuthenticated ? (
        <p className="has-text-centered is-size-3">Bienvenido, ya estás autenticado.</p>
      ) : (
      <div className="columns is-centered">
        <div className="column is-half">
          <h4 className="title is-4">Formulario</h4>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label" htmlFor="nombre">
                Nombre
              </label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  id="nombre"
                  placeholder="Enter first name"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="apellido">
                Apellido
              </label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  id="apellido"
                  placeholder="Enter last name"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="email">
                Email
              </label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="telefono">
                Número telefono
              </label>
              <div className="control">
                <input
                  type="number"
                  className="input"
                  id="telefono"
                  placeholder="Enter your phone"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button type="submit" className="button is-primary">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )}
    </div>
  );
}
export default RegisterForm;
