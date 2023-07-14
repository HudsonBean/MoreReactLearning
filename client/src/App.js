import React, { useState } from "react";
import "./Styles/App.css";

function App() {
  //Variables
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
  let newPerson = {
    ...person,
    data: {
      ...person.data,
    },
    creation: {
      ...person.creation,
    },
  };
  //Functions
  function Input(props) {
    return (
      <input
        type={"text"}
        name={props.property}
        defaultValue={person[props.parent][props.property]}
        onChange={props.onEdit}
      ></input>
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    setPerson(newPerson);
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="secondary-container">
          <div className="person-container">
            <h1>Person:</h1>
            {/* First Name */}
            <label htmlFor={"firstName"}>First Name:</label>
            <Input
              onEdit={(e) => {
                newPerson = {
                  ...newPerson,
                  data: {
                    ...newPerson.data,
                    firstName: e.target.value,
                  },
                };
              }}
              parent={"data"}
              property={"firstName"}
            />
            {/* Last Name */}
            <label htmlFor={"lastName"}>Last Name:</label>
            <Input
              onEdit={(e) => {
                newPerson = {
                  ...newPerson,
                  data: {
                    ...newPerson.data,
                    lastName: e.target.value,
                  },
                };
              }}
              parent={"data"}
              property={"lastName"}
            />
            {/* Age */}
            <label htmlFor={"age"}>Age:</label>
            <Input
              onEdit={(e) => {
                newPerson = {
                  ...newPerson,
                  data: {
                    ...newPerson.data,
                    age: e.target.value,
                  },
                };
              }}
              parent={"data"}
              property={"age"}
            />
            {/* Gender */}
            <label htmlFor={"gender"}>Gender:</label>
            <Input
              onEdit={(e) => {
                newPerson = {
                  ...newPerson,
                  data: {
                    ...newPerson.data,
                    gender: e.target.value,
                  },
                };
              }}
              parent={"data"}
              property={"gender"}
            />
          </div>
          <div className="creation-container">
            <h1>Creation:</h1>
            {/* Name */}
            <label htmlFor={"name"}>Name:</label>
            <Input
              onEdit={(e) => {
                newPerson = {
                  ...newPerson,
                  creation: {
                    ...newPerson.creation,
                    name: e.target.value,
                  },
                };
              }}
              parent={"creation"}
              property={"name"}
            />
            {/* Date Created */}
            <label htmlFor={"dateCreated"}>Date Created:</label>
            <Input
              onEdit={(e) => {
                newPerson = {
                  ...newPerson,
                  creation: {
                    ...newPerson.creation,
                    dateCreated: e.target.value,
                  },
                };
              }}
              parent={"creation"}
              property={"dateCreated"}
            />
            {/* Image */}
            <label htmlFor={"image"}>Image:</label>
            <Input
              onEdit={(e) => {
                newPerson = {
                  ...newPerson,
                  creation: {
                    ...newPerson.creation,
                    image: e.target.value,
                  },
                };
              }}
              parent={"creation"}
              property={"image"}
            />
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
              alt={"The person's creation."}
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
