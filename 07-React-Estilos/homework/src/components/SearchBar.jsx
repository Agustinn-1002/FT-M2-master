import React from 'react';
import { useState } from 'react';

const SearchBar = props => {
  const [contador , setContador] = useState(0)
  // acá va tu  código
  return (
  <div className='mb-3'>
    <button className='btn btn-success' onClick={() => setContador(contador + 1)}>+</button>
    <button className='btn btn-success' onClick={() => setContador(contador - 1)}>-</button>
    <div>{contador}</div>
    <input type="text" />
    <button onClick={() => props.onSearch('Ciudad Agregada....')}>Agregar</button>
  </div>
  )
};

export default SearchBar