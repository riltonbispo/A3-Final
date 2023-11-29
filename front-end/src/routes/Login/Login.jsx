import React, { useState } from 'react';
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import style from './Login.module.css'
import Button from '../../components/Button/Button';
import GameImage from '../../assets/img/image-login.png'
import Field from '../../components/Field';
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };


  return (
    <div className={style.container}>
      <Header />
      <section className={style.content}>
        <div className={style.image}>
          <img src={GameImage} alt="garoto jogando" />
        </div>
        <div>
          <form className={style.form}>
            <span className={style.title}>Criar Conta</span>
            <p className={style.description}>Crie sua conta e acesse todo o seu catálogo de jogos</p>
            <Field label='Email' type="email" placeholder="exemple@email.com" onChange={handleEmailChange} />
            <Field label='Senha' type="password" placeholder="******" onChange={handlePasswordChange} />
          </form>
          <div className={style.buttons}>
            <Link to='/signup'>
              <Button label="Criar um conta" />
            </Link>
            <Link to='/home'>
            <Button link="home.html" secondary label="Entrar" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>

  )
}

export default Login