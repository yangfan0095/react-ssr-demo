import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ContentView from './contentView';

class Route2 extends Component {
  render() {
    const { params } = this.props;

    return (
      <div>
         <span>this is route 2</span>
        <h3>device: {params.deviceID}</h3>
        <ContentView device={'wwww'} />
      </div>
    );
  }
}
Route2.propTypes= {
    params: PropTypes.object,
  };

export default Route2;
