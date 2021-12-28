import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";

const Routing = () =>{
  let history = useHistory();
  const token = localStorage.getItem("jwt");
  console.log("This is token", token);
  return(
    <Switch>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
  )
};

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </div>
  );
}

export default App;
