const CryptoRow = ({ coin }) => {
    const {
      image,
      name,
      symbol,
      current_price,
      total_volume,
      price_change_24h,
      market_cap,
    } = coin;
  
      const color = price_change_24h > 0 ? 'green' : 'red'
  
    return (
      <tr className="crypto-row">
        <td style={{ textAlign: 'left', paddingLeft: '50px' }}>
          <img src={image} alt="coin" height={30} /> {name}
        </td>
        <td>{symbol.toUpperCase()}</td>
        <td>${current_price}</td>
        <td>${total_volume}</td>
        <td style={{ color: color }}>{price_change_24h.toFixed(2)}%</td>
        <td>${market_cap}</td>
      </tr>
    );
  };
  
  export default CryptoRow;