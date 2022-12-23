import React, { useState } from 'react';
import { useRef } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function UploadFile({ onAdd, files }) {
  const [selectedFile, setSelectedFile] = useState([]);
  const filePicker = useRef(null);

  const handleChange = (e) => {
    setSelectedFile([...selectedFile, e.target.files]);
    onAdd(e.target.files[0]);
    onAdd(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  // const handleUpload = async () => {
  //   if (!selectedFile) {
  //     alert('Please, select a file');
  //     return;
  //   }
  // };

  const handleClick = () => {
    filePicker.current.click();
  };

  return (
    <>
      <span className='form__button-upload' onClick={handleClick}>
        <AddCircleOutlineIcon
          className='add-icon'
          sx={{ color: 'rgba(255, 255, 255, 0.2)', fontSize: 20 }}
        ></AddCircleOutlineIcon>
        Upload files
      </span>
      <input
        className='hidden'
        type='file'
        multiple
        onChange={handleChange}
        ref={filePicker}
      />

      {/* <button onClick={handleUpload}>Upload now!</button> */}

      {files && (
        <ul className='form__upload-list'>
          {files.map((file, index) => (
            <li className='form__upload-item' key={index + 1}>
              {index + 1}. {file.name}
            </li>
          ))}
        </ul>
      )}

      {/* {uploaded && (
        <div className=''>
          <h2>{uploaded.fileName}</h2>
          <img src={uploaded.filePath} alt='' width='200' />
        </div>
      )} */}
    </>
  );
}
