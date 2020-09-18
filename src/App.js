import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Home from "./pages/Home"
import Solution from "./pages/Solution";


function App() {
  return (

    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/Solution" component={Solution} />
        
      </div>
    </Router>

  );
}

export default App;
