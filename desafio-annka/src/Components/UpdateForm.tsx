import React, { useState } from 'react';
import axios from 'axios';

const MyForm = () => {
const [name, setName] = useState('');
const [nameupdate, setNameupdate] = useState('');

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:4000/api/update/${nameupdate}`, { newName: name, newUrl: "url" });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

return (
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Nombre a actualizar"
value={nameupdate}
onChange={(event) => setNameupdate(event.target.value)}
/>
<input
type="text"
placeholder="Nuevo nombre"
value={name}
onChange={(event) => setName(event.target.value)}
/>
<button className='btnVolver' type="submit">Actualizar</button>
</form>
);
};

export default MyForm;