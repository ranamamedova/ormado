import React from 'react'
import contact from '../data/contact';
import { useState } from 'react'
import { useEffect } from 'react';
// import filterdata from "../data/filterdata"

const Locationincontact = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        filteritems("All")
    }, [])


    const filteritems = (searchitem) => {
        if (searchitem == "All") {
            setData(contact)
        }

        else {
            const newitems = contact.filter((item) => item.place == searchitem)
            setData(newitems)
        }

        console.log(data);

    }

    return (
        <>


            <div className="Map col-12 col-sm-12 col-md-12">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24317.605986667986!2d49.80059587431641!3d40.3711593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d36c2814e59%3A0x6aeb078b24a612a2!2sOrmado%20Kaffeehaus!5e0!3m2!1saz!2saz!4v1700899217022!5m2!1saz!2saz"
                    width={1600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

            </div>


            <div className="locationcontact ">

                <div className=" boxcontainer mysize-width">

                    <div className="container">
                        <div className="row">
                            <div className="leftmap col-12 col-sm-4 col-md-4  ">
                                <div className="text-box">
                                    <div onClick={() => filteritems("Baku")}
                                        className='firststage'
                                    >
                                        <h6>Ormado Kaffeehaus Baku | Yusif Memmedaliyev</h6>
                                        <h6>baku@ormado.de</h6>
                                        <h6>+994502535563</h6>
                                        <h6>09:00 - 17:00</h6>
                                        <h6> <i className="fa-solid fa-location-dot"></i> <span className="ms-1">23-29 Yusif Memmedaliyev, Baku, 1005 Azerbaijan</span></h6>
                                        <div className="circleCard"></div>
                                    </div>

                                    <div onClick={() => filteritems("Arab")}

                                        className='secondstage'
                                    >
                                        <h6>Ormado Kaffeehaus Baku I Zefir Mall</h6>
                                        <h6>zefirmall@ormado.de</h6>
                                        <h6>+994513708225</h6>
                                        <h6>09:00 - 17:00</h6>
                                        <h6><i className="fa-solid fa-location-dot"></i> <span className="ms-1">Xarici Dairevi Yol 8, Baku, Azerbaijan</span></h6>
                                        <div className="circleCard"></div>
                                    </div>

                                    <div onClick={() => filteritems("Odessa")}

                                        className="thirdstage"
                                    >
                                        <h6>Ormado Kaffeehaus Odessa</h6>
                                        <h6>odessa@ormado.com</h6>
                                        <h6>+4917685589190</h6>
                                        <h6>09:00 - 17:00</h6>
                                        <h6><i className="fa-solid fa-location-dot"></i> <span className="ms-1">Spyrydonivs'ka Str. 2, Odessa, 65000 Ukraine</span></h6>
                                        <div className="circleCard"></div>
                                    </div>

                                    <div onClick={() => filteritems("Berlin")}

                                        className='fourthstage'
                                    >
                                        <h6>Ormado Kaffeehaus Berlin | Einbecker</h6>
                                        <h6>einbecker@ormado.de</h6>
                                        <h6>+4917685589190</h6>
                                        <h6>09:00 - 17:00</h6>
                                        <h6><i className="fa-solid fa-location-dot"></i> <span className="ms-1">Einbecker Str. 18, 10317 Berlin, Germany</span></h6>
                                        <div className="circleCard"></div>
                                    </div>
                                </div>
                            </div>


                            <div className="rightmap  col-12 col-sm-8 col-md-8 ">
                                <div className="commonphoto ">

                                    {data.map((item, i) => {
                                        return (
                                            <img className={`myimage-${i}`} src={item.image} alt="" />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Locationincontact