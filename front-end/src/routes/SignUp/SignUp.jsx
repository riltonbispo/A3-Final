import React, { useState } from 'react';
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import style from './SignUp.module.css'
import Button from '../../components/Button/Button';
import GameImage from '../../assets/img/image-login.png'
import Field from '../../components/Field';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  return (
    <div className={style.login}>
      <Header />
      <section className={style.container}>
        <div className={style.image}>
          <img src={GameImage} alt="garoto jogando" />
        </div>
        <div>
          <form className={style.form}>
            <span className={style.title}>Criar Conta</span>
            <p className={style.description}>Crie sua conta e acesse todo o seu catálogo de jogos</p>
            <Field  label='Email' type="email" placeholder="exemple@email.com" onChange={handleEmailChange}/>
            <Field  label='Senha' type="password" placeholder="******" onChange={handlePasswordChange}/>
            <Field  label='Confirmar Senha' type="password" placeholder="******" onChange={handleConfirmPasswordChange}/>
          </form>
          <div className={style.buttons}>
            <Button link="index.html" label="Já Possuo Conta" />
            <Button link="home.html" secondary label="Criar Conta" />
          </div>
        </div>
      </section>
      <Footer />
    </div>

  )
}

export default SignUp