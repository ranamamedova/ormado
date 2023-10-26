import React from 'react'

const Faqs = () => {
  return (
    <div className="Faqs">
        <div className="container1">  
         <div className="Center">
         <div className="title">
                <div className="line">        
                </div>
                <div className="upper">
                    <h5>FAQ</h5>
                </div>
            </div>
 
            <div className="question">
                <h1>Questions ? <span>Look here</span></h1>
            </div>
      
    
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button id='one'
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
       What is Webflow and why is it the best website builder? 
      </button>

    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, veritatis exercitationem commodi sed, voluptatum ullam quisquam laborum beatae dolor iure rem dicta natus animi vero quibusdam, consectetur soluta rerum voluptas placeat adipisci est officiis incidunt. Architecto, eveniet?
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button id='two'
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
       What is your favorite template from BRIX Templates?
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex voluptas facilis est illo quis quos iste at magnam qui excepturi ipsa assumenda, ipsam ducimus voluptates natus distinctio provident! Debitis dolore doloribus eveniet animi officiis omnis ad tenetur quae blanditiis!
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button id='three'
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        How do you clone a Webflow Template from the Showcase?
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto delectus nobis saepe repellendus magni eligendi veniam nostrum illum rerum quam, unde quod, reiciendis officiis suscipit dignissimos facilis cumque explicabo tenetur culpa sed labore blanditiis quia. Eveniet dignissimos harum consequuntur exercitationem?
        overflow.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header">
      <button id='three'
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree4"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        How do you clone a Webflow Template from the Showcase?
      </button>
    </h2>
    <div
      id="collapseThree4"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto delectus nobis saepe repellendus magni eligendi veniam nostrum illum rerum quam, unde quod, reiciendis officiis suscipit dignissimos facilis cumque explicabo tenetur culpa sed labore blanditiis quia. Eveniet dignissimos harum consequuntur exercitationem?
        overflow.
      </div>
    </div>
  </div>
  

</div>



      </div>
             
         </div>
          
        </div>
 
  )
}

export default Faqs