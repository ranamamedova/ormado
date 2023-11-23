import React, { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import BreadCrumb from './BreadCrumb'
import accoerdian from '../assets/img/accoerdion.png'
import SingleProduct from '../components/SingleProduct'
import ep_menu from '../assets/img/ep_menu.png'
import drink from "../assets/img/drink.png";
import drink1 from "../assets/img/drink1.png";
import drink2 from "../assets/img/drink2.png";

const Product = () => {
  const [showCategories, setShowCategories] = useState(true);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

//   const minValRef = useRef(null);
//   const maxValRef = useRef(null);
//   const priceInputMinRef = useRef(null);
//   const priceInputMaxRef = useRef(null);
//   const minTooltipRef = useRef(null);
//   const maxTooltipRef = useRef(null);
//   const rangeRef = useRef(null);

//   useEffect(() => {
//     function slideMin(){
//       let gap = parseInt(maxVal.value)-parseInt(minVal.value);
//       if(gap<=minGap){
//           minVal.value = parseInt(maxVal.value) - minGap
//       }
//       minTooltip.innerHTML = "$" + minVal.value;
//       priceInputMin.value = minVal.value
//       setArea();
//   }

//   function slideMax(){
//     let gap = parseInt(maxVal.value)-parseInt(minVal.value);
//     if(gap<=minGap){
//         maxVal.value = parseInt(minVal.value) + minGap
//     }
//     maxTooltip.innerHTML = "$" + maxVal.value;
//     priceInputMax.value = maxVal.value;
//     setArea();
// }

// function setArea(){
//   range.style.left= (minVal.value / sliderMaxValue) * 100 + "%";
//   minTooltip.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
//   range.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
//   maxTooltip.style.left = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
// }

// function setMinInput(){
//   let minPrice = parseInt(priceInputMin.value);
//   if(minPrice < sliderMinValue){
//       priceInputMin.value = sliderMinValue;
//   }
//   minVal.value = priceInputMin.value;
//   slideMin();
// }

// function setMaxInput(){
//   let maxPrice = parseInt(priceInputMax.value);
//   if(maxPrice < sliderMaxValue){
//       priceInputMax.value = sliderMaxValue;
//   }
//   maxVal.value = priceInputMax.value;
//   slideMax();
// }

//     if (
//       minValRef.current &&
//       maxValRef.current &&
//       priceInputMinRef.current &&
//       priceInputMaxRef.current &&
//       minTooltipRef.current &&
//       maxTooltipRef.current &&
//       rangeRef.current
//     ) {
     
//       const minVal = minValRef.current;
//       const maxVal = maxValRef.current;
//       const priceInputMin = priceInputMinRef.current;
//       const priceInputMax = priceInputMaxRef.current;
//       const minTooltip = minTooltipRef.current;
//       const maxTooltip = maxTooltipRef.current;
//       const range = rangeRef.current;
//       const sliderMinValue = parseInt(minVal.min);
//       const sliderMaxValue = parseInt(maxVal.max);

    
//       window.slideMin = slideMin;
//       window.slideMax = slideMax;
//       window.setArea = setArea;
//       window.setMinInput = setMinInput;
//       window.setMaxInput = setMaxInput;

      
//       minVal.addEventListener('input', slideMin);
//       maxVal.addEventListener('input', slideMax);
//       priceInputMin.addEventListener('input', setMinInput);
//       priceInputMax.addEventListener('input', setMaxInput);
//     }
//   }, []);


  return (
    <>
      <section className='container'>
        <div className="products-page row">
          <div className="col-md-3">
            <div >
              <div className="categories-headline d-flex align-items-center justify-content-between" onClick={toggleCategories}>
                <h5>All Categories</h5>
                <i className={`fa-solid ${showCategories ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </div >
              <div className={`categories ${showCategories ? 'open' : 'closed'}`}>
                <div className='hot-drinks d-flex'>
                  <input type="radio" name="" id="" />
                  <p>Hot Drinks (88)</p>
                </div>
                <div className='hot-drinks d-flex'>
                  <input type="radio" name="" id="" />
                  <p>Cold Drinks (76)</p>
                </div>
                <div className='hot-drinks d-flex'>
                  <input type="radio" name="" id="" />
                  <p>Sweets (34)</p>
                </div>
                <div className='hot-drinks d-flex'>
                  <input type="radio" name="" id="" />
                  <p>Merchandise (47)</p>
                </div>
              </div>
              <div className="double-slider-box mt-5">
                <h3 className='range-title'>Price</h3>
                <div className="range-slider">
                  <span className="slider-track"></span>
                  <input
        type="range"
        name="min_val"
        className="min_val"
        min="1000"
        max="12000"
        value="2000"
        // ref={minValRef}
      />
      <input
        type="range"
        name="max_val"
        className="max_val"
        min="1000"
        max="12000"
        value="7000"
        // ref={maxValRef}
      />
                  <div className="tooltip min-tooltip"></div>
                  <div className="tooltip max-tooltip"></div>
                </div>
                 <div className="input-box">
                  <div className="min-box">
                    <div className='input-wrap'>
                    <span className="input-addon">$</span>
                    <input type="text" name='min_input' className='input-field min-input' onChange="setMinInput()"/>
                    </div>
                  </div>
                  <div className="max-box">
                    <span className="input-addon">$</span>
                    <input type="text" name='max_input' className='input-field max-input' onChange="setMaxInput()"/>
                  </div>
                 </div>
              </div>
              <div className="feature-product">
              <div className="coffeModal pb-3">
                <div className="modelDrinkBox">
                  <div className="d-flex">
                    <div className="img">
                      <img src={drink} alt="" />
                    </div>
                    <div className="modalDrinkText">
                      <p>
                        Ormado Energy Drink <a href="#react">Get code</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="modelDrinkBox">
                  <div className="d-flex">
                    <div className="img">
                      <img src={drink1} alt="" />
                    </div>
                    <div className="modalDrinkText">
                      <p>
                        Ormado Energy Drink <a href="#react">Get code</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="modelDrinkBox">
                  <div className="d-flex">
                    <div className="img">
                      <img src={drink2} alt="" />
                    </div>
                    <div className="modalDrinkText">
                      <p>
                        Ormado Energy Drink <a href="#react">Get code</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className='img-transparent'>
              <img src={accoerdian} alt="" />
              <div className='img-background'></div>
              <div className='img-text-context'>
                <h4>BEST DEALS</h4>
                <h2>Sale of the Month</h2>
                <button>Shop now <i className="fa-solid fa-arrow-right ms-2"></i></button>
              </div>
            </div>
            <div className="sort-divs d-flex align-items-center justify-content-between mt-5 mb-3">
              <div className="sort-by-featured d-flex">
                <label for="">Sort by:</label>
                <select name="" id="">
                  <option value="">Featured</option>
                  <option value="">Featured</option>
                </select>
              </div>
              <p>Showing 1-8 of 20 result</p>
              <p>Showing: 8</p>
              <div className='ep_menu'>
                <img src={ep_menu} alt="ep-menu" />
              </div>
            </div>
            <div className="products">
              <SingleProduct />
            </div>
            <div className='img-transparent'>
              <img src={accoerdian} alt="" />
              <div className='img-background'></div>
              <div className='img-text-context'>
                <h4>BEST DEALS</h4>
                <h2>Sale of the Month</h2>
                <button>Shop now <i className="fa-solid fa-arrow-right ms-2"></i></button>
              </div>
            </div>
            <div className="products">
              <SingleProduct />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product