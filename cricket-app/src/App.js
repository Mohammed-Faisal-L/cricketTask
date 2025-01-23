import './App.css';
import Match from './components/Match';
import Score from './components/Score';
import Viewer from './components/Viewer';

function App() {
  return (
    <div className="App">
      <h1>Cricket App</h1>
      <hr />
      <Match />
      <hr />
      <Score />
      <hr />
      <Viewer />
      <hr />
    </div>
  );
}

export default App;
