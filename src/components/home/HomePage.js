import React from 'react';
import ActionButtons from '../action/ActionButtons';
import Listeners from '../listener/Listeners';
import actionsNames from '../../../constants/actionsNames';
import listenersNames from '../../../constants/listenersNames';
import { socket } from '../../index';

class HomePage extends React.Component {
  getActionButtonsConfigs() {
    let actionButtonsConfigs = [];

    actionsNames.resetGame = 'resetGame';
    actionsNames.stopActions = 'stopActions';

    for(let actionName in actionsNames) {
      actionName = actionsNames[actionName];

      actionButtonsConfigs.push({
        onClick: () => {
          socket.emit(actionName);
        },
        description: actionName,
        text: 'click'
      });
    }

    return actionButtonsConfigs;
  }

  getListenersConfigs() {
    let listenersConfigs = [];

    for(const listenerName in listenersNames) {
      listenersConfigs.push({
        subscribe: (callbackFn) => {
          socket.on(listenerName, callbackFn);
        },
        listenerName
      });
    }

    return listenersConfigs;
  }

  render() {
    return (
      <div>
        <ActionButtons buttonsConfigs={this.getActionButtonsConfigs()} />
        <Listeners listenersConfigs={this.getListenersConfigs()} />
      </div>
    );
  }
}

export default HomePage;

