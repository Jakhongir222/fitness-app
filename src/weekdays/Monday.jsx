import React from 'react'
import { MondayCart } from './carts/MondayCart'

export const Monday = () => {
  return (
    <div>
      <h2>30 hour cardio</h2>
      <h2>Chest and triceps</h2>
      <MondayCart/>
      <h2>Cool-Down and Stretch</h2>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/DYD6vr-wfjg" 
        title="Monday Video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

