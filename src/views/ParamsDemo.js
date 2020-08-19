import React from 'react';
import { Route, Link } from 'react-router-dom';

const ParamsExample = ({ match }) => (
  <div>
    <h2>Accounts</h2>
    <ul>
      <li>
        <Link to={`${match.url}/netflix`}>Netflix</Link>
      </li>
      <li>
        <Link to={`${match.url}/zillow-group`}>Zillow Group</Link>
      </li>
      <li>
        <Link to={`${match.url}/yahoo`}>Yahoo</Link>
      </li>
      <li>
        <Link to={`${match.url}/modus-create`}>Modus Create</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:id`} component={Child} />

    {/*
         It's possible to use regular expressions to control what param values should be matched.
            * "/order/asc"  - matched
            * "/order/desc" - matched
            * "/order/foo"  - not matched
      */}
    <Route
      path={`${match.url}/order/:direction(asc|desc)`}
      component={ComponentWithRegex}
    />
  </div>
);

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const ComponentWithRegex = ({ match }) => (
  <div>
    <h3>Only asc/desc are allowed: {match.params.direction}</h3>
  </div>
);

export default ParamsExample;
