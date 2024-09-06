import React from 'react';
import BreadCrumb from './BreadCrumb';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { removeToCart } from './manager/addtocart/CartSlice';
import { Link } from 'react-router-dom';



const ShopCard = () => {
  const cartdata= useSelector(e=>e.cart);
  const dispatch = useDispatch();
  const shippingCost=10;
  const calculateTotal = () => {
    const subtotal = cartdata.reduce((total, item) => total + item.lastPrice * 2, 0);
    return subtotal - shippingCost;
  };

 
  
  
  if (cartdata.length === 0) {
    return (
      <>
        <BreadCrumb title="My Shopping Card" isOtherPage={true} />
        <div className="shopcard">
          <div className="row mx-5 my-5">
            <div className="col-12">
              <h1>Sebetde mehsul yoxdur</h1>
              <Link to="/product">
                <button className="btn btn-table-end">
                  shop now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <BreadCrumb title="My Shopping Card" isOtherPage={true} />

      <div className="shopcard">
        <div className="row mx-5 my-5">
          <div className="col-12 col-sm-12 col-md-9 mb-5">
            <table className='my-3'>
              <thead>
                <tr>
                  <th> <p className='ms-4'>Product</p></th>
                  <th> <p>Price</p></th>
                  <th> <p>Quantity</p></th>
                  <th> <p>Subtotal</p></th>
                </tr>
              </thead>
              <tbody>
                {cartdata.map(item => (
                  <tr key={item.id}>
                    <td className='darks'>
                      <img className='dark-img' src={item.images[1]} alt={item.description}  />
                      {item.title}
                    </td>
                    <td>${item.lastPrice}</td>
                    <td>
                      <p className='response'>Quantity</p>
                      <div className="quantity-shop">
                      <button className="quantity btn" >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span>1</span>
                      <button className="quantity btn" >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>

                    </td>
                    <td >
                    <p className='response'>Price</p>
                      <div className="subtotal-sec ">
                    ${parseInt(item.lastPrice) * 2} 
                    <button className="delete-btn text-center"   onClick={()=>{dispatch(removeToCart(cartdata.id))}}>
                 <i className="fas fa-times"></i>
              </button>
                      </div></td>
                  </tr>
                ))}
                <tr>
              <td colSpan="4" className="text-center">
              <Link to="/product">
                <button className="btn btn-table-end">
                Return to shop
                </button>
                </Link>
              </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 col-sm-12 col-md-3 my-3">
            <div className='card'>
              <p className="bil">Cart Total</p>
              <div className="pays my-3">
                <div className='price-sec d-flex'>
                  <p>Subtotal:</p>
                  <p className='coffs'>${calculateTotal()}</p>
                </div>
                <hr />
                <div className='price-sec d-flex'>
                  <p>Shipping:</p>
                  <p className='coffs'>${shippingCost}</p>
                </div>
                <hr />
                <div className='price-sec d-flex'>
                  <p>Total:</p>
                  <p className="yellow">$1200</p>
                </div>
              </div>
              <button className='order-btn'>
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCard;