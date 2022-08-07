import React, { Component, useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import StockContainer from './components/StockContainer';
import PortfolioContainer from './components/PortfolioContainer';
import './index.css'

export default function App() {
const [stocks, setStocks] = useState()
const [myStocks, setMyStocks] = useState([])

async function fetchStockList() {
  const res = await fetch('http://localhost:3001/stocks')
  res.json().then(res => {
    setStocks(res)
  })
  .catch(err => console.log("ERROR: ", err))
}

console.log(stocks)

useEffect(() => {
  // renders stocks once when refreshed
  fetchStockList()
}, [])

function buyOrSell(newStock, action) {
  if (action === "sell") {
    console.log("selling")
    const newPortfolio = myStocks.filter(stock => stock.name !== newStock.name)
    setMyStocks(newPortfolio)
  } else if (action === "buy") {
    console.log("buying")
    if (myStocks.includes(newStock)) return;
    setMyStocks([...myStocks, newStock])
  }
}


  return (
    <main>
      <Header />
      <div className="row">
        <div className="col-6">
          <StockContainer buyOrSell={buyOrSell} stocks={stocks}/>
        </div>
        <div className="col-6">
          <PortfolioContainer buyOrSell={buyOrSell} myStocks={myStocks} />
        </div>
      </div>
    </main>
  );
}

