import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import BasicDemo from "./views/BasicDemo";
import NoMatch from "./components/NoMatch";
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import Footer from "./components/Footer";
import Visualizer from "./components/Visualizer";
import RCRouter from "./components/RCRouter";
import "./style.css";

export default function App() {
  return (
    <RCRouter>
      <Header>
        <Navigator />
      </Header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/algo">
            <Visualizer />
          </Route>
          <Route path="/basic">
            <BasicDemo />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </main>
      <Footer />
    </RCRouter>
  );
}
