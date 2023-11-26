import React from 'react'
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import style from './SignUp.module.css'
import Button from '../../components/Button/Button';
import GameImage from '../../assets/img/image-login.png'
import Field from '../../components/Field';

const SignUp = () => {
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
            <Field  label='Email' type="email" placeholder="exemple@email.com"/>
            <Field  label='Senha' type="password" placeholder="******"/>
            <Field  label='Confirmar Senha' type="password" placeholder="******"/>
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