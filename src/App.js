import './App.css';
import Header from './components/Header/Header';
import About from './Sections/About/About';
import Faqs from './Sections/Faqs/Faqs';
import Footer from './Sections/Footer/Footer';
import Home from './Sections/Home/Home';
import Prizes from './Sections/Prizes/Prizes';
import Sponsors from './Sections/Sponsors/Sponsors';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team22 from './Pages/Team22/Team22';
import CodeOfConduct from './Pages/Code of Conduct/CodeOfConduct';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Prizes />
              <Sponsors />
              <Faqs />
            </>
          }></Route>
          <Route path="/Team2022" element={
            <>
              <Team22 />
            </>
          }></Route>
          <Route path="/Code-of-Conduct" element={
            <>
              <CodeOfConduct />
            </>
          }></Route>
        </Routes>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
