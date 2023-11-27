import React from "react";

const Watch = () => {
  return (
    <section className="watchormado mb-5">
      <div className="container">
        <div className="imagebox">
          <iframe
            className="mysize myiframe"
            style={{ borderRadius: "25px" }}
            src="https://www.youtube.com/embed/GWIAwS09PpM?si=YjA-bqqPTVW8HmFJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Watch