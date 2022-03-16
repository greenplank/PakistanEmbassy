import React from "react";
import Link from "next/link";

const BlogCard = ({ image, title, date, text, link }) => {
  return (
    <a href={link}>
      <div className="blog-card">
        <Link href={link}>
          <div className="blog-card__inner">
            <div className="blog-card__image">
              <Link href={link}>
                <img src={image} alt="" />
              </Link>
              {/* <div className="blog-card__date">{date}</div> */}
            </div>
            <div className="blog-card__content">
              <div className="blog-card__meta"></div>
              <h3>
                <Link href={link}>
                  <a>{title}</a>
                </Link>
              </h3>
              <p>{text}</p>
              <Link href={link}>
                <a className="blog-card__more">
                  <i className="far fa-angle-right"></i>Read More
                </a>
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </a>
  );
};

export default BlogCard;
