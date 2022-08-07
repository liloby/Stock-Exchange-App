import React from 'react';
import StockCard from './StockCard';

export default function StockContainer({ stocks, buyOrSell }) {
  return (
    <div>
      <h2>Stocks</h2>
      { stocks && stocks.map((stock, idx) => (
        <StockCard stock={stock} idx={idx} key={idx} buyOrSell={buyOrSell}/>
      )) }
    </div>
  );
}
