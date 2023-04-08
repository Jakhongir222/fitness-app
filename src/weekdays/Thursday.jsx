import React from 'react'
import { ThursdayCart } from './carts/ThursdayCart'
import './Weekdays.css'

export const Thursday = () => {
  return (
    <div>
      <h2>30 minutes Rowing</h2>
      <img src='https://media3.giphy.com/media/1iRfEyZwpXEe6V4Pem/giphy.gif?cid=6c09b952dx3tq50fon7p7ognq9futh0gs74siptppnvqb8a4&rid=giphy.gif&ct=s' alt='Rowing'/>
      <h2>Back and Biceps</h2>
      <ThursdayCart/>
      <h2>Cool-Down and Stretch</h2>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/4krsAmEeZX0" 
        title="Thursday Video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
//here another gif with white background https://media3.giphy.com/media/1iRfEyZwpXEe6V4Pem/giphy.gif?cid=6c09b952dx3tq50fon7p7ognq9futh0gs74siptppnvqb8a4&rid=giphy.gif&ct=s
