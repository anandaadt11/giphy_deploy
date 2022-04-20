import React from 'react'



function Gif({ url, title }) {
    return (
        <div className="gif">
            <img className='image' src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}



export default Gif;
