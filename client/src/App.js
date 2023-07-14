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
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Roblox_Logo_2022.jpg?20220830054427",
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
      <div className="display-container">
        <h2>Person:</h2>
        <span>
          First Name: <span className="data">{person.data.firstName}</span>
        </span>
        <span>
          Last Name: <span className="data">{person.data.lastName}</span>
        </span>
        <span>
          Age: <span className="data">{person.data.age}</span>
        </span>
        <span>
          Gender: <span className="data">{person.data.gender}</span>
        </span>
        <h2>Creation:</h2>
        <span>
          Name: <span className="data">{person.creation.name}</span>
        </span>
        <span>
          Date Created:
          <span className="data">{person.creation.dateCreated}</span>
        </span>
        <span>
          Image:
          <span className="data">
            <img
              src={person.creation.image}
              alt={"A picture of the person's creation."}
              width={"50px"}
              height={"50px"}
            ></img>
          </span>
        </span>
      </div>
    </div>
  );
}

export default App;
