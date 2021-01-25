import React from 'react'

import '../pagination.css'

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [itemsPerPage, setItemsPerPage] = React.useState(4)

  console.log(props.data.length)

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.data.slice(indexOfFirstItem, indexOfLastItem)

  const handleOnClick = (e) => {
    setCurrentPage(Number(e.target.id))
  }


  const renderItems = currentItems.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(props.data.length / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  console.log(pageNumbers, 10)
  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={handleOnClick}
      >
        {number}
      </li>
    );
  });

  return(
    <div>
      <ul>
        {renderItems}
      </ul>
      <ul id="page-numbers">
        {renderPageNumbers}
      </ul>
    </div>
  );
}

export default Pagination
