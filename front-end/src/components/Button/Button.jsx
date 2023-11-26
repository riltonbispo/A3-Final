import React from 'react'
import styles from './Button.module.css'

const Button = ({ label, secondary, del, link }) => {
  const buttonClass =
    secondary
      ? styles.btn__secondary
      : del
        ? styles.btn__delete
        : styles.btn__primary;

  return (
    <a href={link}>
      <button className={`${styles.btn} ${buttonClass}`}>{label}</button>
    </a>
  )
}

export default Button