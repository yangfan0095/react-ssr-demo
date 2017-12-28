import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import Route1 from './route1';
import Route2 from './route2';


class App extends Component {
   wrapComponent(Component) {
    const { microdata, mydata } = this.props;

    return React.createClass({
      render() {
        return React.createElement(Component, {
          microdata: microdata,
          mydata: mydata,
        }, this.props.children);
      }
    });
  }

  render() {
    const { isServer, mydata } = this.props;
    return (
        <Router>
        <div>
           <div className="App">
              <div className="content">
                  <Route exact path="/" component = { this.wrapComponent(Route1)}></Route>
                  <Route path="/home" component = {this.wrapComponent(Route2)}></Route>
              </div>
          </div>
        </div>
    </Router>
    );
  }
}
App.propTypes = {
    isServer: PropTypes.boolean,
    microdata: PropTypes.object,
    mydata: PropTypes.object
  };

export default App;
