import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city , setCity] = useState('')

  return (
    <form 
      class="form-inline"
      onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      document.getElementById('input').value = ''
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        className="form-control mr-sm-2"
        id="input"
        onChange={(e) => {
          setCity(e.target.value)
        }}
      />
      <input type="submit" value="Agregar" className="btn btn-outline-success my-2 my-sm-0"/>
    </form>
  );
}
