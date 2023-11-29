import React from "react";

const BlogCard = ({ item }) => {
  return (
    <>
         <div className="blogCard">
          <div className="card-img">
            <img src={item.photo} alt="" />
          </div>
          <div className="card-bottom">
            <div className="card-title">
              <h2>{item.title}</h2>
            </div>
            <div className="card-date">
              <p>June 28, 2023</p>
              <p>
                <span>1k</span>read
              </p>
            </div>
            <div className="card-about">
              <p>{item.about}</p>
            </div>
            <a to="/">Read More</a>
          </div>
        </div>
    </>
  );
};

export default BlogCard;
