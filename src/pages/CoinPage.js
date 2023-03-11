import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import CoinInfo from '../Component/CoinInfo';
import { SingleCoin } from '../Config/Api';
// import { CryptoState } from '../Context/CryptoContext';

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  // const { currency, symbol } = CryptoState()

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data)
  }
  console.log(coin)
  useEffect(() => {
    fetchCoin();
  },)



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
            {(coin?.description.en.slice(0, 200))}
          </div>
          <div classname='coin-marketdata'>
            <div>
              <h3>Rank: </h3><span> {coin?.market_cap_rank}</span>
              </div>
          </div>
        </div>
        <div><CoinInfo coin={coin} /></div>
      </div>



    </Container>
  )
}

export default CoinPage