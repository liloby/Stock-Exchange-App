import React from 'react'
import { useState } from "react"

export default function StockCard({stock, idx, buyOrSell, myStocks}) {
  const [isFadingOut, setIsFadingOut] = useState(false)

  function fadeOut() {
    setIsFadingOut(true)
  }



  return (
    <div className={isFadingOut ? "item-fadeout card" : "card"}>
      <div className="card-body">
        <h5 className="left-align">{stock.ticker}</h5>
        <h3 className="card-title">{stock.name}</h3>
        <p className="card-text">{stock.price}</p>
        { myStocks && myStocks.includes(stock) ?
          <button onClick={() => fadeOut(setTimeout(() => buyOrSell(stock, "sell"), 1000))}>SELL</button>
          :
          <button onClick={() => buyOrSell(stock, "buy")}>BUY</button>
        }
      </div>
    </div>
  );
}
