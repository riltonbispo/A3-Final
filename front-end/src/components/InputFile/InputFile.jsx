import React, { useState } from 'react';
import styles from './InputFile.module.css'
import FileUploadIcon from '@mui/icons-material/FileUpload';

const InputFile = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file ? file.name : null);
  };

  return (
    <label htmlFor="game-photo" className={styles.container}>
      <span className="modal__subtitle">{selectedFile || props.label}</span>
      <FileUploadIcon />
      <input type="file" name="" id="game-photo" className={styles.input} onChange={handleFileChange} />
    </label>
  )
}

export default InputFile