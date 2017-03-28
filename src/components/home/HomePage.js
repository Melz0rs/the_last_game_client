import React from 'react';
import ButtonList from '../common/ButtonList';
import actionsNames from '../../../constants/actionsNames';
import { socket } from '../../index';

class HomePage extends React.Component {
  getButtonsConfigs() {
    let buttonsConfigs = [];

    for(const actionName in actionsNames) {
      buttonsConfigs.push({
        onClick: () => {
          socket.emit(actionName);
        },
        description: actionName,
        text: 'click'
      });
    }

    return buttonsConfigs;

  }

  render() {
    return (
      <div>
        <ButtonList buttonsConfigs={this.getButtonsConfigs()}/>
      </div>
    );
  }
}

export default HomePage;

