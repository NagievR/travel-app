import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CountryPage from "./components/Pages/CountryPage";
import MainPageHeader from "./components/Header/MainPageHeader";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import CardHeader from "./components/Header/CardHeader";
import TravelAppContext from "./components/context/context";
function App() {
  return (
    <TravelAppContext.Provider value={{ language: "UZ" }}>
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
    </TravelAppContext.Provider>
  );
}
export default App;
