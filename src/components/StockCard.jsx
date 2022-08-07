import React from 'react'

export default function StockCard({stock, idx}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="left-align">{stock.ticker}</h5>
        <h3 className="card-title">{stock.name}</h3>
        <p className="card-text">{stock.price}</p>
        { /* use a ternary to display a BUY or SELL button */}
        <button>Buy</button>
      </div>
    </div>
  );
}
