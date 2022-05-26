import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./components/Coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchedWord, setSearchedWord] = useState("");

  useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((response) => setListOfCoins(response.data.coins));
  }, []);

  const filteredCoin = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchedWord.toLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="search coin"
          onChange={(event) => setSearchedWord(event.target.value)}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoin.map((coin) => (
          <Coin
            name={coin.name}
            icon={coin.icon}
            price={coin.price}
            symbol={coin.symbol}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
