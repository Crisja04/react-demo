import React from "react";

const Book = (props) => {
  const { img, title, author } = props.book;
  const clickHandler = () => {
    alert("hello");
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        click me
      </button>
    </article>
  );
};

export default Book;
