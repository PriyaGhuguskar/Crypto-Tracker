import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CryptoState } from '../Context/CryptoContext';
import { HistoricalChart } from '../Config/Api';
import { Spinner } from 'react-bootstrap'; 
import { Line } from 'react-chartjs-2';
import {chartDays} from '../Config/data';
import SelectButton from "./SelectButton";

const CoinInfo = ({coin}) => {

  const [historicaldata ,setHistoricaldata]=useState()
  const [days , setDays]=useState(1);

  const {currency}=CryptoState()
  // const [flag,setflag] = useState(false);

  const fetchHistoricalData=async()=>{
    const {data}=await axios.get(HistoricalChart(coin.id, days ,currency));
setHistoricaldata(data.prices);
  }
  

  useEffect(()=>{

    fetchHistoricalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currency ,days])

  return (
    <div className='info-container'>
      {!historicaldata? (
          <Spinner style={{color:"gold", height:"50px", width:"50px"}} animation="border" 
          />
      ):(
        <>
        <Line
              data={{
                labels: historicaldata.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),
          
          datasets: [
            {
              data: historicaldata.map((coin) => coin[1]),
              label: `Price ( Past ${days} Days ) in ${currency}`,
              borderColor: "#EEBC1D",
            },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
        /> 
        <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {setDays(day.value);
                    // setflag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
        </>
      )}
    </div>
  )
}

export default CoinInfo