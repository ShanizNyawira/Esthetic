function Add() {
      return (
            <div className="add">
                  <form className="add-form">
                        <label>Artist</label>
                        <input type="text" required placeholder="Enter the name of the artist"/>
                        <label>Art url</label>
                        <input type="text" required placeholder="Paste the url where the art is located"/>
                        <button type="submit">Add</button>
                  </form>

            </div>
      );
}

export default Add;
