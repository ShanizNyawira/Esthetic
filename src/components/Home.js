import Art from './Art';

function Home({art}) {

    return (
        <div className="home">
            {art.map(item => (
                <Art key={item.id} art={item} />
            ))}
        </div>
    );

}
export default Home;
