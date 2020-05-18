import React from 'react';

const SearchBox = ({searchfeild, SearchChange})=>{
    return(
        <div>
         <input
         className='pa3 ba b--green bg-lighttest-blue' 
         type='search' 
         placeholder='search robots'
         onChange={SearchChange}
         />
        </div>
    );
}

export default SearchBox;