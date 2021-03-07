import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Form from './Form';
import './App.css';

function App() {
  const testState = [{
    name: 'Gabriel',
    email: 'test@test.com',
    role: 'developer'
  }];

  const [members, setMembers] = useState(testState);

  const addMember = member => {
    setMembers([...members, member]);
  };

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className="App">
            <h1>Team Members</h1>
            <Link to='/form'>
              <button>Add New Members</button>
            </Link>
          </div>
          {members.map(member => {
            return (
              <div>
                {member.name}
                {member.email}
                {member.role}
              </div>
            )
          })}
        </Route>
        <Route path='/form'>
          <Form addMember={addMember}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
