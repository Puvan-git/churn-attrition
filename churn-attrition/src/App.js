import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Sidebar }from './components/Sidebar';
import { Homepage } from './components/Homepage';
import { Graphcard } from './components/Graphcard';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <Homepage />
      <Graphcard />
    </div>
  );
}

export default App;
