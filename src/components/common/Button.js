import React from 'react';

class Button extends React.Component {

  render() {
    return (
      <div className="col-md-3">
      <span className="text-primary text-center">{this.props.buttonConfig.description}</span>
      <button onClick={this.props.buttonConfig.onClick}
              className="btn btn-default btn-block text-center">
        {this.props.buttonConfig.text}
      </button>
    </div>
    );
  }
}

Button.propTypes = {
  buttonConfig: React.PropTypes.object.isRequired
};

export default Button;
