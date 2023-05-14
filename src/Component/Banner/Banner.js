import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from './Slider'

const Banner = () => {
  return (
    <div className='banner-head'>
        <Container className='banner-cont'>
            <div className='banner-heading'>
            <div className='banner-text display-2'>
               CRYPTO HUNTER
            </div>
            <div className='banner-small'>
              Get all the Info Regarding your Favourite Crypto Currency
            </div>
            </div>
            <Slider />
        </Container>
    </div>
  )
}

export default Banner