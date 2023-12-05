import HeaderHome from '../../partials/HeaderHome/HeaderHome'
import styles from './Home.module.css'
import GameCard from '../../components/GameCard'
import React, { useEffect, useState } from 'react';
import { getGames } from '../../services/GameAPI';

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setGames(await getGames());
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <HeaderHome />
      <section className={styles.content}>
        <p style={{ marginBottom: '2rem' }}>Seja bem-vindo ao seu universo de jogos! Relembre suas aventuras e registre-as para nunca mais esquecê-las.</p>
        <div>
          {games.map((game) => (
            <React.Fragment key={game}>
              <GameCard
                title={game.Name}
                categories={game.Categories}
                imageUrl={`http://localhost:3000/files/${game.Image}`}
                platforms={game.Platforms}
                rating={game.Rating}
                imageTitle={game.Image}
              />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home