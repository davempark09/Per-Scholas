import './App.css';
import Sidebar from './Sidebar'
import LargeBox from './LargeBox';
import Box from './Box'

function App() {
  return (
    <div className="App">
        <div className="Sidebar">
        <Sidebar />
        </div>
        <div className="LargeBox">
          Website Visitors
        <LargeBox visitors="500" />
        <div className="Media">

        </div>
        </div>
        <div className="Box1">
          Reviews
        <Box num1="1200" />
        </div>
        <div className="Box2">
          Average Rating
        <Box num1="4.6" />
        </div>
        <div className="Box3">
          Sentiment Analysis
        <Box num1="320" />
        <Box num2="520" />
        <Box num3="720" />
        </div>
      </div>
  );
}

export default App;
