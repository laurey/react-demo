import React, { useState, useEffect } from "react";
import "./App.css";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      console.log("send request...");
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>haha</h1>
      <Home />
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
