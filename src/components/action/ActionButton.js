import React from 'react';

export default class ActionButton extends React.Component {

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

ActionButton.propTypes = {
  buttonConfig: React.PropTypes.object.isRequired
};
