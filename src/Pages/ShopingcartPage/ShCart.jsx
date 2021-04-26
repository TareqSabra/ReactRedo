import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import React, { useState, useEffect } from "react";
import "./Shoopingcart.scss";
function ShCart({ location }) {
  const tax = 5;
  console.log(location);
  const [amount, setamount] = useState(location.sc.amount);
  const [item, setitem] = useState(location.sc.item);
  const [CartItems, setCartItems] = useState([item]);
  const [totalprice, settotalprice] = useState(amount * item.itemPrice);
  const handelIncrement = () => {
    let value = amount + 1;
    setamount(value);
    FindTotal(value);
  };
  const handelDecrement = () => {
    if (amount <= 1) {
      let value = 1;
      setamount(value);
      FindTotal(value);
    } else {
      let value = amount - 1;
      setamount(value);
      FindTotal(value);
    }
  };
  const FindTotal = (value) => {
    settotalprice(value * item.itemPrice);
  };
  return (
    <div className="">
      <div className="container text-center">
        <div className="row text-center mt-5">
          <div className="col-12">
            <h1>Shopping Cart</h1>
          </div>
        </div>
        <div className="row  mt-5 ">
          <div className="col-8 border-top border-bottom d-flex flex-row">
            <div className="font-weight-bolder">Product Name</div>
            <div className="d-flex flex-row itemHeader">
              <div className="mr-5 font-weight-bolder">price</div>
              <div className="mr-5 font-weight-bolder">Quantity</div>
              <div className="mr-5 font-weight-bolder">total</div>
            </div>
          </div>
          <div className="col-8 itemBar">
            {CartItems.map((it, index) => {
              return (
                <React.Fragment>
                  <div className="d-flex flex-row position-relative border-bottom">
                    <img
                      alt="productImg"
                      src={it.image}
                      width="50"
                      height="50"
                    />
                    <div className="d-flex flex-column mr-5">
                      <h5>{it.imagesTitel}</h5>
                      <h5>{"$" + it.itemPrice}</h5>
                    </div>
                    <div className="amountCont">
                      <h5 className="font-weight-bolder mt-2 ml-3">
                        {"$" + it.itemPrice}
                      </h5>
                      <RemoveIcon className="icon" onClick={handelDecrement} />
                      <input
                        type="textarea"
                        name="textValue"
                        Value={amount}
                        className="inputS"
                      />
                      <AddIcon className="icon" onClick={handelIncrement} />
                      <h5 className="font-weight-bolder mt-2 ml-3">
                        {"$" + totalprice}
                      </h5>
                    </div>
                  </div>

                  <br />
                </React.Fragment>
              );
            })}
          </div>
          <div className="col-4 SummaryC ">
            <br />
            <span className="text text-left">Summary</span>

            <div className="border-bottom" />
            <br />
            <span className="text">Subtotal</span>
            <br />
            <span> {"$" + totalprice} </span>
            <div className="border-bottom" />
            <br />
            <span className="text">shipping(Flat Rate-Fixed)</span>
            <br />
            <span>{"$" + tax}</span>
            <br />
            <div className="border-bottom" />
            <br />
            <span className="text">Order Toltal</span>
            <br />
            <span>{"$" + (Number(totalprice) + Number(tax))}</span>
            <br />
            <button className="btn btn-danger">GO TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShCart;
