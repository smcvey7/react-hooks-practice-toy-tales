import React, {useState} from "react";

function ToyForm({handleNewToy}) {
  const blankForm = {
    name: "",
    image: "",
    likes: 0
  }
  const [newToy, setNewToy] = useState(blankForm)

  function handleChange(e){
    setNewToy({
      ...newToy,
      [e.target.name]: e.target.value
    })
    console.log(e.target.name, e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    handleNewToy(newToy)
    setNewToy(blankForm)
    }
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={handleChange}
          value={newToy.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={handleChange}
          value={newToy.image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
