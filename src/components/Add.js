function Add({addArt}) {
      function handleAdd(e){
            e.preventDefault();
            const art = {
                  artist: e.target.artist.value,
                  image: e.target.image.value,
                  likes: 0
            }
            addArt(art);
            //go to / route
            window.location.href = '/';
            e.target.reset();

      }
      return (
            <div className="add">
                  <form className="add-form" onSubmit={handleAdd}>
                        <label>Artist</label>
                        <input type="text" name="artist" required placeholder="Enter the name of the artist"/>
                        <label>Art url</label>
                        <input type="text" name="image" required placeholder="Paste the url where the art is located"/>
                        <button type="submit">Add</button>
                  </form>

            </div>
      );
}

export default Add;
