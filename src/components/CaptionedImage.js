import React from 'react';
import '../css/CaptionedImage.css'

function CaptionedImage(props) {
  return (
    <div className='captioned-image-container'>
      <img className='captioned-image' alt={props.name} src={props.name} />
      <p>{props.caption}</p>
    </div>

  );
}

export default CaptionedImage;
