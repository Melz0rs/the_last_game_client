import React from 'react';

class Button extends React.Component {

  render() {
    return    (
      <div className="col-md-3">
      <span className="text-primary text-center">{this.props.text}</span>
      <button onClick={this.props.onClick}
              className="btn btn-default btn-block text-center">
        Click
      </button>
    </div>
    );
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired
};

export default Button;
