import { useEffect, useState } from "react";
import config from '../../lib/config'
import Gif from '../../component/Gif'



const Input = () => {

    const [gifs, setGif] = useState([]);
    const [text, setText] = useState("mario");



    const handleInput = (e) => {
        setText(e.target.value)
    }

    useEffect(() => { getGif() }, []);

    const getGifs = (e) => {
        e.preventDefault();

        getGif();
    };

    const getGif = async () => {
        const LIMIT = 12
        const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY

        const gifs = await fetch(
            `${config.GIPHY_BASE_URL}/gifs/search?q=${text}&api_key=${GIPHY_KEY}&limit=${LIMIT}`
        ).then((response) => response.json());
        setGif(gifs.data);
    };

    return (
        <>
            <form onSubmit={getGifs}>
                <input
                    type="text"
                    placeholder="Search..."
                    className="input"
                    required
                    onChange={handleInput}
                />
                <button type="submit" className="button">Search</button>
            </form>

            <div className="gifs">
                {gifs.map((gif) => (
                    gif.rating === 'g' && (
                        <Gif
                            key={gif.id}
                            url={gif.images.original.url}
                            title={gif.title}
                        />
                    )
                ))}
            </div>

        </>
    );
}


export default Input;