import React, { useState } from 'react';

const Saludo = () => {
  const [msj, setMsj] = useState('(from changed state)');

  const mostrarMensaje = () => {
    alert(`Hello my friend ${msj}!`);
  };

  return (
    <div>
      <h1>Hello my friend!</h1>
      <button onClick={mostrarMensaje}>Click me</button>
    </div>
  );
};

export default Saludo;
