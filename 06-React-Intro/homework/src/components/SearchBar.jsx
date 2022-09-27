import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
  <>
    <input type="text" />
    <button onClick={() => props.onSearch('Ciudad Agregada....')}>Agregar</button>
  </>
  )
};