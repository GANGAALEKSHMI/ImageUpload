import React, { useState } from 'react';

function DisplayImage() {
  const [image, setImage] = useState('');
  const [images, setImages] = useState([]);

  const addImage = () => {
    setImages([...images, image]);
  };

  return (
    <div>
      <input type='file' onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={addImage}>Upload</button>
      <br />
      {images.map((img, index) => (
        <img
          key={index}
          src={URL.createObjectURL(img)}
          alt='images'
          width='auto'
          height='1000px'
        />
      ))}
    </div>
  );
}

export default DisplayImage;