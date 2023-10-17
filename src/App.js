import './App.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Loader from './Loader';
import UserGrid from './UserGrid';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <Navbar onGetUsers={getUsers} />
      {loading ? <Loader /> : <UserGrid users={users} />}
    </div>
  );
}

export default App;

