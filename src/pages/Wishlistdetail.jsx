import React from "react";
import BreadCrumb from "./BreadCrumb";
import { useDispatch, useSelector } from "react-redux"
import { remove, addToCartFromWishlist } from "./manager/addwishlist/WishSlice";





const WishlistDetail = () => {
   const wishdata= useSelector(p=>p.wish);
  const dispatch = useDispatch();
  if (wishdata.length === 0) {
    return (
      <>
        <BreadCrumb title="My Shopping Card" isOtherPage={true} />
        <div className="shopcard">
          <div className="row mx-5 my-5">
            <div className="col-12">
              <h1>Wishlistde mehsul yoxdur</h1>
              
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <BreadCrumb title="My Wishlist" isOtherPage={true} />
      <div className="wishlistcart my-5">
        <table className="wishlist-table my-5">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {wishdata.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.images[1]} alt='...' />
                  {item.title}
                </td>
                <td>
                <p>PRICE</p>
  {item.lastPrice !== undefined && item.lastPrice !== item.firstPrice ? (
    <div className="multiple-prices">
      <span className="primary-price">${item.firstPrice}</span>
      <span className="secondary-price">${item.lastPrice}</span>
    </div>
  ) : (
    <span className="primary-price">${item.firstPrice}</span>
  )}
                </td>
                <td>
                  <p>STOCK STATUS</p>
                  <button
                    className={
                      item.stock === true ? "true" : "false"
                    }
                  >
                    {item.stock===true?'in-stock':"out-stock"}
                  </button>
                </td>
                <td>
                  <button
                    className={
                      item.stock === true
                        ? "add-to-cart-btn"
                        : "out-of-stock-btn"
                    }
                    onClick={()=>{dispatch(addToCartFromWishlist(wishdata.id))}}
                    disabled={item.stockStatus === false}
                    style={{ margin: "5px", borderRadius: "20px" }}
                     >
                    Add to Cart
                  </button>
                  <button className="delete-btn text-center" onClick={()=>{dispatch(remove(wishdata.id))}}>
                    <i className="fas fa-times"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WishlistDetail;