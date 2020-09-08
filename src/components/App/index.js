import React from 'react';
import OrderList from "../OrderList";
import Header from "../Header";
import './style.css';

function App() {
  return (
    <div className="app">
        <Header />
      <OrderList/>
    </div>
  );
}

export default App;
