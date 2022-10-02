import React from 'react';
import {contain, boton, caracteristicas,temperaturas} from '../moduleCSS/Card.module.css'

const Card = ({name, img , max , min , onClose}) => {
  // acá va tu código
  return (
    <div className={contain}>
      <button className={`${boton} btn btn-danger`} onClick={() => onClose()}>X</button>
      <p>{name}</p>
      <div className={caracteristicas}>
        <div className={temperaturas}>
          <ul>
            <li>Min</li>
            <li>{min}</li>
          </ul>
          <ul>
            <li>Max</li>
            <li>{max}</li>
          </ul>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="temperatura" />
      </div>
    </div>
  )
};

export default Card;