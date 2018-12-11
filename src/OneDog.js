import React from "react";

const OneDog = props => {
  const dogInfo = props.dogInfo;
  const dogName = props.match.params.dogName;
  const oneDogsInfo = dogInfo[dogName];
  const dogToysListItems = oneDogsInfo.toys.map(toy => {
    return <li>{toy}</li>;
  });
  return (
    <div>
      <h1>Hey, I am {props.match.params.dogName}!</h1>
      <h2>My owner is {oneDogsInfo.owner}</h2>
      <h3>I like these toys:</h3>
      <h4>{dogToysListItems}</h4>
    </div>
  );
  //   return <h2>{props.match.params.dogName}</h2>;
};

export default OneDog;
