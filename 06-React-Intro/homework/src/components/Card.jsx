import React from 'react';
import '../styles/styleCard.css';

export default function Card({name, img , max , min , onClose}) {
  // acá va tu código
  return (
    <div className='contain'>
      <button className='boton' onClick={() => onClose()}>X</button>
      <p>{name}</p>
      <div className='caracteristicas'>
        <div className='temperaturas'>
          <ul>
            <li>Min</li>
            <li>{min}</li>
          </ul>
          <ul>
            <li>Max</li>
            <li>{max}</li>
          </ul>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      </div>
    </div>
  )
};