import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import asyncComponent from './components/AsyncComponent';
import './App.scss';

const BSRouter = asyncComponent(() => import("./components/BrowserHistory"));
const BasicExample = asyncComponent(() => import("./components/BasicExample"));
const ParamsExample = asyncComponent(() => import("./components/ParamsExample"));

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <BSRouter>
          <div>
            <p>root path contents: </p>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/basic">Basic</Link></li>
              <li><Link to="/params">Params</Link></li>
            </ul>
            <hr/>
            <p>sub path contents:</p>
            <Route exact path="/" component={Home} />
            <Route path="/basic" component={BasicExample} />
            <Route path="/params" component={ParamsExample} />
          </div>
        </BSRouter>
      </div>
    );
  }
}

export default App;
