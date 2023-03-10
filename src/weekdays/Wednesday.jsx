import React from 'react'
import { WednesdayCart } from './carts/WednesdayCart'

export const Wednesday = () => {
  return (
    <div>
      <h2>40 minutes cardio</h2>
      <p>On Cardio day do your best, It should be at least 40 minutes iis minimum, try to make an hour</p>
      <img src='https://cdn.dribbble.com/users/1227465/screenshots/14381691/media/6a5b52a231bfec322fe80884b8a88332.gif' alt='Man running 2'/>
      <h2>Cardio and Abs</h2>
      <WednesdayCart/>
      <h2>Cool-Down and Stretch</h2>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/x2boIVr-VXQ" 
        title="Wednesday Video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

