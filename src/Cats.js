import React from "react";
import { Link } from "react-router-dom";

const Cats = props => {
  const catListItems = props.catList.map(catName => {
    return (
      <li>
        <Link to={`/cats/${catName}`}>{catName}</Link>
      </li>
    );
  });
  return (
    <div>
      <h1>Cats</h1>
      <ul>{catListItems}</ul>
    </div>
  );
};

export default Cats;
