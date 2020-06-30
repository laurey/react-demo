import React from "react";
import { Route, Link, useRouteMatch, useParams } from "react-router-dom";

const BasicExample = (props) => {
  const match = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/about`}>About</Link>
        </li>
        <li>
          <Link to={`${match.url}/topics`}>Topics</Link>
        </li>
      </ul>

      <Route path={`${match.url}/about`} component={About} />
      <Route path={`${match.url}/topics`} component={Topics} />
    </div>
  );
};

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = () => {
  const match = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
};

const Topic = () => {
  const params = useParams();
  return (
    <div>
      <h3>{params.topicId}</h3>
    </div>
  );
};

export default BasicExample;
