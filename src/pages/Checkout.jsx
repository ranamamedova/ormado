import React, { useEffect, useState } from "react";
import classNames from "classnames";
import BreadCrumb from "./BreadCrumb";

const productData = [
  {
    id: 1,
    name: "Ormado Energy Drink",
    quantity: 2,
    price: 20.0,
    image:
      "https://s3-alpha-sig.figma.com/img/e3ee/94e6/7954dadb4be2faa26d1003d079be902b?Expires=1702252800&Signature=ZNT8pDQeJtq0-Qp5ey5V7SVUzOyNl2IiivRLXMUO9p3quFE5yT1r5ebWg0uVFXJIVrAmn~JcB7IEPADitrNeisOy9dpJlp-h0MeNBNOnKZIJBqwI4tPdJKGaYma1sfs98oPQZcfsr613gdJlKuO9ZG~7~rW2Pu6XQnFyaozhbUPQrei~3E6fpjcR4VolqmWjhhsqisx~bp-Y-S6Z08ZP896OxYpU9ovz~h6ZKZP4-RRHWAKrmhNe~i10cAyS84wyJnZo5wUSAcWcmamOW0t85B64iBABqDVQXtt72nXENBz6clslRw17Nln6o00u1nIRFha49V2N2xUNnLB7AassmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 2,
    name: "Ormado Energy Drink",
    quantity: 1,
    price: 15.0,
    image:
      "https://s3-alpha-sig.figma.com/img/e3ee/94e6/7954dadb4be2faa26d1003d079be902b?Expires=1702252800&Signature=ZNT8pDQeJtq0-Qp5ey5V7SVUzOyNl2IiivRLXMUO9p3quFE5yT1r5ebWg0uVFXJIVrAmn~JcB7IEPADitrNeisOy9dpJlp-h0MeNBNOnKZIJBqwI4tPdJKGaYma1sfs98oPQZcfsr613gdJlKuO9ZG~7~rW2Pu6XQnFyaozhbUPQrei~3E6fpjcR4VolqmWjhhsqisx~bp-Y-S6Z08ZP896OxYpU9ovz~h6ZKZP4-RRHWAKrmhNe~i10cAyS84wyJnZo5wUSAcWcmamOW0t85B64iBABqDVQXtt72nXENBz6clslRw17Nln6o00u1nIRFha49V2N2xUNnLB7AassmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];
const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [productData]);

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  const handleOrder = () => {
    console.log("Order placed with payment method:", paymentMethod);
  };

  const calculateTotal = () => {
    const newSubtotal = productData.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );
    setSubtotal(newSubtotal);
    setTotal(newSubtotal - 10.0);
  };

  return (
    <>
      <BreadCrumb title="Checkout" isOtherPage={true} />
      <div className="checkout my-5">
        <div className="row mx-5 my-5">
          <div className="col-12 col-sm-12 col-md-9 mb-5">
            <div>
              <p className="bil">Billing Information</p>
            </div>
            <div className="d-fl">
              <div className="int">
                <p>Name</p>
                <input type="text" id="name" placeholder="Your first name" />
              </div>
              <div className="int">
                <p>Last Name</p>
                <input type="text" id="lastName" placeholder="Your last name" />
              </div>
              <div className="int">
                <p>Company Name</p>
                <input
                  type="text"
                  id="companyName"
                  placeholder="Company name"
                />
              </div>
            </div>
            <div>
              <p>Street Address</p>
              <input type="text" id="streetAddress" placeholder="Email" />
            </div>
            <div className="d-fl">
              <div className="int">
                <p>Country</p>
                <input type="text" id="country" placeholder="Select" />
              </div>
              <div className="int">
                <p>State</p>
                <input type="text" id="state" placeholder="Selects" />
              </div>
              <div className="int">
                <p>Zip Code</p>
                <input type="text" id="zipCode" placeholder="Zip Code" />
              </div>
            </div>
            <div className="d-fl">
              <div className="int">
                <p>Name</p>
                <input
                  type="text"
                  id="contactName"
                  placeholder="Email Address"
                />
              </div>
              <div className="int">
                <p>Email</p>
                <input type="email" id="email" placeholder="Phone number" />
              </div>
            </div>
            <div className="d-flex my-3 ">
              <input type="checkbox" className="checkbox" id="checkbox" />
              <p className="ms-2">Save Shipping Address</p>
            </div>
            <hr />
            <div>
              <p className="bil">Additional Info</p>
              <p>Order Notes (Optional)</p>
              <input
                type="text"
                placeholder="Notes about your order, e.g. special notes for delivery"
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3">
            <div className={classNames("card ")}>
              <p className="bil">Order Summary</p>
              {productData.map((product) => (
                <div key={product.id} className={classNames("data mb-2")}>
                  <img
                    src={product.image}
                    alt={`Product Image ${product.id}`}
                  />
                  <p> {product.name}</p>
                  <p>x {product.quantity}</p>
                  <p> ${product.price.toFixed(2)}</p>
                </div>
              ))}
              <div className="pays my-3">
                <div className={classNames("payment-sec subtotal d-flex")}>
                  <p>Subtotal:</p>
                  <p className="yellow">${subtotal.toFixed(2)}</p>
                </div>
                <hr />
                <div className={classNames("payment-sec shipping d-flex")}>
                  <p>Shipping:</p>
                  <p className="yellow">$10.00</p>
                </div>
                <hr />
                <div className={classNames("payment-sec total d-flex")}>
                  <p>Total:</p>
                  <p className="yellow">${total.toFixed(2)}</p>
                </div>
              </div>
              <div className={classNames("payment")}>
                <p className="bil">Payment Method</p>
                <div className={classNames("payment-option ")}>
                  <input
                    type="radio"
                    id="radio"
                    name="paymentMethod"
                    checked={paymentMethod === "cahs"}
                    onChange={() => handlePaymentChange("cahs")}
                  />
                  <p htmlFor="cahs">Cash on delivery</p>
                </div>
                <div className={classNames("payment-option ")}>
                  <input
                    type="radio"
                    id="radio"
                    name="paymentMethod"
                    checked={paymentMethod === "creditCard"}
                    onChange={() => handlePaymentChange("creditCard")}
                  />
                  <p htmlFor="creditCard">Credit Card</p>
                </div>
                <div className={classNames("payment-option ")}>
                  <input
                    type="radio"
                    id="radio"
                    name="paymentMethod"
                    checked={paymentMethod === "paypal"}
                    onChange={() => handlePaymentChange("paypal")}
                  />
                  <p htmlFor="paypal">PayPal</p>
                </div>
              </div>
              <button
                onClick={handleOrder}
                className={classNames("order-button mt-3")}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
