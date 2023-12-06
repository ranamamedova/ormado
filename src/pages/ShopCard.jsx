import React from 'react';
import BreadCrumb from './BreadCrumb';
import { useEffect } from 'react';
import { useState } from 'react';

const shopcarditem = [
  {
    "id": 1,
    "image": "https://s3-alpha-sig.figma.com/img/e3ee/94e6/7954dadb4be2faa26d1003d079be902b?Expires=1702252800&Signature=ZNT8pDQeJtq0-Qp5ey5V7SVUzOyNl2IiivRLXMUO9p3quFE5yT1r5ebWg0uVFXJIVrAmn~JcB7IEPADitrNeisOy9dpJlp-h0MeNBNOnKZIJBqwI4tPdJKGaYma1sfs98oPQZcfsr613gdJlKuO9ZG~7~rW2Pu6XQnFyaozhbUPQrei~3E6fpjcR4VolqmWjhhsqisx~bp-Y-S6Z08ZP896OxYpU9ovz~h6ZKZP4-RRHWAKrmhNe~i10cAyS84wyJnZo5wUSAcWcmamOW0t85B64iBABqDVQXtt72nXENBz6clslRw17Nln6o00u1nIRFha49V2N2xUNnLB7AassmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "name": "Ormado Energy Drink",
    "price": ["$50"],
  },
  {
    "id": 2,
    "image": "https://s3-alpha-sig.figma.com/img/853b/6258/4e27fac09098a3ed919163fa8d619121?Expires=1702252800&Signature=GDG8sEBy6oHUk52ttsra03m9NqRVMBS6~1DiyOVFEQSAERGQ3tthHrhrR2ISwsp1iu92FWKIZ1PcRqepL1n6hnFdFTnjUhLw66eDEL0uR0lScu431gGr0JM-C3T~yuFY95Oa7zorBcMX53hrjGt9AreLvQ1MJLdBozSeFsoZ6NrkfACzdbDXinoZMdoxSnJ~3F2MfyjXbaPH09ZHV1kLhj5VRVPgTwXpnepbMSRElbZ1hHenmAFO6zMTqpVbwZZLyrX7a42ABe7s3Rnkdo4-Sek7v5zkBAWf5wo~oK6LxduKxiNO9-h-DJ905tMPW6qPa4pBhiMIhkglcyVyR9d3FA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "name": "Ormado Energy Drink",
    "price": ["$30"],
  }
];

const ShopCard = ({onDelete,classNames}) => {
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [shopcarditem]);

  

  const calculateTotal = () => {
    const newSubtotal = shopcarditem.reduce(
      (acc, product) => acc + (parseInt(product.price[0].slice(1)) * 2),
      0
    );
    setSubtotal(newSubtotal);
    setTotal(newSubtotal - 10.0);
  };

  return (
    <>
      <BreadCrumb title="My Shopping Card" isOtherPage={true} />

      <div className="shopcard">
        <div className="row mx-5 my-5">
          <div className="col-12 col-sm-12 col-md-9 mb-5">
            <table className='my-3'>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {shopcarditem.map(item => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                      {item.name}
                    </td>
                    <td>{item.price.join(', ')}</td>
                    <td>
                    <div className="quantity-shop">
                      <button className="quantity btn">
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <span>0</span>
                      <button className="quantity btn">
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                    </td>
                    <td >
                      <div className="subtotal-sec ">
                      ${parseInt(item.price[0].slice(1)) * 2} 
                    <button className="delete-btn text-center" onClick={() => onDelete(item.id)}>
                 <i className="fas fa-times"></i>
              </button>
                      </div></td>
                  </tr>
                ))}
                <tr>
              <td colSpan="4" className="text-center">
                <button className="btn btn-table-end">
                Return to shop
                </button>
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
                  <p className='coffs'>${subtotal.toFixed(2)}</p>
                </div>
                <hr />
                <div className='price-sec d-flex'>
                  <p>Shipping:</p>
                  <p className='coffs'>$10.00</p>
                </div>
                <hr />
                <div className='price-sec d-flex'>
                  <p>Total:</p>
                  <p className="yellow">${total.toFixed(2)}</p>
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
