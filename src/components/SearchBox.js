import React from 'react';

const SearchBox = ({SearchChange}) =>{
    return(
        <div>
            <input
            className='pa3 ba b--green bg-lightest-blue' 
            type='searchbox' 
            placeholder='Search Robots' 
            onChange={SearchChange}/>
        </div>
    )
}

export default SearchBox;