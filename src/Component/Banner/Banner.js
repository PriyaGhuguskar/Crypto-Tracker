import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from './Slider'

const Banner = () => {
  return (
    <div className='banner-head'>
        <Container className='banner-cont'>
            <div className='banner-heading'>
            <h2 className='banner-text '>
            Crypto Hunter            </h2>
            <div className='banner-small'>
            Get all the Info regarding your favorite Crypto Currency
            </div>
            </div>
            <Slider />
        </Container>
    </div>
  )
}

export default Banner