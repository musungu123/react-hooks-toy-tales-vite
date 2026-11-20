import React from "react";

function ToyCard({ toy, onDeleteToy , onUpdateToy }) {
  const { name, image, likes } = toy;

  function handleLikeClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes + 1,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update likes");
        return res.json();
      })
      .then((updatedToy) => {
        onUpdateToy(updatedToy);
      })
      .catch((err) => console.error(err));
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete toy");
        onDeleteToy(id);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
