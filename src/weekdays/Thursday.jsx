import React from 'react'
import { ThursdayCart } from './carts/ThursdayCart'

export const Thursday = () => {
  return (
    <div>
      <h2>30 hour cardio</h2>
      <h2>Back and Biceps</h2>
      <ThursdayCart/>
      <h2>Cool-Down and Stretch</h2>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/b01Uapqwxvw" 
        title="Thursday Video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
