import React, { useEffect } from "react";
import BreadCrumb from "./BreadCrumb";
import { useDispatch, useSelector } from "react-redux"
import { remove } from "./manager/WishSlice";





const WishlistDetail = () => {
   const wishdata= useSelector(p=>p.wish);
  const dispatch = useDispatch();

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
                  <img src={item.images[1]} alt={item.title} />
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
                      item.stock === "true" ? "true" : "false"
                    }
                  >
                    {item.stock==='true'?'in-stock':"out-stock"}
                  </button>
                </td>
                <td>
                  <button
                    className={
                      item.stockStatus === "in stock"
                        ? "add-to-cart-btn"
                        : "out-of-stock-btn"
                    }
                    disabled={item.stockStatus === "out stock"}
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
