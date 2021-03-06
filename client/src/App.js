import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.css";
import NoteState from "./context/note/NoteState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import NotFound from "./components/pages/NotFound";
import Intro from "./components/pages/Intro";

if (localStorage.token) {
  setAuthToken(localStorage.token)
}
function App() {
  return (
    <AuthState>
      <NoteState>
        <AlertState>
          <Router>
            <Fragment className="App">
              <Navbar />
              <div className="container">
              <Alerts />
                <Switch>
                  <Route exact path ='/hello' component={Intro} />
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route component={NotFound}/>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </NoteState>
    </AuthState>
  );
}

export default App;
