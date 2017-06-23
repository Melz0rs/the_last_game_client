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

  createTabs() {
    const tabNamesArray = [];

    for(const tabName in tabNames) {
      
    }

    return (


      <Tab>{tabName}</Tab>
    );
  }

  render() {
    return (
      <div>
        <Tabs>
          <TabList>
            this.createTabs()
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
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

