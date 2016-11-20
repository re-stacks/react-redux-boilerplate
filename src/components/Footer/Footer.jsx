import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="text-center">
        <nav>
          <a href="//github.com/re-stacks/react-redux-boilerplate" target="_blank" className="btn btn-link btn-sm">Github Home Page</a>
          <a href="//github.com/re-stacks/react-redux-boilerplate/releases" target="_blank" className="btn btn-link btn-sm">Release Page</a>
          <a href="//github.com/re-stacks/react-redux-boilerplate/milestones" target="_blank" className="btn btn-link btn-sm">Milestones</a>
          <a href="//github.com/re-stacks/react-redux-boilerplate/issues" target="_blank" className="btn btn-link btn-sm">Report Issues</a>
          <a href="//github.com/re-stacks/react-redux-boilerplate/pulls" target="_blank" className="btn btn-link btn-sm">Open Pull Requests</a>
          <a href="//github.com/re-stacks/react-redux-boilerplate" target="_blank" className="btn btn-link btn-sm">About React-Redux-Boilerplate</a>
        </nav>
      </footer>
    );
  }
};
