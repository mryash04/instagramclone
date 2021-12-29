import React, {useEffect, useReducer, useContext} from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import {UserContext} from "./Context/UserContext";
import {initialState, userReducer} from "./reducers/userReducer";

const Routing = ({state, dispatch}) =>{
  let history = useHistory();
  console.log(history)
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log("This is token", token);
    if(token){
      dispatch({type : "USER", payload : token})
      history.push("/")
    }else{
      history.push("/login")
    }
  }, [])
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
  const[state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
    <div className="App">
      <Router>
        <Navbar />
        <Routing state={state} dispatch={dispatch} />
      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
