import React from 'react';
import Button from '../common/Button';

class ButtonList extends React.Component {
  createObjectRow(btn, i) {
    return (
      <Button button={btn}  key={i} />
    );
  }

  render() {
    return (
      <div>
        {this.props.buttons.map(this.createObjectRow)}
      </div>
    );
  }
}

ButtonList.propTypes = {
  buttons: React.PropTypes.array.isRequired
};

export default ButtonList;
