import React from 'react'
import { MondayCart } from './carts/MondayCart'
import './Weekdays.css'

export const Monday = () => {
  return (
    <div>
      <h2>30 minute running</h2>
      <img src="https://cdn.dribbble.com/users/1418907/screenshots/5745859/tredmil-for-post.gif" alt="Man running"/>
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

