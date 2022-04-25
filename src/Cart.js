import "./styles.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Header from "./Header.js";
import NavBar from "./NavBar.js";

import { customerCart } from "./AddToCart";

//fruits
import "./resources/fruit/apple.jpg";
import "./resources/fruit/orange.jpg";
import "./resources/fruit/banana.jpg";
//vegetables
import "./resources/vegetable/cabbage.jpg";
import "./resources/vegetable/carrot.jpg";
import "./resources/vegetable/eggplant.jpg";
//proteins
import "./resources/protein/beef.jpg";
import "./resources/protein/pork.jpg";
import "./resources/protein/chicken.jpg";
import "./resources/protein/fish.jpg";
import "./resources/protein/egg.jpg";
//dairy
import "./resources/dairy/butter.jpg";
import "./resources/dairy/cheese.jpg";
import "./resources/dairy/milk.jpg";

export let orderSummary = {};

const useForceUpdate = () => {
  const [value, setValue] = useState(0);
  return () => setValue((value) => value + 1);
};

const Cart = () => {
  const [netPay, setNetPay] = useState(0);
  const [vat, setVAT] = useState(0);
  const [grossPay, setGrossPay] = useState(0);
  const cartTotal = customerCart.length;
  const shippingFee = 50;
  let total = 0;

  const computeGrossPay = () => {
    let tempGrossPay = 0;
    customerCart.forEach((element) => {
      tempGrossPay += element.total;
    });
    return tempGrossPay;
  };

  useEffect(() => {
    setGrossPay(computeGrossPay());
  });

  useEffect(() => {
    setVAT(grossPay * 0.12);
  });

  useEffect(() => {
    setNetPay(grossPay - vat);
  });

  const forceUpdate = useForceUpdate();
  const removeFromCart = (index) => {
    customerCart.splice(index, 1);
    forceUpdate();
    computeGrossPay();
  };

  total = grossPay + shippingFee;

  orderSummary = {
    netPay: netPay.toFixed(2),
    vat: vat.toFixed(2),
    grossPay: grossPay.toFixed(2),
    shippingFee: shippingFee.toFixed(2),
    total: total.toFixed(2)
  };

  const cartItems = customerCart.map((element, index) => (
    <div class="row m-2 cart-item" key={index}>
      <div class="col-md-4">
        <div class="p-auto">
          <img
            src={require("./resources/" +
              element.type +
              "/" +
              element.image +
              ".jpg")}
            class="img-fluid align-middle"
            alt={element.name}
          />
        </div>
      </div>
      <div class="col-md-8">
        <div class="mt-3">
          <div class="row">
            <div class="col-8">
              <h4>
                <b>{element.name}</b>
              </h4>
              Price:&nbsp;&nbsp;&nbsp;&nbsp;{element.price}
              <br />
              Quantity:&nbsp;&nbsp;&nbsp;&nbsp;{element.quantity}
            </div>
            <div class="col-4">
              <b>Php&nbsp;&nbsp;{element.total.toFixed(2)}</b>
            </div>
          </div>
        </div>
        <button
          onClick={() => removeFromCart(index)}
          class="btn btn-danger btn-sm float-right cart-delete"
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <Header />
      <NavBar />
      <div class="container main">
        <div class="container">
          <hr />
          <div class="row">
            <div class="col-lg-7">
              <div class="m-3">
                <h5 class="mt">
                  <b>Shopping Cart</b>
                </h5>
                {customerCart.length === 0 ? (
                  <div class="cart-item-container mx-3">
                    <b>Cart is Empty</b>
                  </div>
                ) : (
                  <div class="cart-item-container mx-3">{cartItems}</div>
                )}
              </div>
            </div>
            <div class="col-lg-5 ">
              <div class="order-summary-container p-3">
                <div class="m-3">
                  <h5 class="mt">
                    <b>Order Summary</b>
                  </h5>
                  <div class="order-summary mx-3">
                    <div class="row">
                      <div class="col-7">Net Pay</div>
                      <div class="col-5">
                        Php&nbsp;&nbsp;{netPay.toFixed(2)}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-7">VAT</div>
                      <div class="col-5">Php&nbsp;&nbsp;{vat.toFixed(2)}</div>
                    </div>
                    <div class="row">
                      <div class="col-7">Gross Pay ({cartTotal} item/ s)</div>
                      <div class="col-5 text-right">
                        Php&nbsp;&nbsp;{grossPay.toFixed(2)}
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-7">Shipping Fee</div>
                      <div class="col-5">
                        Php&nbsp;&nbsp;{shippingFee.toFixed(2)}
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-7">
                        <b>Total</b>
                      </div>
                      <div class="col-5">
                        <b>Php&nbsp;&nbsp;{total.toFixed(2)}</b>
                      </div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <div class="row">
                      <Link
                        to="/checkout"
                        class="btn btn-success btn-block"
                        type="button"
                      >
                        Proceed to Cheeckout
                      </Link>
                    </div>
                    <div class="row mt-1">
                      <Link to="/" class="btn btn-dark btn-block" type="button">
                        Add Items
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
