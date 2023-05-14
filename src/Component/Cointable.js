import React, { useEffect, useState } from 'react'
import { AllList } from '../Config/Api';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Container, Form, Card, Row, Col, Spinner } from 'react-bootstrap';

const Cointable = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [search1, setSearch1] = useState("");


    const history = useHistory()


    const fetchCoins = async () => {
        setLoading(true)
        const { data } = await axios.get(CoinList());
// =======
        const { data } = await axios.get(AllList());
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
                // console.log('hi')
                coin.rocket_name.includes(search)
        )
    }



    return (
        
            <Container>
                <div className='cointable-head'>
                    Our Projects
                </div>
                <Form className='form-serach' variant="dark" bg="dark">

                    <input type="text"
                        placeholder='Search from Rocket Name...'
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

                        <Row>
                            {coins.length ? (
                                handlesearch().map((row) => (
                                    <Col md={4} className="mt-2 mb-2" key={row.id}>
                                        <Card style={{ width: "18rem", height: "31rem", textAlign: "center" }}>
                                            <Card.Img
                                                variant="top"
                                                src={row.flickr_images[0]}
                                                style={{ height: "200px" }}
                                            />
                                            <Card.Body>
                                                <Card.Title style={{ color: "black" }}>{row.rocket_name}</Card.Title>
                                                <Card.Title style={{ color: "black" }}>{row.country}</Card.Title>
                                                {/* >>>>>>> a4efbf34a28c6f08c97e8517fffaf82f92b1a772 */}

                                                <Card.Title style={{ color: "black" }}>
                                                    Flight={" "} {row.first_flight}
                                                </Card.Title>
                                                <Card.Text style={{ color: "black" }}>
                                                    {row.description.length <= 90
                                                        ? row.description
                                                        : `${row.description.slice(0, 90)}...`}
                                                </Card.Text>


                                                <a
                                                    href={row.wikipedia}
                                                    className="btn btn-dark btn-sm"
                                                    style={{ margin: "0 5px" }}
                                                >
                                                    View details
                                                </a>
                                                {/* <Link
              to={`/photos/${photo.id}`}
              className="btn btn-dark btn-sm"
              style={{ margin: "0 5px" }}
            >
              View enlarged
            </Link> */}
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            ) : (
                                <Spinner
                                    animation="border"
                                    role="status"
                                    style={{ margin: "200px auto" }}
                                >
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            )}
                        </Row>
                    </Table>

                )
                }
            </Container>
        
    );
            }

    export default Cointable


