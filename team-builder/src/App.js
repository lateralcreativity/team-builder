import React, { useState } from 'react';
import Form from './components/Form';
import Member from './components/Member';
import { v4 as uuid } from 'uuid'; // For setting ID's
import './App.css';

function App() {
  const initialMembersList = [{
    id: uuid(),
    name: 'Gabe',
    email: 'Gabe@test.com',
    role: 'Student'
  }]

  const initialFormValues = {
    name: '',
    email: '',
    role: ''
  }

  const [formValues, setFormValues] = useState(initialFormValues);
  const [members, setMembers] = useState(initialMembersList);

  const onInputChange = event => {
    const { name } = event.target;
    const { value } = event.target;
    setFormValues({...formValues, [name]: value});
  }

  const onSubmit = event => {
    event.preventDefault();

    if(!formValues.name.trim() || !formValues.email.trim() || !formValues.role.trim()){
      return
    }

    const newMember = { ...formValues, id: uuid() };
    
    setMembers([newMember, ...members]);
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <header>
        <h1>Members List</h1>
      </header>

      <Form values={ formValues } onInputChange={ onInputChange } onSubmit={ onSubmit }/>

      {members.map(member => {
        return (
          <Member key={ member.id } data={ member } />
        )
      })}
    </div>
  );
}

export default App;
