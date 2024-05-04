import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignIn from './components/Sigin/SignIn';
import React from 'react';
import Guest from './Pages/Guest';
import Home from './Pages/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Guest />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
