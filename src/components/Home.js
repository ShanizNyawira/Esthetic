import { useState, useEffect } from 'react';
import Art from './Art';

function Home() {
    const [art, setArt] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/Art')
            .then(res => res.json())
            .then(data => setArt(data));
    }, []);

    return (
        <div className="home">
            {art.map(art => (
                <Art key={art.id} art={art} />
            ))}
        </div>
    );
    
}
export default Home;