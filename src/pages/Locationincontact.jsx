import React from 'react'
import contact from '../data/contact';
import { useState } from 'react'
import { useEffect } from 'react';
import map from "../data/map"

const Locationincontact = () => {

    const [data, setData] = useState([]);
    const [active, setActive] = useState();


    // filtermapla filteritemsin yerini deysende asinxron meselesi ortaya cixir
    useEffect(() => {
        filtermap('up');
    }, []);


    useEffect(() => {
        filteritems('All');
    }, [])


    const filteritems = (searchitem) => {
        if (searchitem === 'All') {
            setData(contact)
        }
        else {
            const newitems = contact.filter((item) => item.place === searchitem)
            setData(newitems)
        }

    }


    const filtermap = (finditem) => {
        if (finditem === 'up') {
            setData(map)
        }
        else {
            const updateitems = map.filter((item) => item.email === finditem)
            setData(updateitems)
        }

    }


    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <>


            <div className="Map col-12 col-sm-12 col-md-12">


                {data.map((item, i) => {
                    return (

                        <iframe
                            className='myiframe mt-3'
                            src={item.map}
                            // width={1500}
                            // height={450}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ormado Kaffeehaus Location on Google Maps"
                        />

                    )
                })}

            </div>

            <div className="locationcontact ">

                <div className=" boxcontainer mysize-width">

                    <div className="container">
                        <div className="row">
                            <div className="leftmap col-12 col-sm-4 col-md-4  ">
                                <div className="text-box">
                                    <div onClick={() => {
                                        filteritems("Baku");
                                        filtermap("baku@ormado.de");
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

                                    <div onClick={() => { filteritems("Arab"); filtermap("zefirmall@ormado.de"); setActive(1) }}

                                        className={`secondstage ${active === 1 ? 'myactive' : ""}`}
                                    >
                                        <h6>Ormado Kaffeehaus Baku I Zefir Mall</h6>
                                        <h6>zefirmall@ormado.de</h6>
                                        <h6>+994513708225</h6>
                                        <h6>09:00 - 17:00</h6>
                                        <h6><i className="fa-solid fa-location-dot"></i> <span className="ms-1">Xarici Dairevi Yol 8, Baku, Azerbaijan</span></h6>
                                        <div className="circleCard"></div>
                                    </div>

                                    <div onClick={() => { filteritems("Odessa"); filtermap("odessa@ormado.com"); setActive(2) }}

                                        className={`thirdstage ${active === 2 ? 'myactive' : ""}`}
                                    >
                                        <h6>Ormado Kaffeehaus Odessa</h6>
                                        <h6>odessa@ormado.com</h6>
                                        <h6>+4917685589190</h6>
                                        <h6>09:00 - 17:00</h6>
                                        <h6><i className="fa-solid fa-location-dot"></i> <span className="ms-1">Spyrydonivs'ka Str. 2, Odessa, 65000 Ukraine</span></h6>
                                        <div className="circleCard"></div>
                                    </div>

                                    <div onClick={() => { filteritems("Berlin"); filtermap("einbecker@ormado.de"); setActive(3) }}

                                        className={`fourthstage ${active === 3 ? 'myactive' : ""}`}
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