import React from 'react'
import style from './Field.module.css'

const Field = ({label, type, placeholder}) => {
  return (
    <div className={style.field}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default Field