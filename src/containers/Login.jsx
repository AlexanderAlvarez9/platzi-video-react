import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'


const Login = () => (
  <section class="login">
    <section class="login__container">
      <h2>Inicia sesión</h2>
      <form class="login__container--form">
        <input class="input" type="text" placeholder="Correo" />
        <input class="input" type="password" placeholder="Contraseña" />
        <button type="submit" formaction="video.html" class="button">Iniciar sesión</button>
        <div class="login__container--remember-me">
          <label>
            <input type="checkbox" name="" id="cbox1" value="checkbos" />Recuérdame
          </label>
          <a href="/">Olvidé mi contraseña</a>
        </div>
      </form>
      <section class="login__container--social-media">
        <div><img src={googleIcon} alt="Google" />Inicia sesión con Google</div>
        <div><img src={twitterIcon} alt="Twitter" />Inicia sesión con Twitter</div>
      </section>
      <p class="login__container--register">No tienes ninguna cuenta
      <Link to="/register">
          Regístrate
      </Link>
      </p>
    </section>
  </section>
);

export default Login;