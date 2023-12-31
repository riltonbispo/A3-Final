import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import Button from '../Button';
import styles from './style.module.css'
import Tag from '../Tag';
import EditGameModal from '../EditGameModal';

const GameCard = ({ title, rating, categories, platforms, imageUrl, imageTitle, gameId }) => {
  const [showModalGame, setShowModalGame] = useState(false);

  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.info}>
        <div className={styles.details}>
          <h3 className={styles.title}>{title}</h3>
          <Button secondary label="Editar" onClick={() => setShowModalGame(true)} />
        </div>
        <Rating
          name="simple-controlled"
          value={rating}
          readOnly
        />
        <div className={styles.tags}>
          <div>
            {categories.map(category => (
              <Tag key={category.ID} categorie label={category.Name} />
            ))}
          </div>
          <div>
            {platforms.map(platform => (
              <Tag key={platform.ID} platform label={platform.Name} />
            ))}
          </div>
        </div>
      </div>
      <EditGameModal
        show={showModalGame}
        onHide={() => setShowModalGame(false)}
        rating={rating}
        title={title}
        selectedCategories={categories}
        selectedPlatforms={platforms}
        imageTitle={imageTitle}
        imageUrl={imageUrl}
        gameId={gameId}
      />
    </div>
  );
};

export default GameCard