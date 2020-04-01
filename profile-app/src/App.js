import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './pages/resume'


function App() {
  return (

    <Router>
      <div>
        <Route exact path="/" component={About} />
        <Route exact path="/resume" component={Resume} />
      </div>
    </Router>

  );
}

export default App;
