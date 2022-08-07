import React from 'react'

export default function StockCard({stock, idx, buyOrSell, myStocks}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="left-align">{stock.ticker}</h5>
        <h3 className="card-title">{stock.name}</h3>
        <p className="card-text">{stock.price}</p>
        { myStocks && myStocks.includes(stock) ?
          <button onClick={() => buyOrSell(stock, "sell")}>SELL</button>
          :
          <button onClick={() => buyOrSell(stock, "buy")}>BUY</button>
        }
      </div>
    </div>
  );
}
