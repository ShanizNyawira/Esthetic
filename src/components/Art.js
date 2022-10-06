import {AiOutlineHeart} from 'react-icons/ai';
import {useState} from "react"

function Art({ art }) {
    const [liked,setLiked] = useState()
    return (
        <div className="art">
            <img src={art.image} alt="art" />
            <p>{art.artist}</p>
            <div className="likes">
                <span>{art.likes}</span>
                <AiOutlineHeart onClick={()=>console.log("clicked")}/>
            </div>
        </div>

    );
}
export default Art;