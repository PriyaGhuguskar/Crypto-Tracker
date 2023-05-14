<<<<<<< HEAD
export const CoinList = () =>
`https://api.coingecko.com/api/v3/coins/list`
  // `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
=======
export const ComingList = () =>
  `https://api.spacexdata.com/v3/rockets`;
>>>>>>> a4efbf34a28c6f08c97e8517fffaf82f92b1a772

  export const Single = (capsule_serial) =>
  `https://api.spacexdata.com/v3/capsules/${capsule_serial}`;

  export const AllList = () =>
  `https://api.spacexdata.com/v3/rockets`;
