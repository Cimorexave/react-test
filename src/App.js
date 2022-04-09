
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Navigation />
      <div className="container">
        <Card />
      </div>
    </div>
  );
}

export default App;
