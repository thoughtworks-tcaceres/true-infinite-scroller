import React, { useState } from "react";
import "./styles.css";
import getData from "./getData";

import InfiniteScroller from "./InfiniteScroller";

export default function App() {
  const [data, setData] = useState(getData());
  const fetchMoreData = () => {
    const newData = getData();
    console.log("new data:", newData);
    setData(prevData => [...prevData, ...newData]);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h3>DATA LENGTH: {data.length}</h3>
      <button onClick={fetchMoreData}>FETCH MORE DATA</button>
      <InfiniteScroller fetchFunc={fetchMoreData}>
        {data.map((arr, i) => {
          return (
            <ul key={i}>
              {Object.values(arr).map((field, j) => {
                return <li key={j}>{field}</li>;
              })}
            </ul>
          );
        })}
      </InfiniteScroller>
    </div>
  );
}
