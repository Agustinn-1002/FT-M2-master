import React from 'react';

export default function Card({name, img , max , min , onClose}) {
  // acá va tu código
  return (
    <div>
      <button onClick={() => onClose()}>X</button>
      <p>{name}</p>
      <div>
        <div>
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