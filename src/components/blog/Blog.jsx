import BlogCard from "./BlogCard";
import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const data = [
  {
    photo: "https://ormado.webluna.org/cdn/img/blog1.png",
    title: "Integer Maecenas Eget Viverra",
    date: "June 28, 2023",
    about:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
  },
  {
    photo: "https://ormado.webluna.org/cdn/img/Blog2.png",
    title: "Integer Maecenas Eget Viverra",
    date: "June 28, 2023",
    about:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
  },
  {
    photo: "https://ormado.webluna.org/cdn/img/Blog3.png",
    title: "Integer Maecenas Eget Viverra",
    date: "June 28, 2023",
    about:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
  },
  {
    photo: "https://ormado.webluna.org/cdn/img/Blog3.png",
    title: "Integer Maecenas Eget Viverra",
    date: "June 28, 2023",
    about:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
  },
];

const Blog = () => {
  const owlCarousel = useRef();

  const options = {
    autoplay: false,
    items: 3,
    nav: true,

    rewind: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  };

  return (
    <div className="blog">
      <div className="title">
        <h3>
          OUR RECENT <span>BLOG</span>
        </h3>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <OwlCarousel
              ref={owlCarousel}
              {...options}
              className="owl-theme"
              loop
              margin={20}
              nav
            >
              {data.map((item, index) => (
                <BlogCard key={index} item={item} />
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
