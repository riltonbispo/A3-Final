import React from 'react'
import styles from './style.module.css'

const Tag = ({ categorie, platform, label }) => {
  const classStyle =
    categorie ? styles.categorie : platform ? styles.platform : ''

  return (
    <span className={`${classStyle} ${styles.tag}`}>{label}</span>
  )
}

export default Tag