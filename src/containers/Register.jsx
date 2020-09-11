import React, { useState } from 'react';
import '../assets/styles/components/Register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleInput = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            name="name"
            className="input"
            type="text"
            placeholder="Nombre"
          />
          <input
            name="email"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button className="button">Registrarme</button>
        </form>
        <Link to="/login">
          Iniciar Sesion
      </Link>
      </section>
    </section>
  )
}

export default Register;