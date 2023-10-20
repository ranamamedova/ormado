import React from "react";
import blog1 from "../../assets/img/blog1.png";

const BlogCard = () => {
  return (
    <>
    <div className="col-12 col-md-4">
    <div className="blogCard">
        <div className="card-img">
          <img src={blog1} alt="" />
        </div>
        <div className="card-bottom">
          <div className="card-title">
            <h2>Integer Maecenas Eget Viverra</h2>
          </div>
          <div className="card-date">
            <p>
              June 28, 2023 
            </p>
            <p> <span>1k</span>read</p>
          </div>
          <div className="card-about">
            <p>
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim. Venenatis
              eget adipiscing luctus lorem.
            </p>
          </div>
          <a to="/">Read More</a>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default BlogCard;
