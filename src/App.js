
import './App.css';
//import Boxes from './components/Boxes';
import MainComponenet from './components/MainComponenet';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/features" element={<MainComponenet key="features" default='features'/>} />
          <Route path="/crime" element={<MainComponenet key="crime" default='crime'/>} />
          <Route path="/food" element={<MainComponenet key="food" default='food'/>} />
          <Route path="/bitcoin" element={<MainComponenet key="bitcoin" default='bitcoin'/>} />
          <Route path="/tesla" element={<MainComponenet key="tesla" default='tesla'/>} />
          <Route path="/disease" element={<MainComponenet key="disease" default='disease'/>} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
