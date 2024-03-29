import path from 'path';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Content from '../assets/Content.js';
import Default from './/Default';

class Home extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object,
  };

  render() {
    const { microdata, mydata } = this.props;
    let homeJs = `${microdata.styleDomain}/build/${microdata.styleVersion}/home.js`;
    let scriptUrls = [homeJs];

    return (
      <Default
        microdata={microdata}
        scriptUrls={scriptUrls}
        title={"demo"}>
        <div id="demoApp"
          data-microdata={JSON.stringify(microdata)}
          data-mydata={JSON.stringify(mydata)}>
          <Content mydata={mydata} microdata={microdata} />
        </div>
      </Default>
    );
  }
};

module.exports = Home;
