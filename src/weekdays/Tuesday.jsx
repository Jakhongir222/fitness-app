import React from 'react'
import { TuesdayCart } from './carts/TuesdayCart'

export const Tuesday = () => {
  return (
    <div>
      <h2>30 hour cardio</h2>
      <img src='https://static.vecteezy.com/system/resources/previews/006/417/643/original/man-character-doing-cardio-stair-master-exercise-flat-illustration-isolated-on-different-layers-free-vector.jpg' alt='Stairmaster' height={500}/>
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
