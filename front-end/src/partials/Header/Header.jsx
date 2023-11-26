import React from 'react';
import styles from './Header.module.css';
import Logo from '../../assets/img/ECHO-black.svg'

const Header = () => {
  return (
    <header className={styles.header__container}>
      <div className={styles.header__content}>
        <img src={Logo} alt="Echo" className={styles.header__logo} />
      </div>
    </header>
  );
};

export default Header;
