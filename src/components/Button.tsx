import React from 'react';

export default function Button({ action }: any) {
  return (
    <>
      <button onClick={action}> ENVIAR</button>
    </>
  );
}
