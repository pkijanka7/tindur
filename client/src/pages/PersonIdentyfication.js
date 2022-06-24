import React from 'react'
import { useState } from 'react'
import GestureCard from '../components/GestureDetections/GestureApp'

const PersonIdentyfication = ({ gestDirection, setGestDirection }) => {

    const [faceVerifiaction, setFaceVerification] = useState(false);
  return (
      <>
      { faceVerifiaction ?
    <div className='gesture-test'>
        <h1 className='gesture-h1'> {gestDirection} </h1>
        <GestureCard setGestDirection={setGestDirection} />
    </div>
    :
    <div className='verification'>
            <button onClick={() => setFaceVerification(true)}>Verify</button>
    </div>
        }
    </>
  )
}

export default PersonIdentyfication