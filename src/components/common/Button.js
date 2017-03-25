import React from 'react';

class Button extends React.Component {

  render() {
    return (
      <div className="col-md-3">
      <span className="text-primary text-center">{this.props.button.description}</span>
      <button onClick={this.props.button.onClick}
              className="btn btn-default btn-block text-center">
        {this.props.button.text}
      </button>
    </div>
    );
  }
}

Button.propTypes = {
  button: React.PropTypes.object.isRequired
};

export default Button;
