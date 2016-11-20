import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Home extends React.Component {
  render() {
    return (
      <Jumbotron className="text-center">
        <h2>Learn, Develop and Perform Web</h2>
        <p className="lead">An open source walking application skeleton for a React-Redux web application projects.</p>
        <p><a href="//github.com/re-stacks/react-redux-boilerplate" target="_blank" className="btn btn-lg btn-primary">Learn more</a></p>
      </Jumbotron>
    );
  }
};
