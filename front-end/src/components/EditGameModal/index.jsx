import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from '../Button';
import Rating from '@mui/material/Rating';
import styles from './style.module.css'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { getPlatforms } from '../../services/platformAPI';
import { getCategories } from '../../services/categoryAPI';
import { updateGame } from '../../services/GameAPI';
import TextField from '@mui/material/TextField';

const EditGameModal = (props) => {
  const [platforms, setPlatforms] = useState([])
  const [categories, setCategories] = useState([])
  const [name, setName] = useState(props.title)
  const [rating, setRating] = useState(props.rating)
  const [formData, setFormData] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      try {
        setPlatforms(await getPlatforms());
        setCategories(await getCategories());

        const initialFormData = {};
        props.selectedCategories.forEach(category => {
          initialFormData[`category_${category.ID}`] = true;
        });
        props.selectedPlatforms.forEach(platform => {
          initialFormData[`platform_${platform.ID}`] = true;
        });

        setFormData(initialFormData);
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [props.selectedCategories, props.selectedPlatforms])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateGame(name, rating, props.gameId)
      props.onHide()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputs} >
            <TextField
              fullWidth
              id="outlined-basic"
              label="Atualizar Nome"
              variant="outlined"
              type="text"
              name="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className={styles.rating}>
            <span className={styles.subTitle}>Alterar nota:</span>
            <Rating
              name="Rating"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </div>

          <div className={styles.selects}>
            <div>
              <span>Categorias</span>
              <FormGroup>
                {categories.map((category) => (
                  <FormControlLabel
                    key={category.ID}
                    control={
                      <Checkbox
                        checked={formData[`category_${category.ID}`] || false}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            [`category_${category.ID}`]: e.target.checked,
                          });
                        }}
                      />
                    }
                    label={category.Name}
                  />
                ))}
              </FormGroup>
            </div>

            <div>
              <span>Plataformas</span>
              <FormGroup>
                {platforms.map((platform) => (
                  <FormControlLabel
                    key={platform.ID}
                    control={
                      <Checkbox
                        checked={formData[`platform_${platform.ID}`] || false}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            [`platform_${platform.ID}`]: e.target.checked,
                          });
                        }}
                      />
                    }
                    label={platform.Name}
                  />
                ))}
              </FormGroup>
            </div>
          </div>
        </form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} del label="Excluir" />
        <Button onClick={handleSubmit} label="Salvar" />
      </Modal.Footer>
    </Modal>
  );
}

export default EditGameModal