import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { SideBar }from './components/SideBar';
import { HomePage } from './components/HomePage';
import { GraphCard } from './components/GraphCard';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <SideBar />
      <HomePage />
      <GraphCard />
    </div>
  );
}

export default App;
