import React from 'react'
import { TuesdayCart } from './carts/TuesdayCart'

export const Tuesday = () => {
  return (
    <div>
      <h2>30 hour cardio</h2>
      <h2>Legs and Shoulders</h2>
      <TuesdayCart/>
      <h2>Cool-Down and Stretch</h2>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/4krsAmEeZX0" 
        title="Tuesday Video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
