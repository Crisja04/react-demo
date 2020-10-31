import React from "react";
import ReactDom from "react-dom"; // index.js is an entry-point for the application.
// CSS
import "./index.css";

function BookList() {
  // First letter on function name must be capitalized to count as a React Component.
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
  // Returns JSX
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => {
  return (
    <img
      src="https://lh3.googleusercontent.com/proxy/gnNXVcC8jFknWkOjpQhbIk-Ymk-CJM6lDbDP7QoUsbF-e9iaqeXLtMqqS-78XZaqgSuHRXp6geEe3sfLuoBtRdEHHyeYwHv688C15Hk26UC8brOLyU5J"
      alt=""
    />
  );
};

const Title = () => {
  return <h1>Book title</h1>;
};

const Author = () => {
  return <h4 style={{ color: "#617d98", fontSize: "0.75rem", margin: "0.25rem" }}>Book Author</h4>;
};
// Rendering element on the div#root
ReactDom.render(<BookList />, document.getElementById("root"));
