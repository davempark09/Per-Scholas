import './App.css';
// import First from './Hello'
// import {Funct1,Funct2} from './world'
// import Stuff from './stuff'
// import New from './ClassComponent'
// import {Mult1, Mult2} from './MultClassComponent'
import FormControlClass from './Form';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
        <New name='Person' />
        <Mult1 fname='Lacy' lname='Yancy' />
        <Mult2 activity='walk' />        
      </header> */}
      <FormControlClass />

    </div>
  );
}

export default App;
