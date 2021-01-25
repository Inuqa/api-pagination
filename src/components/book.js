import React from "react"

import "../styles.css"

const Book = (props) => {
  const cleanDate = new Date(props.released).toDateString();
  const cleanAuthors = props.author.join(", ");

  return(
    <div className="books">
      <div className="book">
        <h3>Book {props.number}</h3>
        <h2>{props.name}</h2>
        
        <div className="details">
          <p>Author: {cleanAuthors}</p>
          <p>Number of pages: {props.pages}</p>
          <p>Book Country: {props.country}</p>
          <p>Realease Date: {cleanDate}</p>
        </div>
      </div>
    </div>
  );
}

export default Book
