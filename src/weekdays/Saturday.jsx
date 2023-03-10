import React from 'react'
import { SaturdayCart } from './carts/SaturdayCart'

export const Saturday = () => {
  return (
    <div>
      <h2>30 minutes cardio</h2>
      <img src='https://qph.cf2.quoracdn.net/main-qimg-d2287bab30fb54c24b76be6f05723c36' alt='Man Biking'/>
      <h2>Legs and Shoulders</h2>
      <SaturdayCart/>
      <h2>Cool-Down and Stretch</h2>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/UgEr_UHwbuE" 
        title="Saturday Video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

