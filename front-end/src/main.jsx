import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/variables.css';
import './assets/styles/global-styles.css';
import Home from './templates/Home';
import GameModal from './components/GameModal';
import EditGameModal from './components/EditGameModal';
import PlatformModal from './components/PlatformModal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Home />
    <GameModal />
    <EditGameModal />
    <PlatformModal />
  </>
);
