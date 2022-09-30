import React, { useState } from 'react';
import Papa from 'papaparse';

import './App.css';

const inputCSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQxtTOpqRbGNgc0Hf40yQOI6nHXfuZCdSRbSzCs0-IdFk_zxmj4PWbSv_zUj26nreVJqXCoxjMj32B4/pub?output=csv";

const MovieData = () => {
  const [data, setData] = useState({});
  Papa.parse(inputCSV, {
    download: true,
    header: true,
    complete: (results) => {
      setData(results.data);
    },
  });
  const movies = Array.from(data);
  
  return (
    <ul>
      {movies.map((data) => (
        <li key={data.movie}>
          {data.movie} ({data.year}) - Rating {data.rating} ... {data.date}
        </li>
      ))}
    </ul>
  );
};

const App = props => {
  return (
    <MovieData />
  );
};

export default App;


// https://docs.google.com/spreadsheets/d/e/2PACX-1vQxtTOpqRbGNgc0Hf40yQOI6nHXfuZCdSRbSzCs0-IdFk_zxmj4PWbSv_zUj26nreVJqXCoxjMj32B4/pubhtml