import React from 'react'
import story from "../assets/img/ourstory.png"
import blast from "../assets/img/blast.png"
const OurStory = () => {
  return (
    <>
  <div className="container-fluid">
  <img src={story} alt="" className='img-fluid' style={{width:"100%"}} />
    <div className="row">
      <div className="col-5 bg-primary mt-5">
        <img src={blast} alt="" className='img-fluid' />
      </div>
    </div>
  </div>
    </>
  )
}

export default OurStory