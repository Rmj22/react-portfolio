import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './pages/Resume'
import Work from './pages/Work'


function App() {
  return (

    <Router>
      <div>
        <Route exact path="/" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/Projects" component={Work}/>
      </div>
    </Router>

  );
}

export default App;
