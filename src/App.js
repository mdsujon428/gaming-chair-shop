import './App.css';
import Home from './components/Pages/Home/Home/Home';
import Footer from './components/Pages/Shared/Footer/Footer';
import Navigation from './components/Pages/Shared/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home></Home>
      <Footer/>
    </div>
  );
}

export default App;
