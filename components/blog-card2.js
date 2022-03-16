import React from "react";
import Link from "next/link";

const BlogCard2 = ({ image, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="blog-card" style={{margin:"4px"}}>
       
          <div className="blog-card__inner">
            <div className="blog-card__image">
         
                <img src={image} alt="" />
              
            </div>
          </div>
        
      </div>
    </a>
  );
};

export default BlogCard2;
