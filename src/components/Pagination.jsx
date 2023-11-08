import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  const [data, setData] = useState([]);
  const previous = (
    <i className="fa-solid fa-chevron-left"></i>
  );
  const next = (
    <i class="fa-solid fa-chevron-right"></i>
  );
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, , itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  return ( 
    <>
      <div>
        {currentItems.map((fd) => (
          <div className="d-flex" key={fd.id}>
            <span>{fd.id}</span>
            <p className="ms-2">{fd.title}</p>
          </div>
        ))}
      </div>
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
    </>
  );
};

export default Pagination;
