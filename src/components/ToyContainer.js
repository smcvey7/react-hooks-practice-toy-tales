import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, handleLike, donateToy}) {
  const toyCards = toyList.map(toy=>{
    return <ToyCard donateToy={donateToy} handleLike={handleLike} key={toy.id} id={toy.id} name={toy.name} image = {toy.image} likes={toy.likes} />
  })

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
