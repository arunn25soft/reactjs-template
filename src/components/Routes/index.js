import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home";
import Profile from "../Profile";
import Contact from "../Contact";
import Nav from "../Nav";
import Header from "../Header";
import Sidebar from "../Sidebar";
import TopNav from "../Topnav";
import Footer from "../Footer";
import JsFile from "../Footer/jsFiles.js"
class AppRouter extends React.Component {  
    render() {
      return (
        <Router>
          <div>
              <Header />
              <TopNav />
              <Sidebar />
              <Route path="/home" component={Home} />
              <Footer />
              <JsFile />
              <hr />
              
              <Route path="/profile" component={Profile} />
              <Route path="/contact" component={Contact} />
          </div>
        </Router>
      )
    }
  }
  
  export default AppRouter