import axios from 'axios';


import React, { useEffect, useState } from 'react'


const renderdata = (event) => {
  return (
    <div className="row">
      {event.map((item, i) => {

        return (
          <div key={i} className="col-12 col-md-3 g-5"><img width={300} height={300} src={item.image} alt="" /></div>
        )

      })}
    </div>
  )
}


const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);       // hal-hazirdaki sehive
  const [itemsperpage, setItemsperpage] = useState(3);  //her sehivedeki cardlarin sayidir 




  const indexoflastitem = currentpage * itemsperpage // meselen 12ci inddex ucun 3cu sehive * 4 

  const indexoffirstitem = indexoflastitem - itemsperpage //12-4  3 cu sehivede ilk element menasini verecek

  const currentitems = data.slice(indexoffirstitem, indexoflastitem);         //gorunenn cardlardir


  // Math.ceil(data.length/itemsperpage)   umumi datalara gore buutonlarin sayini texmini gotrur.



  const handleClick = (sehivenomresi) => {
    setCurrentpage(sehivenomresi);
  }


  const pagebuttons = [];

  for (let i = 0; i < Math.ceil(data.length / itemsperpage); i++) {

    pagebuttons.push(
      <button key={i}
        className='btn btn-primary ms-2 mt-2'
        onClick={() => handleClick(i +1)}
      >{i + 1}</button>
    )

  }

  console.log("Sehivenin nomresi",currentpage);
  console.log("bizim hesablamamiz",Math.ceil(data.length / itemsperpage))
  // console.log("bizim hesablamamiz222",parseFloat(data.length / itemsperpage,2))
  // console.log("bizim data len",data.length )

  // const handleprevclick = (sehivenomresi) => {

  //   if(sehivenomresi!==1){
  //     setCurrentpage(sehivenomresi - 1)
  //   }
  // }
  const handleprevclick = () => {

    if(currentpage!==1){
      setCurrentpage(currentpage - 1)
    }
  }


  const handlenextclick = (sehivenomresi) => {

    if(!(sehivenomresi>=Math.ceil(data.length / itemsperpage))){
      setCurrentpage(sehivenomresi + 1)
    }
    
  }




  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
    axios.get("https://fakestoreapi.com/products")
    .then(res => {
        setData(res.data)
        console.log(res.data);
      })
  }, [])




  return (
    <>
      <div>
        <h1 className='text-center'>Pagination</h1>
        <div className="container">
          <div className="row">
            {renderdata(currentitems)}
          </div>
        </div>

      </div>


      <div className="buttons">
        <div className="container">

          <button

            onClick={() => handleprevclick()}
            className='btn btn-danger ms-2 mt-2'>Previous </button>

          {pagebuttons}

          <button onClick={() => handlenextclick(currentpage)} className='btn btn-success ms-2 mt-2'>Next</button>

        </div>
      </div>




    </>



  )
}

export default Pagination