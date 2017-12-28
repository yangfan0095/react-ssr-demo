import path from 'path';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import APP from '../assets/app.js';
import Default from './Default';

class Device extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object,
    isServer: PropTypes.bool,
  };

  componentDidMount() {
    console.log('hello componentDidMount!!!');
  }

  render() {
    const { microdata, mydata, isServer } = this.props;
    let deviceJs = `${microdata.styleDomain}/build/${microdata.styleVersion}/device.js`;
    let scriptUrls = [deviceJs];

    return (
      <Default
        microdata={microdata}
        scriptUrls={scriptUrls}
        title={"demo"}>
        <div id="demoApp"
          data-microdata={JSON.stringify(microdata)}
          data-mydata={JSON.stringify(mydata)}>
          <APP
            microdata={microdata}
            mydata={mydata}
            isServer={isServer} />
        </div>
      </Default>
    );
  }
};

module.exports = Device;
