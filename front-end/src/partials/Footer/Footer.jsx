import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <img src="assets/img/ECHO-white.svg" alt="" className={styles.footer__logo} />
        <span className={styles.footer__copy}>
          &copy; Copyright 2023 ECHO
        </span>
      </div>
    </footer>
  );
};

export default Footer;
