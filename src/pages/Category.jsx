import React, { useContext, useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Faqs from "../components/Faqs";
import ScrollToTop from "../components/ScrollToTop";
import { BlogContext } from "../context/BlogContext";
import category from "../data/CategoryData";
import Ormadolocation from "../pages/Ormadolocation"
const Category = () => {
  const [blog] = useContext(BlogContext);

  const [drop, setDrop] = useState(false);
  const [active,setActive] = useState('')

  const [data,setData] = useState(category);
  const previous = <i className="fa-solid fa-chevron-left"></i>;
  const next = <i class="fa-solid fa-chevron-right"></i>;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, , itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
    window.scrollTo({top:100,behavior:"smooth"})
  };
  
  const filterItem =(findCategory)=>{
      const uptadeCategory = category.filter((oldCategory)=>{
        return oldCategory.category == findCategory
      })
      setData(uptadeCategory)
  }

  return (
    <>
        <ScrollToTop/>
      <section className="category" style={{ margin: "0" }}>
        <hr className="mt-5" />
        <div className="categoryContainer">
          <ul>
            <li>
              <a href="#react" className={`${active == 6 ? "active" : ""}`} onClick={()=>{
                setData(category)
                setActive(6)
              }}>ALL CATEGORIES </a>
            </li>
            <li>
              <a href="#react" className={`${active == 1 ? "active" : ""}`} onClick={()=>{
                filterItem("LATTE")
                setActive(1)
              }}>LATTE </a>
            </li>
            <li>
              <a href="#react" className={`${active == 2 ? "active" : ""}`} onClick={()=>{
                filterItem("CAPPUCCINO")
                setActive(2)
              }}>CAPPUCCINO </a>
            </li>
            <li>
              <a href="#react" className={`${active == 3 ? "active" : ""}`} onClick={()=>{
                filterItem("AMERICANO")
                setActive(3)
              }}>AMERICANO </a>
            </li>
            <li>
              <a href="#react" className={`${active == 4 ? "active" : ""}`} onClick={()=>{
                filterItem("ESPRESSO")
                setActive(4)
              }}>ESPRESSO </a>
            </li>
            <li>
              <a href="#react" className={`${active == 5 ? "active" : ""}`} onClick={()=>{
                filterItem("ARABICA")
                setActive(5)
              }}>ARABICA </a>
            </li>
            <li>
              <a
                href="#react"
                onClick={() => {
                  setDrop(!drop);
                }}
              >
                MORE
                <i
                  className="fa-solid fa-chevron-down ms-1"
                  style={{
                    fontSize: "x-small",
                    color: "grey",
                    transform: drop ? "rotate(-180deg)" : "rotate(0)",
                    transition: "250ms",
                  }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="blog">
          <div className="container">
            <div className="row mt-5 g-5">
              {currentItems.map((fd, index) => (
                <div
                  className={`col-6 sol-sm-4 col-md-4 col-lg-4 ${
                    index % 3 === 1 ? "mt-5" : "mt-0"
                  } mobileBlog`}
                >
                  <div className="blogBox">
                    <div className="blogImg">
                    <Link to={`/category/${fd.id}`}>
                    <img src={fd.img} alt="" className="img-fluid" />
                    </Link>
                    </div>
                    <h4 className="my-3">{fd.title}</h4>
                    <div className=" date">
                      <p>{fd.date}</p>
                      <span>1K read</span>
                    </div>
                    <p className="description">
                    <div dangerouslySetInnerHTML={{ __html: fd.text }} />
                    </p>
                    <a href="#react" className="readMore">
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="mt-5">
        <div style={{ marginBottom: "120px" }}>
          <ReactPaginate
            breakLabel="..."
            nextLabel={next}
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel={previous}
            renderOnZeroPageCount={null}
            breakClassName="break"
            containerClassName="pagination"
            pageLinkClassName="previous-num"
            previousClassName="page-num"
            nextClassName="page-num"
            activeLinkClassName="active"
            activeClassName="test"
          />
        </div>
      </div>

      <Faqs/>
    </>
  );
};

export default Category;
