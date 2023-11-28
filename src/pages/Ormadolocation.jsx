import { useState, useEffect } from "react";
import React from "react";
import filterdata from "../data/filterdata";

const Ormadolocation = () => {
    const [data, setData] = useState([]);
    const [active, setActive] = useState();



    useEffect(() => {
        filteritems("odessa@ormado.com");
    }, [])



    // const filteritems = (newitem) => {
    //     const updateitems = filterdata.filter((a, i) => {
    //         return a.mapSrc == newitem;
    //     });
    //     setData(updateitems);
    // };
    // console.log(data);


    const filteritems = (searchitem) => {
        if (searchitem === "All") {
            setData(filterdata)
        } else {
            const newitems = filterdata.filter((item) => item.email === searchitem)
            setData(newitems);
        }
    }


    console.log(data);

    return (

        // LOCATION ICON


        <>

            <div className="ormadolocation ">
                <div className="mysize-width boxcontainer">
                    <div className="container">
                        <div className="row">
                            <div className="leftmap col-12 col-sm-6 col-md-6  ">
                                <div className="one"></div>
                                <div className="two"></div>
                                <div className="three"></div>
                                <div className="four"></div>

                                <div className="text-box">
                                    <div
                                        onClick={() => {
                                            filteritems("baku@ormado.de");
                                            setActive(0);
                                        }}
                                        className={`firststage ${active === 0 ? "active" : ""}`}
                                    >
                                        <h6>Ormado Kaffeehaus Baku | Yusif Memmedaliyev</h6>
                                        <h6>baku@ormado.de</h6>
                                        <h6>+994502535563</h6>
                                        <h6>09:00 - 17:00</h6>
                                        <h6> <i className="fa-solid fa-location-dot"></i> <span className="ms-1">23-29 Yusif Memmedaliyev, Baku, 1005 Azerbaijan</span></h6>
                                        <div className="circleCard"></div>
                                    </div>

                                    <div
                                        onClick={() => {
                                            filteritems("zefirmall@ormado.de")
                                            setActive(1);
                                        }}
                                        className={`secondstage ${active === 1 ? "active" : ""} `}
                                    >
                                        <h6>Ormado Kaffeehaus Baku I Zefir Mall</h6>
                                        <h6>zefirmall@ormado.de</h6>
                                        <h6>+994513708225</h6>
                                        <h6>09:00 - 17:00</h6>
                                        <h6><i className="fa-solid fa-location-dot"></i> <span className="ms-1">Xarici Dairevi Yol 8, Baku, Azerbaijan</span></h6>
                                        <div className="circleCard"></div>
                                    </div>

                                    <div
                                        onClick={() => {
                                            filteritems("odessa@ormado.com");
                                            setActive(2);
                                        }}
                                        className={`thirdstage ${active === 2 ? "active" : ""} `}
                                    >
                                        <h6>Ormado Kaffeehaus Odessa</h6>
                                        <h6>odessa@ormado.com</h6>
                                        <h6>+4917685589190</h6>
                                        <h6>09:00 - 17:00</h6>
                                        <h6><i className="fa-solid fa-location-dot"></i> <span className="ms-1">Spyrydonivs'ka Str. 2, Odessa, 65000 Ukraine</span></h6>
                                        <div className="circleCard"></div>
                                    </div>

                                    <div
                                        onClick={() => {
                                            filteritems("einbecker@ormado.de");
                                            setActive(3);
                                        }}
                                        className={`fourthstage ${active === 3 ? "active" : ""}`}
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

                            {data.map((item, i) => {
                                return (
                                    <div className="rightmap  col-12 col-sm-6 col-md-6 ">
                                        <div className="main-relative myiframe">
                                            <div className="loader-container">
                                                <img className="logo-loader" src="http://localhost:3000/static/media/logo.3d1574839a4f7d4adc4b.png" alt="" />
                                            </div>
                                            <iframe
                                                className="myiframe"
                                                title="My Map"
                                                src={item.mapSrc}
                                                allow="geolocation 'self' https://my.atlist.com/"
                                                frameborder="0"
                                                scrolling="no"
                                                allowFullScreen
                                            ></iframe>

                                        </div>



                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Ormadolocation;
