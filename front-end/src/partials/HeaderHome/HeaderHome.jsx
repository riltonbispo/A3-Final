import React, { useState } from 'react'
import Button from '../../components/Button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/img/ECHO-black.svg'
import GameModal from '../../components/ModalGame/GameModal';
import PlatformModal from '../../components/PlatformModal/PlatformModal';


const HeaderHome = () => {
  const [showModalGame, setShowModalGame] = useState(false);
  const [showModalPlatform, setShowModalPlatform] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary border-bottom">
        <Container>
          <Navbar.Brand>
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav className="me-auto" style={{gap: '0.5rem'}}>
              <Button label='Adicionar Jogo' onClick={() => { setShowModalGame(true); }} />
              <Button label='Gerenciar Plataformas' secondary  onClick={() => { setShowModalPlatform(true); }}/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <GameModal show={showModalGame} onHide={() => setShowModalGame(false)} />
      <PlatformModal show={showModalPlatform} onHide={() => setShowModalPlatform(false)} />
    </>
  )
}

export default HeaderHome