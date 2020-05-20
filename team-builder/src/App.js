import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import Form from './components/Form';
import './App.css';

function App() {
  // Setting default form values to empty
  const initialFormValues = {
    name: '',
    email: '',
    role: ''
  };

  // Setting default member list to empty
  const initialMemberList = [{
    id: uuid(),
    name: '',
    email: '',
    role: ''
  }];

  // State initialized for our member list
  // This is where our member list is stored
  const [memberList, setMemberList] = useState(initialMemberList);

  // State initialized to hold our current form values
  // This is the information passed to create a new member
  const [formValues, setFormValues] = useState(initialFormValues);

  const inputHandler = event => {
    // Event target name is set dynamically
    const { name } = event.target;

    // Event target value is set dynamically
    const { value } = event.target;

    // Spread previous formValues and add current value gotten from event
    // If you typed hello this would look like
    // h
    // he
    // hel
    // hell
    // hello
    setFormValues({ ...formValues, [name]: value });
  }

  const submitHandler = (event) => {
    // New object holding our passed form values and a unique id
    const newMember = { ...formValues, id: uuid() }

    // Prevent page reload
    event.preventDefault();

    // Spread old member list into a new array and add new member from form values
    setMemberList([...memberList, newMember]);
    // Reset form values
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <Form formValues={formValues} inputHandler={inputHandler} submitHandler={submitHandler} />

      {memberList.map(member => {
        // Check for incomplete/blank spaced values -- this also prevents initial value from showing up by placing it in map
        if (!member.name.trim() || !member.email.trim() || !member.role.trim()) {
          return null;
        } else {
          return (
            <div key={member.id}>
              <p>Name: {member.name}</p>
              <p>Email: {member.email}</p>
              <p>Role: {member.role}</p>
            </div>
          )
        }
      })}
    </div>
  );
}

export default App;
