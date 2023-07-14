import React, { useState } from "react";
import "./Styles/App.css";

function App() {
  const [person, setPerson] = useState({
    data: {
      firstName: "John",
      lastName: "Doe",
      age: 69,
      gender: "Male",
    },
    creation: {
      name: "ROBLOX",
      dateCreated: "2007",
      image: "https://imgur.com/iOtA0vX",
    },
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log("test");
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="secondary-container">
          <div className="person-container">
            <h1>Person:</h1>
            {/* First Name */}
            <label htmlFor={"firstName"}>First Name:</label>
            <input
              type={"text"}
              name={"firstName"}
              value={person.data.firstName}
            ></input>
            {/* Last Name */}
            <label htmlFor={"lastName"}>Last Name:</label>
            <input
              type={"text"}
              name={"lastName"}
              value={person.data.lastName}
            ></input>
            {/* Age */}
            <label htmlFor={"age"}>Age:</label>
            <input type={"text"} name={"age"} value={person.data.age}></input>
            {/* Gender */}
            <label htmlFor={"gender"}>Gender:</label>
            <input
              type={"text"}
              name={"gender"}
              value={person.data.gender}
            ></input>
          </div>
          <div className="creation-container">
            <h1>Creation:</h1>
            {/* Name */}
            <label htmlFor={"name"}>Name:</label>
            <input
              type={"text"}
              name={"name"}
              value={person.creation.name}
            ></input>
            {/* Date Created */}
            <label htmlFor={"dateCreated"}>Date Created:</label>
            <input
              name={"dateCreated"}
              value={person.creation.dateCreated}
            ></input>
            {/* Image */}
            <label htmlFor={"image"}>Image:</label>
            <input
              type={"text"}
              name={"image"}
              value={person.creation.image}
            ></input>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
