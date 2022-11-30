import './App.css';
import HomeContainer from './containers/HomeContainer';
import React from 'react'; 

function App(props) {
  console.log(props);
  return (
    <div className="App"> 
       <HomeContainer/>
    </div>
  );
}

export default App;
