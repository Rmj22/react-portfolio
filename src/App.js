import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Work from './pages/Work'
import PreScreen from "./pages/PreScreen";


function App() {
  return (

    <Router>
      <div>
        <Route exact path="/" component={About} />
        <Route exact path="/PreScreen" component={PreScreen} />
        <Route exact path="/Work" component={Work}/>
      </div>
    </Router>

  );
}

export default App;
