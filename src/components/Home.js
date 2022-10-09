import { useState, useEffect } from 'react';
import Art from './Art';

function Home() {
    
    return (
        <div className="home">
            {art.map(art => (
                <Art key={art.id} art={art} />
            ))}
        </div>
    );

}
export default Home;
