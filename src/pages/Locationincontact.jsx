import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import myData from "../data/myData"

const Locationincontact = () => {

    const [datamap, setDatamap] = useState([]);
    const [dataImg, setDataImg] = useState([]);

    const [active, setActive] = useState(0);


    // filtermapla filteritemsin yerini deysende asinxron meselesi ortaya cixir

    useEffect(() => {
        filteritems('All'); filtermap(0);
    }, [])


    console.log("menimActiveim: ", active);

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


    useEffect(() => {
        console.log(datamap);
    }, [datamap])

    return (
        <>


            <div className="Map col-12 col-sm-12 col-md-12">


                {datamap.map((item, i) => {
                    return (

                        <iframe
                            className='myiframe '
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


                            {/* <img src="/static/media/contact1.1243855218a280db36b3.png" alt="" /> */}
                            <div className="rightmap  col-12 col-sm-8 col-md-8  ">
                                <div className="commonphoto  ">
                                   
                                        {console.log(dataImg, "burabax")}
                                        {dataImg.map((item) => {


                                               console.log(item.place);
                                               console.log(item.image[0]);
                                             return (

                                                item.image.map((img, i) => {
                                                    console.log(img);
                                                    return (
                                                        <div className='siz'><img className={`myimage-${i}`} src={img} alt="" /></div>


                                                    )

                                                })
                                            )
                                            // return(



                                            // <img width={70} height={70} src={item.image[0]} alt="" />
                                            // )

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