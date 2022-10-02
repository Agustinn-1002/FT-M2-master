import React from 'react';
import Card from './Card'

const stylesDiv = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const Cards = ({cities}) => {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div style={stylesDiv}>
      {cities.map((data) => 
      <div style={
        {margin: '0 10px'}
        }>
          <Card
          max={data.main.temp_max}
          min={data.main.temp_min}
          name={data.name}
          img={data.weather[0].icon}
          onClose={() => alert(data.name)}
          />
        </div>
      )}
    </div>
  )
};

export default Cards;