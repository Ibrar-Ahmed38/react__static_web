import React from 'react'
import Common from './Common'
import images from './images/rocket.png'

export default function Home() {
    return (
        <>
       <Common name="Welcome to About Page"
        imgsrc={images}
        visit='/contact'
        btname="Contact Now"/>
        </>
    )
}
