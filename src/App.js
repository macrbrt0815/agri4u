import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Checkout from "./Checkout";
import ConfirmOrder from "./ConfirmOrder";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
            <Route exact path="/checkout" element={<Checkout />}></Route>
            <Route exact path="/confirm" element={<ConfirmOrder />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
