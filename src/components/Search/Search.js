import React from 'react';
import StatusBar from "../Statusbar";

const Search = ({ setSearch , setStatus,search }) => {
    const searchFilter = (e) => {
        setSearch(e.target.value)
    };
    return (
        <div>
            <input className='search' type='search' placeholder={'поиск'} value={search} onChange={searchFilter} />
            <StatusBar setStatus={setStatus}/>
        </div>
    );
};

export default Search;