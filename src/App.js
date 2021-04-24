import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [users, setUsersList] = useState([])

  const addUserHandler = (uName, Age, id) => {
    setUsersList((prev) => [...prev, {name: uName, age: Age, id: id}])
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </>
  );
}

export default App;
