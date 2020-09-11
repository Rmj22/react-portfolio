import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Service from "./pages/Service";
import Train from "./pages/Train";


function App() {
  return (

    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/Train" component={Train}/>
      </div>
    </Router>

  );
}

export default App;
