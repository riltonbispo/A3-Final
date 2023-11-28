import React, { useState } from 'react'
import Button from '../../components/Button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/img/ECHO-black.svg'
import GameModal from '../../components/ModalGame/GameModal';


const HeaderHome = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button label='Adicionar Jogo' onClick={() => { setModalShow(true); }} />
              <Button label='Gerenciar Plataformas' secondary />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <GameModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}

export default HeaderHome