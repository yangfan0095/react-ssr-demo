import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ContentView extends Component {

  state = {
    text: `please fetch device of ${this.props.device} data from server!`
  };

  getText(device) {
    return `this data is fetch from device of ${device}`;
  }

  componentWillMount() {
    const { device } = this.props;

    this.setState({
      text: this.getText(device),
    });
  }

  componentWillReceiveProps(nextProps) {
    const { device } = nextProps;

    this.setState({
      text: this.getText(device),
    });
  }

  render() {
    const { text } = this.state;

    return (
      <div>
          <span>route2</span>
        <span>{text}</span>
      </div>
    );
  }
}
ContentView.propTypes = {
    device: PropTypes.string,
};

export default ContentView;
