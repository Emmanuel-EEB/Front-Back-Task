import React, { useState } from 'react'
import Sidebar from '../home/Sidebar';
import Inicio from '../home/Inicio';


export default function Layout() {

  const [selectedDay, setSelectedDay] = useState('');

  return (
    <div className='md:flex'>
      <Sidebar setSelectedDay={setSelectedDay} />
      <Inicio selectedDay={selectedDay} />
    </div>
  )
}
