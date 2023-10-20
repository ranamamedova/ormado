import React from "react";

import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="Blog">
      <div className="container">
        <div className="row">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default Blog;
