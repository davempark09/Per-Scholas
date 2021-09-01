import './App.css';
import First from './Hello'
import {Funct1,Funct2} from './world'
import Stuff from './stuff'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          My first new app!!
        </h1>
        <h2>
          Learn React Today!!!!
        </h2>
        <p>
          Cause it's just oh so fun!!!
        </p>
        <First />
        <Funct1 fname='David' lname='Park' />
        <Funct2 time='day' />
        <Stuff />

        
      </header>
    </div>
  );
}

export default App;
