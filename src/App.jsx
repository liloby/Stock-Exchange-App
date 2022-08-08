import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import StockContainer from './components/StockContainer';
import PortfolioContainer from './components/PortfolioContainer';
import './index.css'

export default function App() {
const [stocks, setStocks] = useState()
const [myStocks, setMyStocks] = useState([])
const [sort, setSort] = useState(null)
const [masterStocks, setMasterStocks] = useState()

async function fetchStockList() {
  const res = await fetch('http://localhost:3001/stocks')
  res.json().then(res => {
    setStocks(res)
    setMasterStocks(res)
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


function handleSort(method) {
  setSort(method)
  setStocks(stocks.sort(function (a, b) {
    if (a[method] < b[method]) {
      return method === "price" ? 1 : -1
    }
    if (a[method] > b[method]) {
      return method === "name" ? 1 : -1
    }
    return 0;
  }))
}

function handleFilter(evt) {
  if (evt.target.value === "All") {
    return setStocks(masterStocks)
  }
  const filteredStocks = masterStocks.filter(stock => stock.type === evt.target.value)
  setStocks(filteredStocks)
}


  return (
    <main>
      <Header />
      <SearchBar handleSort={handleSort} sort={sort} handleFilter={handleFilter}/> 
      <div className="row">
        <div className="col-6">
          <StockContainer buyOrSell={buyOrSell} stocks={stocks} />
        </div>
        <div className="col-6">
          <PortfolioContainer buyOrSell={buyOrSell} myStocks={myStocks} />
        </div>
      </div>
    </main>
  );
}

