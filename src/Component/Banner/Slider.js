import React, { useEffect, useState } from 'react'
import { ComingList } from '../../Config/Api'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel'

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const Slider = () => {
    const [trending, setTrending] = useState([]);

    const fetchComingCapsule = async () => {
        const { data } = await axios.get(ComingList());
        setTrending(data);
    };

    // console.log(trending);
    useEffect(() => {
        fetchComingCapsule();
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);



    const items = trending.map((coin) => {
        // let profit = coin.price_change_percentage_24h >= 0;
        return (
            <Link className='slider-link' to={`/coins/${coin.id}`}>
                <img
                    src={coin?.flickr_images[0]}
                    alt=  {coin?.rocket_name}
                    height="80"
                    style={{ marginBottom: 10 }}
                />
                
                 <div>
                    {coin?.rocket_name}
                    </div>
                    <div>
                    {coin?.country}
                    
                </div>

                <div style={{ fontSize: 22, fontWeight: 500 }}>
          {coin?.missions?.name}
        </div> 
            </Link>
        )
    })

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        }
    }

    return (
        <div className='crypto-slider'>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableButtonsControls
                disableDotsControls
                responsive={responsive}
                autoPlay
                items={items}

            />
        </div>
    )
}

export default Slider