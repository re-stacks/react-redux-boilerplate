import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';

import React, { PropTypes } from 'react';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};
