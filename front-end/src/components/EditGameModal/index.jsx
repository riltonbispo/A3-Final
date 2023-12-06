import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from '../Button';
import Field from '../Field'
import InputFile from '../InputFile/InputFile';
import Rating from '@mui/material/Rating';
import Form from 'react-bootstrap/Form';
import styles from './style.module.css'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const EditGameModal = (props) => {
  const [rating, setRating] = useState(props.rating);
  const [gameName, setGameName] = useState(props.title)

  const [selectedCategories, setSelectedCategories] = useState(props.selectedCategories || []);
  const [selectedPlatforms, setSelectedPlatforms] = useState(props.selectedPlatforms || []);

  const inputChange = (value) => {
    setGameName(value);
  }
  const platforms = ['Steam', 'Epic Games', 'Ubisoft Store', 'GOG.com', 'Xbox App', 'Origin', 'Battler Net', 'Blizzard', 'PLayStore', 'App Store']
  const categories = ['Jogado', 'Jogando', 'Zerado', 'Nao Recomendo', 'outro status']

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
          <InputFile label={props.imageTitle} />
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

          <div>
            <span>Categoria</span>
            <FormGroup>
              {categories.map((category, index) => (
                <FormControlLabel key={`${category}-${index}`} control={<Checkbox defaultChecked={selectedCategories.includes(category)} />} label={category} />
              ))}
            </FormGroup>
          </div>

          <div>
            <span>Plataforma</span>
            <FormGroup>
              {platforms.map((platform, index) => (
                <FormControlLabel key={`${platform}-${index}`} control={<Checkbox defaultChecked={selectedPlatforms.includes(platform)} />} label={platform} />
              ))}
            </FormGroup>
          </div>

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