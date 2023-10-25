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
      
    
            <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button id='btn1'
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseOne"
        aria-expanded="true"
        aria-controls="panelsStayOpen-collapseOne"
      >
        What is Webflow and why is it the best website builder?
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseOne"
      className="accordion-collapse collapse show"
    >
      <div className="accordion-body">
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi ut quod, dignissimos atque cumque suscipit. Cum harum sit similique illo maxime itaque, quo blanditiis delectus! Fugit quas asperiores exercitationem expedita incidunt. Doloremque iure aut, dicta provident corporis, tenetur suscipit ab, ea deserunt odio error ipsum soluta vel eveniet!
      </div>
    </div>
  </div>
  <div id='two' className="accordion-item">
    <h2 className="accordion-header">
      <button id='btn2'
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseTwo"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapseTwo"
      >
       What is your favorite template from BRIX Templates?
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseTwo"
      className="accordion-collapse collapse"
    >
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
  <div id='three' className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseThree"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapseThree"
      >
        How do you clone a Webflow Template from the Showcase?
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseThree"
      className="accordion-collapse collapse"
    >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>

  <div id='four' className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseThree"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapseThree"
      >
        How do you clone a Webflow Template from the Showcase?
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseThree"
      className="accordion-collapse collapse"
    >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
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