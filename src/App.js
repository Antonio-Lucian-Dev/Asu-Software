import './App.css';
import LineChart from './components/LineChart';
import NavBar from './components/NavBar';
import Project from './components/Project';
import WorkFlow from './components/WorkFlow';

function App() {
  return (
    <div className="App">
      <NavBar />
      <WorkFlow />
      {/* <Project /> */}
      <LineChart />
    </div>
  );
}

export default App;
