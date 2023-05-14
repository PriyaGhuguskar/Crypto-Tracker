import React, { createContext, useState, useEffect, useContext } from 'react'

const Crypto = createContext()


const CryptoContext = ({ children }) => {

  const [currency, setCurr] = useState("INR")
  const [currsign, setCurrsign] = useState("₹");

  useEffect(() => {
    if (currency === 'INR') setCurrsign("₹")
    else if (currency === 'USD') setCurrsign("$")
  }, [currency])

  return (<Crypto.Provider value={{ currency, currsign, setCurr }}>{children}</Crypto.Provider>
  )
}

export default CryptoContext

export const CryptoState = () => {
  return useContext(Crypto);
}
