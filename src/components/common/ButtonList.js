import React from 'react';
import Button from '../common/Button';

class ButtonList extends React.Component {
  createObjectRow(buttonConfig, i) {
    return (
      <Button buttonConfig={buttonConfig}  key={i} />
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

ButtonList.propTypes = {
  buttonsConfigs: React.PropTypes.array.isRequired
};

export default ButtonList;
