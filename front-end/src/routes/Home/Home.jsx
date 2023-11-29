import React from 'react'
import HeaderHome from '../../partials/HeaderHome/HeaderHome'
import styles from './Home.module.css'
import GameCard from '../../components/GameCard'
const Home = () => {
  const platforms = ['Steam', 'Epic', 'PSN', 'Xbox', 'PlayStore']
  const categories = ['jogado', 'jogando', 'zerado', 'nao-recomendo']
  return (
    <div>
      <HeaderHome />
      <section className={styles.content}>
        <p style={{marginBottom: '2rem'}}>Seja bem-vindo ao seu universo de jogos! Relembre suas aventuras e registre-as para nunca mais esquecê-las.</p>
        <div>
          <GameCard
            title='game title'
            categories={categories}
            imageUrl='https://images.unsplash.com/photo-1700578074342-e730264db59e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            platforms={platforms}
            rating={2}
          />
          <GameCard
            title='game title'
            categories={categories}
            imageUrl='https://images.unsplash.com/photo-1700578074342-e730264db59e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            platforms={platforms}
            rating={2}
          />

          <GameCard
            title='game title'
            categories={categories}
            imageUrl='https://images.unsplash.com/photo-1700578074342-e730264db59e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            platforms={platforms}
            rating={2}
          />

          <GameCard
            title='game title'
            categories={categories}
            imageUrl='https://images.unsplash.com/photo-1700578074342-e730264db59e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            platforms={platforms}
            rating={2}
          />

          <GameCard
            title='game title'
            categories={categories}
            imageUrl='https://images.unsplash.com/photo-1700578074342-e730264db59e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            platforms={platforms}
            rating={2}
          />

          <GameCard
            title='game title'
            categories={categories}
            imageUrl='https://images.unsplash.com/photo-1700578074342-e730264db59e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            platforms={platforms}
            rating={2}
          />


        </div>
      </section>
    </div>
  )
}

export default Home