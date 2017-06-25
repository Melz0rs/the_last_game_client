import React from 'react';
import ActionButtons from '../action/ActionButtons';
import Listeners from '../listener/Listeners';
import actionsTabs from '../../../constants/actionsTabs';
import listenersNames from '../../../constants/listenersNames';
import tabNames from '../../../constants/tabNames';
import { socket } from '../../index';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class HomePage extends React.Component {

  constructor() {
    super();

    this.createTabPanels = this.createTabPanels.bind(this);
    this.createTabPanel = this.createTabPanel.bind(this);

  }

  getActionButtonsConfigsForTab(tabName) {
    let actionButtonsConfigs = [];

    if(tabName === tabNames.AfterGame) {
      actionsTabs.push({
        name: 'resetGame',
        tab: tabNames.AfterGame
      });
    }

    if(tabName === tabNames.GameEffects) {
      actionsTabs.push({
        name: 'stopActions',
        tab: tabNames.GameEffects
      });
    }

    actionsTabs.forEach(actionTab => {
      const actionName = actionTab.name;
      const actionTabName = actionTab.tab;

      if (actionTabName === tabName || tabName === tabNames.AllActions) {
        actionButtonsConfigs.push({
          onClick: () => {
            socket.emit(actionName);
          },
          description: actionName,
          text: 'click'
        });
      }
    });

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

    return tabNamesArray.map(this.createTabPanel);
  }

  createTabPanel(tabName) {
    const actionButtonsConfigsForTab = this.getActionButtonsConfigsForTab(tabName);

    return (
      <TabPanel>
        <ActionButtons buttonsConfigs={actionButtonsConfigsForTab} />
      </TabPanel>
    );
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
          <Listeners listenersConfigs={this.getListenersConfigs()} />
        </div>
      </div>
    );
  }
}

export default HomePage;

