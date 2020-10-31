import React from "react";
import ReactDom from "react-dom"; // index.js is an entry-point for the application.
// CSS
import "./index.css";
const firstBook = {
  img:
    "https://lh3.googleusercontent.com/proxy/gnNXVcC8jFknWkOjpQhbIk-Ymk-CJM6lDbDP7QoUsbF-e9iaqeXLtMqqS-78XZaqgSuHRXp6geEe3sfLuoBtRdEHHyeYwHv688C15Hk26UC8brOLyU5J",
  title: "Book Title",
  author: "Book Author",
};
const secondBook = {
  img:
    "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/22739/optimized_large_thumb_children-stories-book-cover-541__1_.jpg",
  title: "Book Title2",
  author: "Book Author2",
};
function BookList() {
  // First letter on function name must be capitalized to count as a React Component.
  return (
    <section className="booklist">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  );
  // Returns JSX
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
// Rendering element on the div#root
ReactDom.render(<BookList />, document.getElementById("root"));
