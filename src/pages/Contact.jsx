import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import BreadCrumb from "./BreadCrumb";
import myData from "../data/myData"
import Faqs from "../components/Faqs"
const Contact = () => {
  const [datamap, setDatamap] = useState([]);
  const [dataImg, setDataImg] = useState([]);
  const [active, setActive] = useState(0);


  useEffect(() => {
      filteritems('All'); filtermap(0);
  }, [])



  const filteritems = (searchitem) => {
      if (searchitem === 'All') {
          setDataImg(myData);
      }
      else {
          const newitems = myData.filter((item) => item.id === searchitem)
          setDataImg(newitems)
      }
  }

  const filtermap = (finditem) => {
      if (finditem === 'up') {
          setDatamap(myData)
      }
      else {
          const updateitems = myData.filter((item) => item.id === finditem)
          setDatamap(updateitems)
      }
  }

  return (
    <>
    <BreadCrumb title="Contact" isOtherPage={true} />
<div className="diascuss text-light ">
  <div className="row ">
    <div className="col-12 col-sm-6 col-md-4 my-5 order-xl-1 order-sm-1 order-lg-1 order-2 ">
      <h1 >contact  us</h1>
     <div className="texts">
     <h2 className="my-4"><span>Have a project!</span> Let’s diascuss </h2>
     <p >Thank you for getting in touch! <span>Kindly.</span>    Fill the form, have a great day!</p>
     </div>
    </div>
     <div className="col-12 col-sm-6 col-md-4 my-5 order-xl-2 order-sm-2 order-lg-2 order-1">
      <div className="left-one ">
      <div className="both ">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6">
          <input type="text" placeholder="Your Name"/>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
          <input type="number" name="" id="" placeholder="Phone Number"/>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
          <input type="email" name="" id="" placeholder="Your Email"/>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
          <select name="country" id="country">
          <option disabled selected value="" >Country</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        </select>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
          <input type="text" placeholder="Company Name"/>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
          <select name="interested" id="interested" >
          <option disabled selected value="" >Interested In</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        </select>
          </div>
          
        </div>

      </div>
      <div className="endl d-flex flex-directions-column">
      <input type="text" name="" id="" placeholder="Message" className="message "/>
        <button type="submit" className="mt-3">Submit</button>
      </div>
      </div>
    </div>
  </div>
</div>
<div className="Map col-12 col-sm-12 col-md-12">

<div className="mynative mymap">

    <div className="logoimage">
        <img className='myimg' src="http://localhost:3000/static/media/logo.3d1574839a4f7d4adc4b.png" alt="" />
    </div>

    {datamap.map((item, i) => {
        return (

            <iframe
                className='mymap'
                src={item.map}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ormado Kaffeehaus Location on Google Maps"
            />

        )
    })}
</div>
</div>

<div className="locationcontact">

<div className=" boxcontainer mysize-width">

    <div className="container">
        <div className="row">
            <div className="leftmap  col-12 col-sm-4 col-md-4  ">



                <div className="text-box ">
                    {myData.map((item, i) => {

                        return (
                            <div onClick={() => {
                                filteritems(i);
                                filtermap(i);
                                setActive(i);
                            }}
                                className={`${i == 0 ?
                                    "firststage "
                                    : i == 1 ?
                                        "secondstage "
                                        : i == 2 ?
                                            "thirdstage "
                                            : i == 3 ?
                                                "fourthstage " : " "
                                    } ${active === i ? ' myactive' : ""}`}

                            >
                                <h6>{item.name}</h6>
                                <h6>{item.email}</h6>
                                <h6>{item.phone}</h6>
                                <h6>{item.hours}</h6>
                                <h6> <i className="fa-solid fa-location-dot"></i> <span className="ms-1">{item.address}</span></h6>
                                <div className="circleCard"></div>
                            </div>
                        )
                    })}
                </div>



                {/* <div className="text-box">
                    <div onClick={() => {
                        filteritems(0);
                        filtermap(0);
                        setActive(0);
                    }}
                        className={`firststage ${active === 0 ? 'myactive' : ""}`}

                    >
                        <h6>Ormado Kaffeehaus Baku | Yusif Memmedaliyev</h6>
                        <h6>baku@ormado.de</h6>
                        <h6>+994502535563</h6>
                        <h6>09:00 - 17:00</h6>
                        <h6> <i className="fa-solid fa-location-dot"></i> <span className="ms-1">23-29 Yusif Memmedaliyev, Baku, 1005 Azerbaijan</span></h6>
                        <div className="circleCard"></div>
                    </div>

                    <div onClick={() => { filteritems(1); filtermap(1); setActive(1) }}

                        className={`secondstage ${active === 1 ? 'myactive' : ""}`}
                    >
                        <h6>Ormado Kaffeehaus Baku I Zefir Mall</h6>
                        <h6>zefirmall@ormado.de</h6>
                        <h6>+994513708225</h6>
                        <h6>09:00 - 17:00</h6>
                        <h6><i className="fa-solid fa-location-dot"></i> <span className="ms-1">Xarici Dairevi Yol 8, Baku, Azerbaijan</span></h6>
                        <div className="circleCard"></div>
                    </div>

                    <div onClick={() => { filteritems(2); filtermap(2); setActive(2) }}

                        className={`thirdstage ${active === 2 ? 'myactive' : ""}`}
                    >
                        <h6>Ormado Kaffeehaus Odessa</h6>
                        <h6>odessa@ormado.com</h6>
                        <h6>+4917685589190</h6>
                        <h6>09:00 - 17:00</h6>
                        <h6><i className="fa-solid fa-location-dot"></i> <span className="ms-1">Spyrydonivs'ka Str. 2, Odessa, 65000 Ukraine</span></h6>
                        <div className="circleCard"></div>
                    </div>

                    <div onClick={() => { filteritems(3); filtermap(3); setActive(3) }}

                        className={`fourthstage ${active === 3 ? 'myactive' : ""}`}
                    >
                        <h6>Ormado Kaffeehaus Berlin | Einbecker</h6>
                        <h6>einbecker@ormado.de</h6>
                        <h6>+4917685589190</h6>
                        <h6>09:00 - 17:00</h6>
                        <h6><i className="fa-solid fa-location-dot"></i> <span className="ms-1">Einbecker Str. 18, 10317 Berlin, Germany</span></h6>
                        <div className="circleCard"></div>
                    </div>
                </div> */}


            </div>

            <div className="rightmap  col-12 col-sm-8 col-md-8  ">
                <div className="commonphoto  ">
                    {dataImg.map((item) => {
                        return (

                            item.image.map((img, i) => {

                                return (
                                    <div ><img className={`myimage-${i}`} src={img} alt="" /></div>
                                )
                            })
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<Faqs/>

      
    </>
  );
};

export default Contact;