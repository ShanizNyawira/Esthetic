

function SearchBar({handleSearch}) {
   

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search"
                onChange={event => {
                    handleSearch(event);
                }}

            />
            

        </div>
    );
}

           
    
export default SearchBar;