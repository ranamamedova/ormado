import React from 'react'

import filterdata from "../data/filterdata";
import { useState } from 'react';

const Place = () => {
  const [data,setData] =useState(filterdata);



  const filterinfo=(a)=>{
    console.log("Isleyir");
   const newitems = filterdata.find((item)=>{
    return item.mapSrc == a;
   })

   setData(newitems);
     
  }


console.log("menimdatam",data);

  return (
    <>
   <div className="text-box">

<div onClick={()=>filterinfo(filterdata[0].mapSrc)} className="firststage">

    <h6>Ormado Kaffeehaus Baku | Yusif Memmedaliyev</h6>
    <h6>baku@ormado.de</h6>
    <h6>+994502535563</h6>
    <h6>09:00 - 17:00</h6>
    <h6>23-29 Yusif Memmedaliyev, Baku, 1005 Azerbaijan</h6>
    <div className="circleCard"></div>

</div>

<div style={{ color: "white" }} className="secondstage ">
    <h6>Ormado Kaffeehaus Baku I Zefir Mall</h6>
    <h6>zefirmall@ormado.de</h6>
    <h6>+994513708225</h6>
    <h6>09:00 - 17:00</h6>
    <h6>Xarici Dairevi Yol 8, Baku, Azerbaijan</h6>
    <div className="circleCard"></div>
</div>

<div className="thirdstage  ">
    <h6>Ormado Kaffeehaus Odessa</h6>
    <h6>odessa@ormado.com</h6>
    <h6>+4917685589190</h6>
    <h6>09:00 - 17:00</h6>
    <h6>Spyrydonivs'ka Str. 2, Odessa, 65000 Ukraine</h6>
    <div className="circleCard"></div>
</div>

<div className="fourthstage ">
    <h6>Ormado Kaffeehaus Berlin | Einbecker</h6>
    <h6>einbecker@ormado.de</h6>
    <h6>+4917685589190</h6>
    <h6>09:00 - 17:00</h6>
    <h6>Einbecker Str. 18, 10317 Berlin, Germany</h6>
    <div className="circleCard"></div>
</div>


{/* {data.map((item,i)=>{
    return(
        <>
        <h1>{item.address}</h1>
        <iframe src={item.mapSrc} frameborder="0"></iframe>
        </>
    )
})} */}

   <>
   <h1>{data.address}</h1>
   <iframe src={data.mapSrc} frameborder="0"></iframe>
   </>

</div>

    
    
    
    </>
  )
}

export default Place