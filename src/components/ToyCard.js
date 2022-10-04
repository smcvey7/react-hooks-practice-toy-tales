import React, {useState} from "react";

function ToyCard({id, name, image, likes, handleLike, donateToy}) {
  const [likesReceived, setLikesReceived]=useState(likes)

  function onLikeClick(){
    const newLikeAmount = likesReceived+1
    setLikesReceived(newLikeAmount)
    handleLike(id, newLikeAmount)
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={onLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={()=>donateToy(id)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
