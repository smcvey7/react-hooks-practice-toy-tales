import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:3001/toys`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>setToyList(data))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(toyInfo){
    fetch(`http://localhost:3001/toys`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(toyInfo)
    })
    .then(res=>res.json())
    .then(data=>{
      const updatedToyList= [...toyList, data]
      setToyList(updatedToyList)
    })
  }

  function handleLike(id, likes){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        likes: likes
      })
    })
    .then(res=>res.json())
    .then(data=>{
      const updatedToyList = toyList.map(toy=>{
        if (toy.id === id){
          return data
        }else return toy
      })
      setToyList(updatedToyList)
    })
  }
  
  function donateToy(id){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("donated", data);
      const updatedToyList = toyList.filter(toy => toy.id !== id)
      setToyList(updatedToyList)
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNewToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer donateToy={donateToy} handleLike={handleLike} toyList={toyList} />
    </>
  );
}

export default App;
