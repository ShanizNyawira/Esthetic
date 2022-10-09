import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [art, setArt] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/Art')
            .then(res => res.json())
            .then(data => setArt(data));
    }, []);

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
