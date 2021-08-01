import React from 'react'
import Common from './Common'
import images from './images/rocket.png'

export default function About() {
    return (
        <>
       <Common name="Grow your business with" imgsrc={images} visit='/services' btname='Get Started'/>
        </>
    )
}
