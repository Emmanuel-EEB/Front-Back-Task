import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MagicMotion } from 'react-magic-motion';
import '@fortawesome/fontawesome-free/css/all.css';


export default function Sidebar({ setSelectedDay }) {
  const [days, setDays] = useState([]);
  const [newDayName, setNewDayName] = useState('');

  // Función para cargar los días desde la API
  const fetchDays = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/days');
      setDays(response.data.days); // Suponiendo que la respuesta es un array de días
      console.log(response.data.days);
    } catch (error) {
      console.error('Error fetching days:', error);
    }
  };

  useEffect(() => {
    fetchDays();
  }, []);

  const handleAddDay = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/days/', {
        name: newDayName
      });
      
      // Limpiar el campo de entrada después de agregar el día
      setNewDayName('');
  
      // Recargar la lista de días llamando a fetchDays
      fetchDays();
    } catch (error) {
      console.error('Error adding day:', error);
    }
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleDeleteDay = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/days/${id}`);
      // Recargar la lista de días después de eliminar uno
      fetchDays();
    } catch (error) {
      console.error('Error deleting day:', error);
    }
  };

  return (
    <MagicMotion>
      <aside className="md:w-60 bg-fondo_sidebar text-white">
        <div className="p-4">
          <h1 className="font-bold text-center text-white">Días de la Semana</h1>
        </div>
        <hr />
        <div className="p-4 flex flex-col items-center md:items-start">
          {days.map((day, index) => (
            <div key={index} className="mb-2 text-white flex justify-between w-full">
              <span className='cursor-pointer' onClick={() => handleDayClick(day.name)}>{day.name}</span>
              <i className="fas fa-trash-alt text-red-500 cursor-pointer" onClick={() => handleDeleteDay(day.id)}></i>
            </div>
          ))}
        </div>
        <hr />

        <div className="p-4">
          <h1 className="font-bold text-center text-white">Agregar un día</h1>

          <div className="flex items-center mt-3">
            <input
              type="text"
              className="px-1 py-2 w-full rounded-l-md focus:outline-none focus:border-blue-500 text-black"
              placeholder="Nombre"
              value={newDayName}
              onChange={(e) => setNewDayName(e.target.value)}
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md ml-2 focus:outline-none" onClick={handleAddDay}>+</button>
          </div>

        </div>
      </aside>
    </MagicMotion>
  );
}
