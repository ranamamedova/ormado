import React, { useState, useEffect } from 'react';

const Career = () => {
  const data = [
    {
      id: 0,
      title: "Azerbaycan",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.76852950524!2d49.69014781294343!3d40.39473700817485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2z0JHQsNC60YM!5e0!3m2!1sru!2saz!4v1700578242899!5m2!1sru!2saz",
    },
    {
      id: 1,
      title: "Dubai",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828262691!2d54.897818105933624!3d25.0762804467464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z0JTRg9Cx0LDQuSAtINCe0LHRitC10LTQuNC90LXQvdC90YvQtSDQkNGA0LDQsdGB0LrQuNC1INCt0LzQuNGA0LDRgtGL!5e0!3m2!1sru!2saz!4v1700578382717!5m2!1sru!2saz",
    },
  ];

  const [filter, setFilter] = useState([]);

  useEffect(() => {
    filterItem("Azerbaycan");
  }, []);

  const filterItem = (findTitle) => {
    if (findTitle === "All") {
      setFilter(data); 
    } else {
      const updateFilter = data.filter((item) => item.title === findTitle);
      setFilter(updateFilter);
    }
  };

  return (
    <>
      <section>
        <button onClick={() => { filterItem("Azerbaycan") }}>Azerbaycan</button>
        <button onClick={() => { filterItem("Dubai") }}>Dubay</button>
        <button onClick={() => { filterItem("All") }}>All</button>
        <div className="container">
          {filter.map((fd) => (
            <iframe
              key={fd.id}
              src={fd.src}
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          ))}
        </div>
      </section>
    </>
  );
};

export default Career;
