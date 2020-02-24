import React from 'react';
import './App.scss';
import TourList from './components/TourList'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{textAlign: "center"}}>City Tour</h1>
        <TourList />
      </React.Fragment>
    )
  }
}

export default App;
