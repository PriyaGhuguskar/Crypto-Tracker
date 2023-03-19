import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from './Slider'

const Banner = () => {
  return (
    <div className='banner-head'>
        <Container className='banner-cont'>
            <div className='banner-heading'>
            <h2 className='banner-text '>
            The Universe is a pretty big place to explore
            </h2>
            <div className='banner-small'>
              Get all the Info Regarding Our Mission
            </div>
            </div>
            <Slider />
        </Container>
    </div>
  )
}

export default Banner