import React from 'react'
import styles from './Button.module.css'

const Button = ({ label, secondary, del, onClick, type }) => {
  const buttonClass =
    secondary
      ? styles.btn__secondary
      : del
        ? styles.btn__delete
        : styles.btn__primary;

  return (
    <button className={`${styles.btn} ${buttonClass}`} onClick={onClick} type={type}>{label}</button>
  )
}

export default Button