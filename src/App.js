import './App.css';
import Header from './components/Header/Header';
import About from './Sections/About/About';
import Faqs from './Sections/Faqs/Faqs';
import Home from './Sections/Home/Home';
import Prizes from './Sections/Prizes/Prizes';
import Sponsors from './Sections/Sponsors/Sponsors';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Home />
      <About />
      <Prizes />
      <Sponsors />
      <Faqs />
    </div>
  );
}

export default App;
