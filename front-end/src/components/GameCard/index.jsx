import React from 'react'
import Rating from '@mui/material/Rating';
import Button from '../Button';
import styles from './style.module.css'
import Tag from '../Tag';

const GameCard = ({ title, rating, categories, platforms, imageUrl }) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.info}>
        <Rating
          name="simple-controlled"
          value={rating}
          readOnly
        />
        <div className={styles.details}>
          <h3 className={styles.title}>{title}</h3>
          <Button onClick={() => console.log('clicou')} secondary label="Editar" />
        </div>
        <div className={styles.tags}>
          <div>
            {categories.map(category => (
              <Tag key={category} categorie label={category}/>
              ))}
          </div>
          <div>
            {platforms.map(platform => (
              <Tag key={platform} platform label={platform}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard