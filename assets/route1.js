import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentView from './contentView';

class Route1 extends Component {
  render() {
    const { params } = this.props;

    return (
      <div>
        <span>this is route 1</span>
        <h3>device: {'12222'}</h3>
        <ContentView device={'12222'} />
      </div>
    );
  }
}
Route1.propTypes= {
    params: PropTypes.object,
  };


export default Route1;
