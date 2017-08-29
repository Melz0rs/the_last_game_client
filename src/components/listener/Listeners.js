import React from 'react';
import Listener from './Listener';

export default class Listeners extends React.Component {
  createObjectRow(listenerConfig, i) {
    return (
      <Listener listenerConfig={listenerConfig} key={i} />
    );
  }

  render() {
    return (
      <div>
        {this.props.listenersConfigs.map(this.createObjectRow)}
      </div>
    );
  }
}

Listeners.propTypes = {
  listenersConfigs: React.PropTypes.array.isRequired
};

