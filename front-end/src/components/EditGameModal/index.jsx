import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from '../Button';
import Field from '../Field'
import InputFile from '../InputFile/InputFile';
import Rating from '@mui/material/Rating';
import Form from 'react-bootstrap/Form';
import styles from './style.module.css'
import MultipleSelect from '../MultipleSelect';

const EditGameModal = (props) => {
  const [rating, setRating] = useState(props.rating);
  const [gameName, setGameName] = useState(props.title)

  const [selectedCategories, setSelectedCategories] = useState(props.selectedCategories || []);
  const [selectedPlatforms, setSelectedPlatforms] = useState(props.selectedPlatforms || []);


  const inputChange = (value) => {
    setGameName(value);
  }
  const platforms = ['Steam', 'Epic', 'PSN', 'Xbox', 'PlayStore']
  const categories = ['jogado', 'jogando', 'zerado', 'nao-recomendo']

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editan jogo - {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.inputs} >
          <Field label={props.title} type='text' inputChange={inputChange} />
          <InputFile label='Alterar imagem' />
        </div>
        <div className={styles.rating}>
          <span className={styles.subTitle}>Alterar nota:</span>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </div>
        <Form className={styles.selects}>
          <MultipleSelect list={categories} title='Categoria' selectedOptions={selectedCategories} />
          <MultipleSelect list={platforms} title='Plataforma' selectedOptions={selectedPlatforms} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} del label="Cancelar" />
        <Button onClick={props.onHide} label="Cadastrar" />
      </Modal.Footer>
    </Modal>
  );
}

export default EditGameModal