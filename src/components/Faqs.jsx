import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Faqs = () => {
   const [faqData,setFaqData] = useState([])
  useEffect(()=>{
    axios.get("https://ormado.webluna.space/api/client/faq")
    .then((res)=>{
      console.log(res.data.data)
      setFaqData(res.data.data)
    }) 
  },[])
  return (
    <div className="Faqs">
      <div className="container1">
        <div className="Center">
          <div className="title">
            <div className="line"></div>
            <div className="upper">
              <h5>FAQ</h5>
            </div>
          </div>

          <div className="question">
            <h1>
              Questions ? <span>Look here</span>
            </h1>
          </div>

          <div className="accordion " id="accordionExample">
          {
            faqData.map((fd,i)=>{
              return   <div className="accordion-item" id={`item-${fd.id}`} key={i}>
              <h2 className="accordion-header">
                <button
                  id="one"
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${fd.id}`}
                  aria-expanded="true"
                  aria-controls={`collapse-${fd.id}`}
                >
                  <h6>
                    {" "}
                    {fd.title}{" "}
                  </h6>
                </button>
              </h2>
              <div
                id={`collapse-${fd.id}`}
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body ">
                  <p className="lorem1 ">
                    {" "}
                {fd.text}
                  </p>
                </div>
              </div>
            </div>
            })
          }


            {/* <div className="accordion-item" id="second">
              <h2 className="accordion-header">
                <button
                  id="two"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <h6> What is your favorite template from BRIX Templates?</h6>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body ">
                  <p className="lorem1">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus ex voluptas facilis est illo quis quos iste at
                    magnam qui excepturi ipsa assumenda, ipsam ducimus
                    voluptates natus distinctio provident! Debitis dolore
                    doloribus eveniet animi officiis omnis ad tenetur quae
                    blanditiis!
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item" id="third">
              <h2 className="accordion-header">
                <button
                  id="three"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <h6>
                    {" "}
                    How do you clone a Webflow Template from the Showcase?
                  </h6>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="lorem1">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto delectus nobis saepe repellendus magni eligendi veniam
                    nostrum illum rerum quam, unde quod, reiciendis officiis
                    suscipit dignissimos facilis cumque explicabo tenetur culpa
                    sed labore blanditiis quia. Eveniet dignissimos harum
                    consequuntur exercitationem? overflow.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item" id="fourth">
              <h2 className="accordion-header">
                <button
                  id="three"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree4"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <h6 id="last">
                    {" "}
                    How do you clone a Webflow Template from the Showcase?
                  </h6>
                </button>
              </h2>
              <div
                id="collapseThree4"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="lorem1">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto delectus nobis saepe repellendus magni eligendi veniam
                    nostrum illum rerum quam, unde quod, reiciendis officiis
                    suscipit dignissimos facilis cumque explicabo tenetur culpa
                    sed labore blanditiis quia. Eveniet dignissimos harum
                    consequuntur exercitationem? overflow.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
