import React from 'react';
import ButtonList from '../common/ButtonList';
import controlButtons from '../../data/controlButtons.data';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <ButtonList buttons={controlButtons}/>
      </div>
    );
  }
}

export default HomePage;

