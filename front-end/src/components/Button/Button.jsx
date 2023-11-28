import React from 'react'
import styles from './Button.module.css'

const Button = ({ label, secondary, del, onClick }) => {
  const buttonClass =
    secondary
      ? styles.btn__secondary
      : del
        ? styles.btn__delete
        : styles.btn__primary;

  return (
    <button className={`${styles.btn} ${buttonClass}`} onClick={onClick}>{label}</button>
  )
}

export default Button