import React from "react";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const onLogout = () => {
    localStorage.clear();
    // props.history.replace('/');
  };

  return (
    <nav>
        <NavLink exact to="/login">Login</NavLink><br />
        <NavLink to="/AddTask">Sign up</NavLink><br />
        <NavLink to="/TaskList">Task List</NavLink><br />
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
}