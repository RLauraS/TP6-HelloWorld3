import React, { useState } from 'react';

const Saludo = (props) => {
  const [msj, setMsj] = useState('(from changed state)');

  const mostrarMensaje = () => {
    setMsj('Hello my friend (from changed state)!');
  };

  return (
    <div>
      <h1>Hello {props.amigo}!</h1>
      <button onClick={mostrarMensaje}>Click Me</button>
      <p>{msj}</p>
    </div>
  );
};

export default Saludo;

