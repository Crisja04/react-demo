import React from "react";
import ReactDom from "react-dom"; // index.js is an entry-point for the application.
// CSS
import "./index.css";
const books = [
  {
    id: 1,
    img:
      "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/22739/optimized_large_thumb_children-stories-book-cover-541__1_.jpg",
    title: "Book Title",
    author: "Book Author",
  },
  {
    id: 2,
    img:
      "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/22739/optimized_large_thumb_children-stories-book-cover-541__1_.jpg",
    title: "Book Title2",
    author: "Book Author2",
  },
  {
    id: 3,
    img:
      "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/22739/optimized_large_thumb_children-stories-book-cover-541__1_.jpg",
    title: "Book Title3",
    author: "Book Author3",
  },
];

function BookList() {
  // First letter on function name must be capitalized to count as a React Component.
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
  // Returns JSX
}

const Book = (props) => {
  const { img, title, author } = props.book;
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
