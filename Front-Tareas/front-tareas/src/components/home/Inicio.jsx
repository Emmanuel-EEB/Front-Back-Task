import React from 'react';

export default function Inicio({ selectedDay }) {
  return (
    <div className='w-full bg-fondo_inicio'>
      <div className="p-4">
        <h1 className="font-bold text-center">Tareas a realizar el día: {selectedDay}</h1>
      </div>
    </div>
  );
}
