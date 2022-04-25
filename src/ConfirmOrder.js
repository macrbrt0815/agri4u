import React from "react";
import Header from "./Header.js";
import NavBar from "./NavBar.js";
import { customerDetails, shippingDetails, paymentDetails } from "./Checkout";
import { customerCart } from "./AddToCart";
import { orderSummary } from "./Cart";

import logo from "./resources/images/logo.png";

const ConfirmOrder = () => {
  const cartTotal = customerCart.length;
  const cartItems = customerCart.map((element, index) => (
    <div class="row" key={index}>
      <div class="col-sm-7">{element.name}</div>
      <div class="col-sm-5">Php&nbsp;&nbsp;{element.total.toFixed(2)}</div>
    </div>
  ));

  return (
    <div>
      <Header />
      <NavBar />
      <div class="container main">
        <div class="container receipt col-lg-6 col-sm">
          <div class="receipt-header">
            <img class="img-fluid" src={logo} height="30%" />
            <h4>
              <small>Makati City, Philippines</small>
            </h4>
            <h6>
              <small>DTI NUMBER: 123456</small>
            </h6>
          </div>
          <hr class="m-3" />
          <div class="shipping-billing-container mt-3 mx-5">
            <div class="m-3">
              <h4 class="mt">
                <b>Shipping and Billing</b>
              </h4>
              <div class="shipping-billing mx-5">
                <div class="row">
                  <div class="col-sm-1">
                    <i class="fas fa-user"></i>
                  </div>
                  <div class="col-sm-11">
                    <b>
                      {customerDetails.firstName} {customerDetails.lastName}
                    </b>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-1">
                    <i class="fas fa-map-marked-alt"></i>
                  </div>
                  <div class="col-sm-11">
                    {shippingDetails.houseNumber} {shippingDetails.street}{" "}
                    <br />
                    {shippingDetails.barangaySubdivision} {shippingDetails.city}
                    <br />
                    {shippingDetails.province}, {shippingDetails.zipCode}
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-1">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="col-sm-11">{customerDetails.phoneNumber}</div>
                </div>

                <div class="row">
                  <div class="col-sm-1">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="col-sm-11">{customerDetails.email}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="confirmation-order-summary-container mt-3 mx-5">
            <div class="m-3">
              <h4 class="mt">
                <b>Order Summary</b>
              </h4>
              <div class="order-summary-cart mx-5">{cartItems}</div>
              <hr />
              <div class="order-summary mx-5">
                <div class="row">
                  <div class="col-sm-7">Shipping Fee</div>
                  <div class="col-sm-5">
                    Php&nbsp;&nbsp;{orderSummary.shippingFee}
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-sm-7">Net Pay</div>
                  <div class="col-sm-5">
                    Php&nbsp;&nbsp;{orderSummary.netPay}
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-7">VAT</div>
                  <div class="col-sm-5">Php&nbsp;&nbsp;{orderSummary.vat}</div>
                </div>

                <div class="row">
                  <div class="col-sm-7">Gross Pay ({cartTotal} item/ s)</div>
                  <div class="col-sm-5">
                    Php&nbsp;&nbsp;{orderSummary.grossPay}
                  </div>
                </div>

                <br />
                <div class="row">
                  <div class="col-sm-6 left-payment">Payment Type</div>
                  <div class="col-sm-6 right-payment">
                    {paymentDetails.paymentType}
                  </div>
                </div>
              </div>
              <hr />
              <div class="order-summary-total mx-5">
                <div class="row">
                  <div class="col-sm-7">
                    <b>Total</b>
                  </div>
                  <div class="col-sm-5">
                    <b>Php&nbsp;&nbsp;{orderSummary.total}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container col mt-3">
          <div class="receipt-footer">
            <h4>Thank you for Shopping with us!</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
