import Art from './Art';
import SearchBar from './SearchBar';


function Home({art ,handleSearch}) {

    return (
        <div className="home">
            <SearchBar handleSearch={handleSearch}/>
            {art.map(item => (
                <Art key={item.id} art={item} />
            ))}
        </div>
    );

}
export default Home;