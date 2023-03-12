import React from 'react'
import { FridayCart } from './carts/FridayCart'
import './Weekdays.css'

export const Friday = () => {
  return (
    <div>
      <h2>30 minutes cardio</h2>
      <img src='https://i.pinimg.com/originals/c8/97/71/c89771495cd7b8e2453000f0c66d6103.gif' alt='Girl running'/>
      <h2>Chest and Triceps</h2>
      <FridayCart/>
      <h2>Cool-Down and Stretch</h2>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/Sqn9OPWkBMI" 
        title="Friday Video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
