import React, { Component } from 'react';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.appStyle}>
        <Dashboard />
      </div>
    );
  }
}

const styles = {
  appStyle: {
    background: '#ffc77f'
  }
};

export default App;
