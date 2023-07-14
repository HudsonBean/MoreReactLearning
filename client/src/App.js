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
      <h1>Person:</h1>
      {/* First Name */}
      <label htmlFor={"firstName"}>First Name:</label>
      <input name={"firstName"} value={person.data.firstName}></input>
      {/* Last Name */}
      <label htmlFor={"firstName"}>First Name:</label>
      <input name={"firstName"} value={person.data.firstName}></input>
      {/* Age */}
      <label htmlFor={"firstName"}>First Name:</label>
      <input name={"firstName"} value={person.data.firstName}></input>
      {/* Gender */}
      <label htmlFor={"firstName"}>First Name:</label>
      <input name={"firstName"} value={person.data.firstName}></input>
    </div>
  );
}

export default App;
