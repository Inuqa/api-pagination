import React from 'react'
import './App.css';
import axios from 'axios';

import Book from './components/book';
import Pagination from './components/pagination';

function App() {
  const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';
  const [books, setBooks] = React.useState([])

  const fetchData = async (e) => {
    const response = await axios.get(apiURL)

    setBooks(response.data) 

  };

  const displayData = books.map((data, index) => 
    <Book name={data.name}
    author={data.authors}
    pages={data.numberOfPages}
    country={data.country}
    released={data.released}
    number={data.index}
    key={data.isbn}
    />)

  console.log(books)

  return (
    <>
      <div className="App">
        <h1>Game of Thrones Books</h1>
        <h2>Fetch a list from an API and display it</h2>

        <div>
          <button onClick={fetchData} className="fetch-button">Fetch Data</button>
          <br />
        </div> 
        <Pagination data={displayData} />
      </div>
    </>
  );
}

export default App;
