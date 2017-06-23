import React from 'react';
import ActionButtons from '../action/ActionButtons';
import Listeners from '../listener/Listeners';
import actionsNames from '../../../constants/actionsNames';
import listenersNames from '../../../constants/listenersNames';
import tabNames from '../../../constants/tabNames';
import { socket } from '../../index';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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

  createTabObjectRow(tabName) {
    return <Tab>{tabName}</Tab>;
  }

  createTabs() {
    const tabNamesArray = [];

    for(const tabName in tabNames) {
      tabNamesArray.push(tabName);
    }

    return tabNamesArray.map(this.createTabObjectRow);
  }

  createTabPanels() {
    const tabNamesArray = [];

    for(const tabName in tabNames) {
      tabNamesArray.push(tabName);
    }

    return tabNamesArray.map(this.createTabObjectRow);
  }

  render() {
    return (
      <div>
        <Tabs>
          <TabList>
            {this.createTabs()}
          </TabList>

          {this.createTabPanels()}
        </Tabs>
        <div>
          <ActionButtons buttonsConfigs={this.getActionButtonsConfigs()} />
          <Listeners listenersConfigs={this.getListenersConfigs()} />
        </div>
      </div>
    );
  }
}

export default HomePage;

