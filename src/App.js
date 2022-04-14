
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Sidebar />
      
      <div className="fixed-header">
        <Header />
        <Navigation />
      </div>
      <div className="container">
      <Footer />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
