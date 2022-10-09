import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Add from './components/Add';
import About from './components/About';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [art, setArt] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/Art')
            .then(res => res.json())
            .then(data => setArt(data));
    }, []);

    function handleAdd(artt) {
      fetch('http://localhost:8000/Art', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(artt)
      }).then(res => {
        if (res.ok) {
          alert('Art added successfully');
        }
      })
        const newArt = [...art,artt];
        setArt(newArt);
    }

  return (
    <div className="App">
      <Navbar />
     {/* set routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home art={art} />} />
          <Route path="/add" element={<Add addArt={handleAdd}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
