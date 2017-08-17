import React from 'react';
import HomePage from '../home/HomePage';

class App extends React.Component {

  render() {
    return(
      <div >
        <div className="col-md-6 col-md-offset-3">
          <HomePage />
        </div>
      </div>
    );
  }
}

export default App;
