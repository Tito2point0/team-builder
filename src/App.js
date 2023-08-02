import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [team, setTeam] = useState([]);

  const [values, setValues] = useState({
    name: "",
    email: "",
    role: "",
  });

  const onSubmit = () => {
    setTeam([values, ...team]);
    setValues({ name: "", email: "", role: "" });
  };
 
  const onChange = (name, value) => {
    setValues({ ...values, [name] : value })
  }
 
  return (
    <div className="App">
      <h1>Team Member Names</h1>
      <Form
        values={values}
        change={onChange}
        submit ={onSubmit}
       /> 
      {team.map((teamMembers, index) => {
        return (
          <div key={index}>
            {teamMembers.name}, {teamMembers.email}, {teamMembers.role}
          </div>
        )
      }
        )}
    </div>
  );
}

export default App;
