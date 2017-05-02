import React from 'react';

export default class Listener extends React.Component {
  constructor() {
    super();

    this.state = { stateClass: 'no-signal' };
  }

  componentWillMount () {
    this.props.listenerConfig.subscribe((listenerValue) => {
      this.setState( { stateClass: listenerValue === 0 ? 'has-signal' : 'no-signal'} );
    });

    this.listenerName = this.props.listenerConfig.listenerName;
  }

  getClasses() {
    return 'col-md-3 panel '+ this.state.stateClass;
  }

  render() {
    return (
      <div className={this.getClasses.call(this)}>
        <span className="text-primary text-center">{this.listenerName}</span>
      </div>
    );
  }
}

Listener.propTypes = {
  listenerConfig: React.PropTypes.object.isRequired
};
