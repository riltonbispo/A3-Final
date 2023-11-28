import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from '../Button';
import Field from '../Field'
import InputFile from '../InputFile/InputFile';
import Rating from '@mui/material/Rating';
import Form from 'react-bootstrap/Form';
import styles from './GameModal.module.css'
import MultipleSelect from '../MultipleSelect';

const GameModal = (props) => {
  const [rating, setRating] = useState(0);
  const [gameName, setGameName] = useState('')

  const inputChange = (value) => {
    setGameName(value);
  }
  const platforms = ['Steam', 'Epic', 'PSN', 'Xbox', 'PlayStore']
  const categories = ['jogado', 'jogando', 'zerado', 'nao-recomendo']

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ADICIONE UM NOVO JOGO
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Field label="Nome do Jogo" type='text' inputChange={inputChange} />
        <InputFile label='Imagem do Jogo'/>
        <div>
          <span className={styles.subTitle}>Nota</span>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </div>
        <Form className={styles.selects}>
          <MultipleSelect list={categories} title='Categoria' />
          <MultipleSelect list={platforms} title='Plataforma' />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} del label="Cancelar" />
        <Button onClick={props.onHide} label="Cadastrar" />
      </Modal.Footer>
    </Modal>
  );
}

export default GameModal