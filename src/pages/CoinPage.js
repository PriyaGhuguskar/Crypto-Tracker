import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container,Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { numberWithCommas } from '../Component/Banner/Slider';
import CoinInfo from '../Component/CoinInfo';
import { SingleCoin } from '../Config/Api';
import { CryptoState } from '../Context/CryptoContext';

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data)
  }
  console.log(coin)
  useEffect(() => {
    fetchCoin();
  },)

if(!coin){
  return  <Spinner animation="border" />
}

  return (
    <Container style={{ width: "100%", margin: "10px" }}>
      <div className='coin-info'>
        <div className='coin-side'>

          <img
            src={coin?.image.large}
            alt={coin?.name}
            height="200px"
            style={{ marginBottom: "8px" }}
          />
          <div style={{
            fontWeight: 'bold',
            marginBottom: "10px",
            fontSize: "1.1em"
          }}>{coin?.name}
          </div>
          <div className='coin-des'>
            {(coin?.description.en.slice(0, 150))}
          </div>
          <div classname='coin-marketdata'>
            <div className='coin-rank'>
              <h4>Rank : </h4> 
              
              <h5 style={{marginLeft:"7px"}}>  {coin?.market_cap_rank}</h5>
              </div>


              <div className='coin-rank'>
              <h4>Current Price: </h4> 
             
              <h5 style={{marginLeft:"7px"}}> 
              
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
               { symbol }{" "}
               </h5>
              </div>

              <div className='coin-rank'>
              <h4>Market Cap </h4> 
              { symbol }{" "}
              <h5 style={{marginLeft:"7px"}}> 
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
              .toString().slice(0.-6)
              )} M
               </h5>
              </div>

          </div>
        </div>
        <div><CoinInfo coin={coin} /></div>
      </div>



    </Container>
  )
}

export default CoinPage