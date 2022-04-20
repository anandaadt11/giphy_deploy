
import React from 'react';



const Form = (getGifs, handleInput) => {
    <form onSubmit={getGifs}>
        <input
            type="text"
            placeholder="Search..."
            className="form-search__input"
            required
            onChange={handleInput}
        />
        <button type="submit" className="form-search__button">Search</button>
    </form>
}

export default Form;