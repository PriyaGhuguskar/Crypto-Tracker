import React, { useEffect, useState } from 'react'
import { CoinList } from '../Config/Api';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// import { CryptoState } from '../Context/CryptoContext';
import { Container, Form, Table, Spinner} from 'react-bootstrap';
import { numberWithCommas } from './Banner/Slider';
// import CryptoRow from './CoinRow';


const Cointable = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    // const [page, setPage] = useState(1)
    const history = useHistory()

    // const { currency, symbol } = CryptoState()

    const fetchCoins = async () => {
        setLoading(true)
        const { data } = await axios.get(CoinList());
// =======
        // const { data } = await axios.get(AllList());
//a4efbf34a28c6f08c97e8517fffaf82f92b1a772
        setCoins(data);
        setLoading(false)
    };
    // console.log(coins)
    useEffect(() => {
       
        fetchCoins()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handlesearch = () => {
       
        return coins.filter(
            (coin) =>
                coin.name.toLowerCase().includes(search) ||
                coin.symbol.toLowerCase().includes(search)
        )
    }



    return (
        <>
            <Container>
                <div className='cointable-head'>
                    Cryptocurrency Prices by Market Cap
                </div>
                <Form className='form-serach' variant="dark" bg="dark">
                    <input type="text"
                        placeholder='Search for Crypto Currency...'
                        className="coin-search"
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </Form>
                {loading ? (
                    <Spinner animation="border" />
                ) : (
                    <Table>
                        <thead>
                            <tr className='Table-head-row'>
                                {["Coin Name", "Price", "24h Change", "Market Cap"].map((head) => (
                                    <th key={head}
                                    >{head}</th>
                                ))}

                            </tr>
                        </thead>

                        <tbody className='Table-data-row'>
                            {handlesearch().map((row) => {
                                let profit = row.price_change_percentage_24h > 0;
                                return (
                                    <tr className='table-row' onClick={() => history.push(`/coins/${row.id}`)}
                                        key={row.name}
                                    >
                                        <td style={{
                                            display: "flex",
                                            alignItems: "center",
                                            alignContent: "center",
                                            justifyContent: "left",
                                            // flexDirection:"column",
                                            gap: 15,
                                        }}>
                                            <img
                                                src={row.image}
                                                alt={row.name}
                                                height="50px"
                                                // width="50px"
                                                style={{ marginBottom: 10 }}
                                            />
                                            <div style={{ display: "flex", flexDirection: "column" }}
                                            >
                                                <span
                                                    style={{
                                                        textTransform: "uppercase",
                                                        fontSize: "20"
                                                    }}
                                                > {row.symbol}
                                                </span>
                                                <span
                                                    style={{ color: "darkgrey" }}>{row.name}
                                                </span>

                                            </div>
                                        </td>
                                        <td align='center'>
                                            {/* {symbol}{" "} */}
                                            {numberWithCommas(row.current_price.toFixed(2))}
                                        </td>
                                        <td
                                            align='center'
                                            style={{
                                                color: profit > 0 ? "rgb(14,203,129)" : "red",
                                                fontWeight: 500,
                                            }}>
                                            {profit && "+"}
                                            {row.price_change_percentage_24h.toFixed(2)}%

                                        </td>
                                        <td align='center'>
                                            {/* {symbol} */}
                                            {" "}
                                            {numberWithCommas(
                                                row.market_cap.toString().slice(0, -6)
                                            )}
                                            M
                                        </td>

                                    </tr>)

                            })}





                        </tbody>


                    </Table>

                )}
      

            </Container>
        </>
    )
}

export default Cointable


