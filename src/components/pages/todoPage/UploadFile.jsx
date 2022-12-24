import React, { useState } from 'react';
import { useRef } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function UploadFile({ onAdd, files, styles }) {
  const [selectedFile, setSelectedFile] = useState([]);
  const filePicker = useRef(null);

  const handleChange = (e) => {
    setSelectedFile([...selectedFile, e.target.files]);
    onAdd(e.target.files[0]);
    onAdd(e.target.files[0]);
  };

  const handleClick = () => {
    filePicker.current.click();
  };

  return (
    <div className={styles['form__upload-group']}>
      <span className={styles['form__button-upload']} onClick={handleClick}>
        <AddCircleOutlineIcon
          className={styles['add-icon']}
        ></AddCircleOutlineIcon>
        Upload files
      </span>
      <input
        className={styles.hidden}
        type='file'
        multiple
        onChange={handleChange}
        ref={filePicker}
      />

      {files.length > 0 && (
        <ul className={styles['form__upload-list']}>
          {files.map((file, index) => (
            <li className={styles['form__upload-item']} key={index + 1}>
              {index + 1}. {file.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
