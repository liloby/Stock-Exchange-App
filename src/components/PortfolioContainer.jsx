import React from 'react';
import Stock from './StockCard'

export default function PortfolioContainer({ myStocks, buyOrSell }) {
  return (
    <div>
      <h2>My Portfolio - ${ myStocks.reduce((acc, stock)=> acc += stock.price, 0).toFixed(2)}</h2>
      { myStocks.map(stock => {
        return <Stock key={stock.price} stock={stock} myStocks={myStocks} buyOrSell={buyOrSell} />
      }) }
    </div>
  );
}
