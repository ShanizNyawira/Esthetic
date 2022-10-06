import {AiFillHeart} from 'react-icons/ai';
import {useState} from "react"

function Art({ art }) {
    const [liked,setLiked] = useState(art.likes>0)
    const [noOfLikes,setNoOfLikes] = useState(art.likes)
    return (
        <div className="art">
            <img src={art.image} alt="art" />
            <p>{art.artist}</p>
            <div className="likes">
                <span>{noOfLikes}</span>
                <AiFillHeart 
                style={{color: liked ? "red" : "black"}}
                onClick={()=>{
                    setLiked(!liked)
                    
                    //increase likes
                    if(!liked){
                        setNoOfLikes(noOfLikes+1)
                    }
                    //decrease likes
                    else{
                        setNoOfLikes(noOfLikes-1)
                    }

                }}
                
                    
                    />
            </div>
        </div>

    );
}
export default Art;