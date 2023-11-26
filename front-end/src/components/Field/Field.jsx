import React from 'react'
import style from './Field.module.css'

const Field = ({ label, type, placeholder }) => {

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={style.field}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} onChange={handleChange} />
    </div>
  )
}

export default Field