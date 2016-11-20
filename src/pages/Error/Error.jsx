import React from 'react';
import { Link } from 'react-router';

export default class Error extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <h1>Page not found</h1>
        <p>Sorry, an error has occured, the page you are trying to visit is not available.</p>
        <p>It could be a broken or dead link!</p>
        <p>
          <Link to="/" className="btn btn-primary"><i className="fa fa-lg fa-home"></i> Go back to Home Page</Link>
        </p>
      </div>
    );
  }
};
