import React, { Component, useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import StockContainer from './components/StockContainer';
import PortfolioContainer from './components/PortfolioContainer';
import './index.css'

export default function App() {
const [stocks, setStocks] = useState()

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


  return (
    <main>
      <Header />
      <div className="row">
        <div className="col-6">
          <StockContainer stocks={stocks}/>
        </div>
        <div className="col-6">
          <PortfolioContainer />
        </div>
      </div>
    </main>
  );
}

