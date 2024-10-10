import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { GraphCard } from './components/GraphCard';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <GraphCard />
    </div>
  );
}

export default App;
