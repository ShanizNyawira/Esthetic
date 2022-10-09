import { AiFillHeart } from 'react-icons/ai';
import { useState } from "react"

function Art({ art }) {
    const [liked, setLiked] = useState(art.likes > 0)
    const [noOfLikes, setNoOfLikes] = useState(art.likes)
    return (
        <div className="art">
            <h1>{art.artist}</h1>
            <div className='img'>
                <img src={art.image} alt="art" />
            </div>

            <div className="likes">
                <span>{noOfLikes}</span>
                <AiFillHeart
                    style={{ color: liked ? "red" : "black" }}
                    onClick={() => {
                        setLiked(!liked)

                        //increase likes
                        if (!liked) {
                            setNoOfLikes(parseInt(noOfLikes + 1))
                        }
                        //decrease likes
                        else {
                            setNoOfLikes(parseInt(noOfLikes - 1))
                        }

                    }}


                />
            </div>
        </div>

    );
}
export default Art;
