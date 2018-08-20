import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import BasicExample from "./components/BasicExample";
import ParamsExample from "./components/ParamsExample";
import BSRouter from "./components/BrowserHistory";
import HSRouter from "./components/HashHistory";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <HSRouter>
          <div className="App">
            <p>root path contents: </p>
            <ul>
              <li><Link to="/">#/Home</Link></li>
              <li><Link to="/basic">#/Basic</Link></li>
              <li><Link to="/params">#/Params</Link></li>
            </ul>
            <hr/>
            <p>sub path contents:</p>
            <Route exact path="/" component={Home} />
            <Route path="/basic" component={BasicExample} />
            <Route path="/params" component={ParamsExample} />
            <hr/>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </HSRouter>

        <BSRouter>
          <div className="App">
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
