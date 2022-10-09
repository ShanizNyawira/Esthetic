import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
     {/* set routes */}
      <BrowserRouter>
        <Routes>

          <Route path="/add" element={<Add />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
