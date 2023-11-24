import React from 'react'
import contact from '../data/contact';
import { useState } from 'react'

const Locationincontact = () => {

    const [data, setData] = useState(contact);

    return (
        <>

            <div className="locationcontact ">
                <div className="mysize-width boxcontainer">
                    <div className="container">
                        <div className="row">
                            <div className="leftmap col-12 col-sm-4 col-md-4  ">


                                <div className="text-box">
                                    <div

                                        className='firststage'
                                    >
                                        <h6>Ormado Kaffeehaus Baku | Yusif Memmedaliyev</h6>
                                        <h6>baku@ormado.de</h6>
                                        <h6>+994502535563</h6>
                                        <h6>09:00 - 17:00</h6>
                                        <h6> <i className="fa-solid fa-location-dot"></i> <span className="ms-1">23-29 Yusif Memmedaliyev, Baku, 1005 Azerbaijan</span></h6>
                                        <div className="circleCard"></div>
                                    </div>

                                    <div

                                        className='secondstage'
                                    >
                                        <h6>Ormado Kaffeehaus Baku I Zefir Mall</h6>
                                        <h6>zefirmall@ormado.de</h6>
                                        <h6>+994513708225</h6>
                                        <h6>09:00 - 17:00</h6>
                                        <h6><i className="fa-solid fa-location-dot"></i> <span className="ms-1">Xarici Dairevi Yol 8, Baku, Azerbaijan</span></h6>
                                        <div className="circleCard"></div>
                                    </div>

                                    <div

                                        className="thirdstage"
                                    >
                                        <h6>Ormado Kaffeehaus Odessa</h6>
                                        <h6>odessa@ormado.com</h6>
                                        <h6>+4917685589190</h6>
                                        <h6>09:00 - 17:00</h6>
                                        <h6><i className="fa-solid fa-location-dot"></i> <span className="ms-1">Spyrydonivs'ka Str. 2, Odessa, 65000 Ukraine</span></h6>
                                        <div className="circleCard"></div>
                                    </div>

                                    <div

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