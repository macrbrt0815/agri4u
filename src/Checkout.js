import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Header from "./Header.js";
import NavBar from "./NavBar.js";

import { customerCart } from "./AddToCart";
import { orderSummary } from "./Cart";

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

export let customerDetails = {};
export let shippingDetails = {};
export let paymentDetails = {};
const Checkout = () => {
  const getDetails = (event) => {
    console.warn("handling event");
    event.preventDefault();
    customerDetails = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      phoneNumber: event.target.phoneNumber.value,
      email: event.target.emailAddress.value
    };
    shippingDetails = {
      houseNumber: event.target.houseNumber.value,
      street: event.target.street.value,
      barangaySubdivision: event.target.barangaySubdivision.value,
      city: event.target.city.value,
      province: event.target.province.value,
      zipCode: event.target.zipCode.value
    };
    paymentDetails = {
      paymentType: event.target.paymentType.value,
      cardNumber: event.target.cardNumber.value
    };
    console.log(customerDetails);
    console.log(shippingDetails);
    console.log(paymentDetails);

    document.getElementById("confirmCheckout").click();
  };

  const [showCardNumber, setShowCardNumber] = useState(false);

  const setPayment = (event) => {
    if (event.target.value === "Cash on Delivery") {
      setShowCardNumber(false);
    } else {
      setShowCardNumber(true);
    }
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
        <div class="mt-3 mb-3 ml-2 mlr-2">
          <div class="row">
            <div class="col-8">
              <h4>
                <b>{element.name}</b>
              </h4>
              Price:&nbsp;&nbsp;&nbsp;&nbsp;{element.price}
              <br />
              Quantity:&nbsp;&nbsp;&nbsp;&nbsp;{element.quantity}
            </div>
          </div>
          <b class="cart-delete">Php&nbsp;&nbsp;{element.total}</b>
        </div>
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
              <form onSubmit={getDetails}>
                <div class="m-3">
                  <h5 class="mt ml-2">
                    <b>Customer Details</b>
                  </h5>
                  <div class="customer-details mx-3">
                    <div class="row">
                      <div class="col-md-6">
                        <small>First Name</small>{" "}
                        <input
                          type="text"
                          class="form-control"
                          name="firstName"
                          value={customerDetails.firstName}
                          placeholder="First Name"
                          required="required"
                        />
                        <small class="text-danger float-right"></small>
                      </div>
                      <div class="col-md-6">
                        <small>Last Name</small>{" "}
                        <input
                          type="text"
                          class="form-control"
                          name="lastName"
                          value={customerDetails.lastName}
                          placeholder="Last Name"
                          required="required"
                        />
                        <small class="text-danger float-right"></small>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <small>Phone Number</small>
                        <input
                          type="text"
                          class="form-control"
                          name="phoneNumber"
                          value={customerDetails.phoneNumber}
                          placeholder="09000000000"
                          required="required"
                          maxlength="11"
                        />
                        <small class="text-danger float-right"></small>
                      </div>
                      <div class="col-md-6">
                        <small>Email Address</small>
                        <input
                          type="text "
                          class="form-control"
                          name="emailAddress"
                          value={customerDetails.email}
                          placeholder="user@email.com"
                          required="required"
                        />
                        <small class="text-danger float-right"></small>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="m-3">
                  <h5 class="mt ml-2">
                    <b>Shipping Details</b>
                  </h5>
                  <div class="shipping-details mx-3">
                    <div class="row">
                      <div class="col-md-6">
                        <small>House Number</small>
                        <input
                          type="text"
                          class="form-control"
                          name="houseNumber"
                          value={shippingDetails.houseNumber}
                          placeholder="House Number"
                          required="required"
                        />
                      </div>
                      <div class="col-md-6">
                        <small>Street</small>
                        <input
                          type="text"
                          class="form-control"
                          name="street"
                          value={shippingDetails.street}
                          placeholder="Street"
                          required="required"
                        />
                        <small class="text-danger float-right"></small>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <small>Barangay/ Subdivision</small>
                        <input
                          type="text"
                          class="form-control"
                          name="barangaySubdivision"
                          value={shippingDetails.barangaySubdivision}
                          placeholder="Barangay/ Subdivision"
                          required="required"
                        />
                        <small class="text-danger float-right"></small>
                      </div>
                      <div class="col-md-6">
                        <small>City</small>
                        <input
                          type="text"
                          class="form-control"
                          name="city"
                          value={shippingDetails.city}
                          placeholder="City"
                          required="required"
                        />
                        <small class="text-danger float-right"></small>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <small>Province</small>
                        <input
                          type="text"
                          class="form-control"
                          name="province"
                          value={shippingDetails.province}
                          placeholder="Province"
                          required="required"
                        />
                        <small class="text-danger float-right"></small>
                      </div>
                      <div class="col-md-6">
                        <small>Zip Code</small>
                        <input
                          type="text"
                          class="form-control"
                          name="zipCode"
                          value={shippingDetails.zipCode}
                          placeholder="Zip Code"
                          required="required"
                          maxlength="4"
                        />
                        <small class="text-danger float-right"></small>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="m-3">
                  <h5 class="mt ml-2">
                    <b>Payment Details</b>
                  </h5>
                  <div class="payment-details mx-3">
                    <div class="form-group">
                      <input class="selectedPaymentType" type="hidden" />
                      <small>Payment Type</small>{" "}
                      <select
                        class="custom-select form-control paymentType"
                        name="paymentType"
                        value={paymentDetails.paymentType}
                        id="paymentType"
                        required="required"
                        onChange={setPayment}
                      >
                        <option class="cash" value="Cash on Delivery">
                          Cash On Delivery
                        </option>
                        <option class="card" value="Card Payment">
                          Card
                        </option>
                      </select>
                    </div>

                    {!showCardNumber ? (
                      <div id="cardNumber" class="cardNumber" hidden>
                        <small>Card Number</small>
                        <input
                          type="text"
                          class=" form-control"
                          name="cardNumber"
                          value={paymentDetails.cardNumber}
                          placeholder="00000000000000"
                        />
                        <small class="text-danger float-right"></small>
                      </div>
                    ) : (
                      <div id="cardNumber" class="cardNumber">
                        <small>Card Number</small>
                        <input
                          type="text"
                          class=" form-control"
                          name="cardNumber"
                          value={paymentDetails.cardNumber}
                          placeholder="00000000000000"
                        />
                        <small class="text-danger float-right"></small>
                      </div>
                    )}
                  </div>
                </div>

                <div class="m-3">
                  <br />
                  <div class="row mx-3">
                    <button
                      class="mt-2 btn btn-success btn-block"
                      type="submit"
                    >
                      Checkout
                    </button>
                    <Link id="confirmCheckout" to="/confirm" />
                  </div>
                </div>
              </form>
            </div>

            <div class="col-lg-5">
              <div class="cart-container p-3">
                <div class="m-3">
                  <h5 class="mt ml-2">
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
              <div class="order-summary-container p-3">
                <div class="m-3">
                  <h5 class="mt ml-2">
                    <b>Order Summary</b>
                  </h5>
                  <div class="order-summary mx-3">
                    <div class="row">
                      <div class="col-7">Net Pay</div>
                      <div class="col-5">
                        Php&nbsp;&nbsp;{orderSummary.netPay}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-7">VAT</div>
                      <div class="col-5">Php&nbsp;&nbsp;{orderSummary.vat}</div>
                    </div>
                    <div class="row">
                      <div class="col-7">Gross Pay ( item/ s)</div>
                      <div class="col-5 text-right">
                        Php&nbsp;&nbsp;{orderSummary.grossPay}
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-7">Shipping Fee</div>
                      <div class="col-5">
                        Php&nbsp;&nbsp;{orderSummary.shippingFee}
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-7">
                        <b>Total</b>
                      </div>
                      <div class="col-5">
                        <b>Php&nbsp;&nbsp;{orderSummary.total}</b>
                      </div>
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
export default Checkout;
