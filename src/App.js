import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CountryPage from "./components/Pages/CountryPage";
import MainPageHeader from "./components/Header/MainPageHeader";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import CardHeader from "./components/Header/CardHeader";

import { reducer } from "./components/reducer/reducer";
import defaultState from "./components/reducer/reducer";
import { useReducer } from "react";
import TravelAppContext from "./components/context/context";
import { AuthContext } from "./components/context/auth-context";
import useAuth from "./custom-hooks/useAuth";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { userId, userProfile, login, logout } = useAuth();
  const isAuthenticated = !!userProfile;

  return (
    <TravelAppContext.Provider value={{ ...state, dispatch }}>
      <AuthContext.Provider value={{ 
        userProfile, userId, isAuthenticated, login, logout
      }}>

        <Router>
          <div className="app">
            <Switch>
              <Route path="/country">
                <CardHeader />
                <CountryPage />
              </Route>
              <Route path="/">
                <MainPageHeader />
                <Main />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>

      </AuthContext.Provider>
    </TravelAppContext.Provider>
  );
}

export default App;
