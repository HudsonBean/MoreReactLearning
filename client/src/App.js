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
  return (
    <div className="container">
      <div className="person-container">
        <h1>Person:</h1>
        {/* First Name */}
        <label htmlFor={"firstName"}>First Name:</label>
        <input name={"firstName"} value={person.data.firstName}></input>
        {/* Last Name */}
        <label htmlFor={"lastName"}>Last Name:</label>
        <input name={"lastName"} value={person.data.lastName}></input>
        {/* Age */}
        <label htmlFor={"age"}>Age:</label>
        <input name={"age"} value={person.data.age}></input>
        {/* Gender */}
        <label htmlFor={"gender"}>Gender:</label>
        <input name={"gender"} value={person.data.gender}></input>
      </div>
      <div className="creation-container">
        <h1>Creation:</h1>
        {/* First Name */}
        <label htmlFor={"firstName"}>First Name:</label>
        <input name={"firstName"} value={person.data.firstName}></input>
        {/* Last Name */}
        <label htmlFor={"lastName"}>Last Name:</label>
        <input name={"lastName"} value={person.data.lastName}></input>
        {/* Age */}
        <label htmlFor={"age"}>Age:</label>
        <input name={"age"} value={person.data.age}></input>
        {/* Gender */}
        <label htmlFor={"gender"}>Gender:</label>
        <input name={"gender"} value={person.data.gender}></input>
      </div>
    </div>
  );
}

export default App;
