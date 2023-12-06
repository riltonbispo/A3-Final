import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from '../Button';
import Rating from '@mui/material/Rating';
import styles from './GameModal.module.css'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const GameModal = (props) => {
  
  const [formData, setFormData] = useState({
    Name: '',
    User_Id: '1',
    Rating: 0,
    Image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, Image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('Name', formData.Name);
      formDataToSend.append('User_Id', formData.User_Id);
      formDataToSend.append('Rating', formData.Rating);
      formDataToSend.append('file', formData.Image);

      const response = await axios.post('http://localhost:3000/games', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setFormData({
        Name: '',
        User_Id: '',
        Rating: '',
        Image: null,
      });

      props.onHide()
    } catch (error) {
      console.error('Error creating game:', error);
    }
  };

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
          ADICIONE UM NOVO JOGO
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputs} >
            <TextField
              fullWidth
              id="outlined-basic"
              label="Nome do Jogo"
              variant="outlined"
              required
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
            />

            <label htmlFor="game-photo" className={styles.container}>
              <span className="modal__subtitle">{formData.Image ? formData.Image.name : 'Selecionar Jogo'}</span>
              <FileUploadIcon />
              <input type="file" id="game-photo" name="file" onChange={handleFileChange} required className={styles.inputFile} />
            </label>
          </div>

          <div className={styles.rating}>
            <span className={styles.subTitle}>Nota</span>
            <Rating
              name="Rating"
              value={formData.Rating}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.selects}>
            <div>
              <span>Categoria</span>
              <FormGroup>
                {categories.map((category, index) => (
                  <FormControlLabel control={<Checkbox />} label={category} key={`${category}-${index}`} />
                ))}
              </FormGroup>
            </div>

            <div>
              <span>Plataforma</span>
              <FormGroup>
                {platforms.map((platform, index) => (
                  <FormControlLabel control={<Checkbox />} label={platform} key={`${platform}-${index}`} />
                ))}
              </FormGroup>
            </div>
          </div>
        </form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} del label="Cancelar" />
        <Button onClick={handleSubmit} label="Cadastrar" />
      </Modal.Footer>
    </Modal>
  );
}

export default GameModal