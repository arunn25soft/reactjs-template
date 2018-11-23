import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home";
import Profile from "../Profile";
import Contact from "../Contact";
import Nav from "../Nav";
import Header from "../Header";
import Wrapper from "../Wrapper";
class AppRouter extends React.Component {  
    render() {
      return (
        <Router>
          <div>
              <Header />
              <Nav />
              <hr />
              <Route path="/home" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/contact" component={Contact} />
          </div>
        </Router>
      )
    }
  }
  
  export default AppRouter