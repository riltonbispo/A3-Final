import { useState, useEffect } from 'react';
import Button from '../Button';
import Modal from 'react-bootstrap/Modal';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import styles from './PlatformModal.module.css'
import { getPlatforms, createPlatform, deletePlatform } from '../../services/platformAPI';

function PlatformModal(props) {
  const [input, setInput] = useState('')
  const [platforms, setPlatforms] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPlatforms(await getPlatforms());
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const inputChange = (e) => {
    setInput(e.target.value);
  }

  const handleCreate = async () => {
    try {
      const response = await createPlatform(input)
      setPlatforms((prev) => [...prev, response]);
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deletePlatform(id);
      setPlatforms((prevPlatforms) => prevPlatforms.filter(platform => platform.ID !== id));
    } catch (error) {
      console.error(error);
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
          ADICIONE UMA NOVA PLATAFORMA
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.input}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nome da Plataforma"
            variant="outlined"
            required
            type="text"
            name="Name"
            value={input}
            onChange={inputChange}
          />
        </div>
        <div className={`d-flex flex-column ${styles.list}`}>
          {platforms.map((platform) => (
            <div className='d-flex justify-content-between align-items-center' key={platform.ID}>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">{platform.Name}</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type='text'
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <EditIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label={platform.Name}
                />
              </FormControl>
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                color='warning'
                onClick={() => handleDelete(platform.ID)}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} del label="Fechar" />
        <Button onClick={handleCreate} label="Cadastrar" />
      </Modal.Footer>
    </Modal>
  );
}

export default PlatformModal
