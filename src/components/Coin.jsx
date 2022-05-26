import React from "react";

const Coin = ({ name, icon, price, symbol }) => {
  return (
    <div className="coin-container">
      <div className="coin">
        <h1>{name}</h1>
        <img src={icon} />
        <h4>{price}</h4>
        <h4>{symbol}</h4>
      </div>
    </div>
  );
};

export default Coin;
