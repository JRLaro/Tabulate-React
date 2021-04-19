import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.css";
import NoteState from "./context/note/NoteState";
import AuthState from "./context/auth/AuthState";

function App() {
  return (
    <AuthState>
      <NoteState>
        <Router>
          <Fragment className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </NoteState>
    </AuthState>
  );
}

export default App;
