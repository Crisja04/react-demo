import React from "react";
import ReactDom from "react-dom"; // index.js is an entry-point for the application.
// CSS
import "./index.css";
// named export books.js data
import { books } from "./books.js";
// default export book component
import Book from "./Book.js";

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

// Rendering element on the div#root of index.html
ReactDom.render(<BookList />, document.getElementById("root"));
