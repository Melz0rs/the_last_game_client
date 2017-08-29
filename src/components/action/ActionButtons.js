import React from 'react';
import ActionButton from './ActionButton';

export default class ActionButtons extends React.Component {
  createObjectRow(buttonConfig, i) {
    return (
      <ActionButton buttonConfig={buttonConfig}  key={i} />
    );
  }

  render() {
    return (
      <div>
        {this.props.buttonsConfigs.map(this.createObjectRow)}
      </div>
    );
  }
}

ActionButtons.propTypes = {
  buttonsConfigs: React.PropTypes.array.isRequired
};

