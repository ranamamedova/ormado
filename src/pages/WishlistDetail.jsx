import React from 'react';
import BreadCrumb from './BreadCrumb';

const WishlistDetail = ({ items, onAddToCart, onDelete }) => {
  return (
    <> 
     <BreadCrumb title="My Wishlist" isOtherPage={true} />
    <div className="wishlistcart my-5">
       <table className="wishlist-table my-5">
      <thead >
        <tr >
          
          <th>Product</th>
          <th>Price</th>
          <th>Stock Status</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td><img src={item.image} alt={item.name} />{item.name}</td>
            <td >
              <p>PRICE</p>
            <div className={item.price.length > 1 ? 'multiple-prices' : ''}>
            {item.price.map((price, index) => (
            <span key={index} className={index === 0 ? 'secondary-price' : 'primary-price'}>
              {price}
            </span>
             ))}
            </div>
            </td>
            <td >
            <p>STOCK STATUS</p>
            <button className={item.stockStatus === 'in stock' ? 'in-stock' : 'out-stock'}>  {item.stockStatus}</button>  
            </td>
            <td>
              
              <button
                className={item.stockStatus === 'in stock' ? 'add-to-cart-btn' : 'out-of-stock-btn'}
                onClick={() => onAddToCart(item.id)}
                disabled={item.stockStatus === 'out stock'}
                style={{margin:"5px",borderRadius:"20px"}}
              >
                Add to Cart
              </button>
              <button className="delete-btn text-center" onClick={() => onDelete(item.id)}>
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

const WishlistPage = () => {
  const wishlistItems = [
    {
      "id": 1,
      "image": "https://s3-alpha-sig.figma.com/img/e3ee/94e6/7954dadb4be2faa26d1003d079be902b?Expires=1702252800&Signature=ZNT8pDQeJtq0-Qp5ey5V7SVUzOyNl2IiivRLXMUO9p3quFE5yT1r5ebWg0uVFXJIVrAmn~JcB7IEPADitrNeisOy9dpJlp-h0MeNBNOnKZIJBqwI4tPdJKGaYma1sfs98oPQZcfsr613gdJlKuO9ZG~7~rW2Pu6XQnFyaozhbUPQrei~3E6fpjcR4VolqmWjhhsqisx~bp-Y-S6Z08ZP896OxYpU9ovz~h6ZKZP4-RRHWAKrmhNe~i10cAyS84wyJnZo5wUSAcWcmamOW0t85B64iBABqDVQXtt72nXENBz6clslRw17Nln6o00u1nIRFha49V2N2xUNnLB7AassmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "name": "Ormado Energy Drink",
      "price": ["$50", "$40"],
      "stockStatus": "in stock"
    },
    {
      "id": 2,
      "image": "https://s3-alpha-sig.figma.com/img/853b/6258/4e27fac09098a3ed919163fa8d619121?Expires=1702252800&Signature=GDG8sEBy6oHUk52ttsra03m9NqRVMBS6~1DiyOVFEQSAERGQ3tthHrhrR2ISwsp1iu92FWKIZ1PcRqepL1n6hnFdFTnjUhLw66eDEL0uR0lScu431gGr0JM-C3T~yuFY95Oa7zorBcMX53hrjGt9AreLvQ1MJLdBozSeFsoZ6NrkfACzdbDXinoZMdoxSnJ~3F2MfyjXbaPH09ZHV1kLhj5VRVPgTwXpnepbMSRElbZ1hHenmAFO6zMTqpVbwZZLyrX7a42ABe7s3Rnkdo4-Sek7v5zkBAWf5wo~oK6LxduKxiNO9-h-DJ905tMPW6qPa4pBhiMIhkglcyVyR9d3FA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "name": "Ormado Energy Drink",
      "price": ["$30"],
      "stockStatus": "out stock"
    },
    {
      "id": 3,
      "image": "https://s3-alpha-sig.figma.com/img/a9df/c7c2/1832412bf2b5a43c31e25fa469c14dd3?Expires=1702252800&Signature=QBIHiGCanKQgA3d0vNKkKoPaE6tBnHGhXyqL8Y2AU2qdWM6UXqhb03mFuATFl9m6zx0Ku9IF0hH~HZGrTU52VR3BO-RLQ28lAVH0TlxdtMn1RFqTk7FSWBnhT-PVgvG9A7GGcP-Wqn9hAqE1bdYZjoLiL4KDjf63BsRlxR1655DmP017R2azwlX2l1pXYhW4~ZLQGwGjQxeCviKJeqDaWiw1pN9JIBrGqGeqbtz~V2iCZng138iuy1sy7wERwIEcbzyfFTfuo98-Ba--AfUIdj52VSeePfYVSJgdqSYbk0iYyzFS7NaPjxSMwuSvzwbJRSzFcm3ErtuUPRc6O5mGig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "name": "Ormado Energy Drink",
      "price": ["$60", "$55"],
      "stockStatus": "in stock"
    }
  ];

  const handleAddToCart = (itemId) => {
    
    console.log(`Adding item ${itemId} to the cart`);
  };

  const handleDeleteItem = (itemId) => {
    
    console.log(`Deleting item ${itemId}`);
  };

  return (
    <div>
      
      <WishlistDetail
        items={wishlistItems}
        onAddToCart={handleAddToCart}
        onDelete={handleDeleteItem}
      />
    </div>
  );
};

export default WishlistPage;