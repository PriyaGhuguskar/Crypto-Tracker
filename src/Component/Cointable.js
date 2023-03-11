import React, { useEffect, useState } from 'react'
import { CoinList } from '../Config/Api';
import axios from 'axios';
import { CryptoState } from '../Context/CryptoContext';
import { Container ,Form} from 'react-bootstrap';

const Cointable = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);

    const { currency } = CryptoState()

    const fetchCoins = async () => {
        setLoading(true)
        const { data } = await axios.get(CoinList(currency));
        setCoins(data);
        setLoading(false)
    };
    console.log(coins)
    useEffect(() => {
fetchCoins()
    }, [currency])


    return (
        <>
        <Container>
            <div className='cointable-head'>
                Cryptocurrency Prices by Market Cap
            </div>
            <Form className="" variant='dark'>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Container>
        </>
    )
}

export default Cointable