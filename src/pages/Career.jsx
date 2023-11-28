import React, { useState } from "react";
import BreadCrumb from "./BreadCrumb";
import Watch from "../components/Watch";
import { useEffect } from "react";
import axios from "axios";
import gallerydata from "../data/galleryData"
import careerData from "../data/careerData"

const Career = () => {
  const [data, setData] = useState([])
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;

  useEffect(() => {
    setCurrentItems(gallerydata.slice(itemOffset, endOffset));
    axios.get("https://ormado.webluna.space/api/client/about")
      .then((res) => {
        console.log(res.data.data)
        setData(res.data.data)
      })

      .catch((err) => {
        console.log(err)
      })
  }, [itemOffset]);
  return (

    <>
      <BreadCrumb title="CAREER" isOtherPage={true} />
      <div className="career-button">
        <div className="career-buttonMain ">
          <button className="active mb-3 mt-5 me-2"><p>instruction</p></button>
          <button className="mb-3 mt-5 me-2"><p>vacancy</p></button>
          <button className="mb-3 mt-5 me-2"><p>add cv</p></button>
        </div>
      </div>
      <Watch />
      <div className="career-text my-5">
        <div className="career-textMain">
          <p>Ormado Kaffeehaus is an international German brand. Our story started in Berlin in 2017. We are proud to have already developed and refined our business models not only in the German capital, and also in Baku, Odessa, and Dubai. We have tested various strategies, products, and services to determine what works best across different locations. For us, is </p>
        </div>
      </div>
      <div className="ourstory-section3 mb-5">
        <div className="ourstory-section3-cards mb-5">
          <div className="ourstory-section3-cardmain mb-5">
            {currentItems.slice(0, 4).map((item, index) => (
              <div className={`card-img ${index % 2 === 1 ? "mt-5 pt-5" : "mt-0"
                }`} >
                <img src={item.photo} alt="error" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="career-barista">
        <div className="career-barista-cards">
          {careerData.map((item) => (
            <div className="card-body p-2 pt-3 ps-3">
              <div className="card-body-part1">
                <div className="career-body-title-date">
                  <h6 className="me-2 mb-3">{item.title}</h6>
                  <div className="career-date ">{item.date}</div>
                </div>
                <div className="card-body-location mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 72 72" fill="none" >
                    <path d="M36.0114 23.251C33.6245 23.251 31.3353 24.1992 29.6475 25.887C27.9597 27.5748 27.0114 29.864 27.0114 32.251C27.0114 34.6379 27.9597 36.9271 29.6475 38.6149C31.3353 40.3028 33.6245 41.251 36.0114 41.251C38.3984 41.251 40.6876 40.3028 42.3754 38.6149C44.0632 36.9271 45.0114 34.6379 45.0114 32.251C45.0114 29.864 44.0632 27.5748 42.3754 25.887C40.6876 24.1992 38.3984 23.251 36.0114 23.251ZM30.7614 32.251C30.7614 30.8586 31.3146 29.5232 32.2991 28.5387C33.2837 27.5541 34.6191 27.001 36.0114 27.001C37.4038 27.001 38.7392 27.5541 39.7238 28.5387C40.7083 29.5232 41.2614 30.8586 41.2614 32.251C41.2614 33.6434 40.7083 34.9787 39.7238 35.9633C38.7392 36.9479 37.4038 37.501 36.0114 37.501C34.6191 37.501 33.2837 36.9479 32.2991 35.9633C31.3146 34.9787 30.7614 33.6434 30.7614 32.251ZM55.5039 48.001L40.3719 64.066C39.811 64.6617 39.1341 65.1363 38.3829 65.4607C37.6318 65.7852 36.8222 65.9525 36.0039 65.9525C35.1857 65.9525 34.3761 65.7852 33.6249 65.4607C32.8738 65.1363 32.1969 64.6617 31.6359 64.066L16.5039 48.001H16.5609L16.5354 47.971L16.5039 47.9335C12.62 43.34 10.4936 37.5164 10.5039 31.501C10.5039 17.4175 21.9204 6.00098 36.0039 6.00098C50.0874 6.00098 61.5039 17.4175 61.5039 31.501C61.5143 37.5164 59.3879 43.34 55.5039 47.9335L55.4724 47.971L55.4469 48.001H55.5039ZM52.5894 45.5725C55.9316 41.6466 57.7629 36.6568 57.7539 31.501C57.7539 19.489 48.0159 9.75098 36.0039 9.75098C23.9919 9.75098 14.2539 19.489 14.2539 31.501C14.2446 36.6569 16.076 41.6468 19.4184 45.5725L19.8804 46.117L34.3659 61.4935C34.5763 61.7169 34.8301 61.8948 35.1118 62.0165C35.3935 62.1382 35.6971 62.2009 36.0039 62.2009C36.3108 62.2009 36.6144 62.1382 36.8961 62.0165C37.1778 61.8948 37.4316 61.7169 37.6419 61.4935L52.1274 46.117L52.5894 45.5725Z" fill="#E3B142" />
                  </svg>
                  <p className="ms-2">{item.location}</p>
                </div>
              </div>
              <div className="card-body-part2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 65 65" fill="none">
                  <path d="M42.6569 28.4375V16.25C42.6569 13.5564 41.5869 10.9731 39.6822 9.06845C37.7775 7.16378 35.1943 6.09375 32.5007 6.09375C29.8071 6.09375 27.2238 7.16378 25.3191 9.06845C23.4144 10.9731 22.3444 13.5564 22.3444 16.25V28.4375M53.1002 23.0398L56.5209 55.5398C56.7105 57.3408 55.3021 58.9062 53.4902 58.9062H11.5111C11.0837 58.9067 10.6611 58.8173 10.2705 58.6437C9.87999 58.4702 9.53033 58.2164 9.24427 57.8989C8.9582 57.5815 8.74212 57.2073 8.61006 56.8009C8.478 56.3945 8.43292 55.9648 8.47774 55.5398L11.9011 23.0398C11.98 22.2911 12.3334 21.5981 12.893 21.0945C13.4526 20.5909 14.1789 20.3124 14.9317 20.3125H50.0696C51.6296 20.3125 52.9377 21.4906 53.1002 23.0398ZM23.36 28.4375C23.36 28.7069 23.253 28.9652 23.0626 29.1557C22.8721 29.3461 22.6138 29.4531 22.3444 29.4531C22.0751 29.4531 21.8167 29.3461 21.6263 29.1557C21.4358 28.9652 21.3288 28.7069 21.3288 28.4375C21.3288 28.1681 21.4358 27.9098 21.6263 27.7193C21.8167 27.5289 22.0751 27.4219 22.3444 27.4219C22.6138 27.4219 22.8721 27.5289 23.0626 27.7193C23.253 27.9098 23.36 28.1681 23.36 28.4375ZM43.6725 28.4375C43.6725 28.7069 43.5655 28.9652 43.3751 29.1557C43.1846 29.3461 42.9263 29.4531 42.6569 29.4531C42.3876 29.4531 42.1292 29.3461 41.9388 29.1557C41.7483 28.9652 41.6413 28.7069 41.6413 28.4375C41.6413 28.1681 41.7483 27.9098 41.9388 27.7193C42.1292 27.5289 42.3876 27.4219 42.6569 27.4219C42.9263 27.4219 43.1846 27.5289 43.3751 27.7193C43.5655 27.9098 43.6725 28.1681 43.6725 28.4375Z" stroke="#E3B142" stroke-width="4.0625" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className="ms-2">{item.shop}</p>
              </div>
              <div className="card-body-part3 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 68 68" fill="none">
                  <path d="M14.1667 11.334H25.5L34 19.834H53.8333C55.3362 19.834 56.7776 20.431 57.8403 21.4937C58.903 22.5564 59.5 23.9978 59.5 25.5007V48.1673C59.5 49.6702 58.903 51.1115 57.8403 52.1743C56.7776 53.237 55.3362 53.834 53.8333 53.834H14.1667C12.6638 53.834 11.2224 53.237 10.1597 52.1743C9.09702 51.1115 8.5 49.6702 8.5 48.1673V17.0007C8.5 15.4978 9.09702 14.0564 10.1597 12.9937C11.2224 11.931 12.6638 11.334 14.1667 11.334Z" stroke="#E3B142" stroke-width="5.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className="ms-2">{item.file}</p>
              </div>
              <div className="card-body-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 111 111" fill="none">
                  <path d="M46.25 32.374L69.375 55.499L46.25 78.624" stroke="#979797" stroke-width="9.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="career-barista-details py-5">
        <div className="barista-main">
          <h2 className="mb-3">Barista</h2>
          <h5>Responsibilities</h5>
            <li className="barista-details-list"><div className="round mt-1 me-2"></div> Ormado Kaffeehaus is an international German brand. Our story started in Berlin in 2017. We are proud to have already </li>
            <li className="barista-details-list"><div className="round mt-1 me-2"></div>Ormado Kaffeehaus is an international German brand. Our story started in  </li>
            <li className="barista-details-list"><div className="round mt-1 me-2"></div>Ormado Kaffeehaus is an international </li>


          <h5>Working conditions</h5>
          <ul>
            <li>Ormado Kaffeehaus is an international German brand. Our story started in </li>
            <li>Ormado Kaffeehaus is an international </li>
          </ul>

          <h5>Requirements</h5>
          <ul>
            <li>Ormado Kaffeehaus is an international German brand. Our story started in </li>
            <li>Ormado Kaffeehaus is an international </li>
          </ul>
        </div>
      </div>

    </>
  );
};

export default Career;
