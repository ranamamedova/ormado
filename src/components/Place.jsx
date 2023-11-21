import React from 'react'
import filterdata from "../data/filterdata"
import { useState } from 'react'

const Place = () => {

const [data,setData] =useState(filterdata);


const filtermethod=(item)=>{
   const newitems=filterdata.filter((olditem,i)=>{
    return olditem.mapSrc==item;
   })

   setData(newitems);
}

console.log("click edin");

  return (
   <>
    
   
    <div className="text-box">

<div onClick={()=>filtermethod()} className="firststage ">

    <h6>Ormado Kaffeehaus Baku | Yusif Memmedaliyev</h6>
    <h6>baku@ormado.de</h6>
    <h6>+994502535563</h6>
    <h6>09:00 - 17:00</h6>
    <h6>23-29 Yusif Memmedaliyev, Baku, 1005 Azerbaijan</h6>
    <div className="circleCard"></div>

</div>

<div  className="secondstage mt-5">
    <h6>Ormado Kaffeehaus Baku I Zefir Mall</h6>
    <h6>zefirmall@ormado.de</h6>
    <h6>+994513708225</h6>
    <h6>09:00 - 17:00</h6>
    <h6>Xarici Dairevi Yol 8, Baku, Azerbaijan</h6>
    <div className="circleCard"></div>
</div>

<div className="thirdstage mt-5 ">
    <h6>Ormado Kaffeehaus Odessa</h6>
    <h6>odessa@ormado.com</h6>
    <h6>+4917685589190</h6>
    <h6>09:00 - 17:00</h6>
    <h6>Spyrydonivs'ka Str. 2, Odessa, 65000 Ukraine</h6>
    <div className="circleCard"></div>
</div>

<div className="fourthstage mt-5">
    <h6>Ormado Kaffeehaus Berlin | Einbecker</h6>
    <h6>einbecker@ormado.de</h6>
    <h6>+4917685589190</h6>
    <h6>09:00 - 17:00</h6>
    <h6>Einbecker Str. 18, 10317 Berlin, Germany</h6>
    <div className="circleCard"></div>
</div>


</div>
   
   </>
  )
}

export default Place