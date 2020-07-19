import React from "react";
// import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import VoterInfo from "./pages/VoterInfo";
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
      <span className="headerBar">
      <h1>BeInformedNC</h1>
      <Link to='/'>
      <h2>Home</h2>
      </Link>
      <Link to='/about'>
      <h2>About</h2>
      </Link>
      <Link to='/voterinfo'>
      <h2>Voter Info</h2>
      </Link>
      <Link to='/contactus'>
      <h2>Contact Us</h2>
      </Link>
      </span>
      <Route path='/' exact component={() => <Homepage />}></Route>
      <Route path='/about' exact component={() => <About />}></Route>
      <Route path='/voterinfo' exact component={() => <VoterInfo />}></Route>
      <Route path='/contactus' exact component={() => <ContactUs />}></Route>
      </Router>
    </div>
  );
}

export default App;