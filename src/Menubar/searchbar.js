import React from 'react'
import "./searchbar.css"
import SearchIcon from '@material-ui/icons/Search'
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Searchbar({placeholder}){
    const [input, setInput] = useState('');
    return(
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} value={input} onInput={e => setInput(e.target.value)}/>
                <div className="searchIcon">
                    <Link to={{pathname: `/search`,state:{input} }}><SearchIcon/></Link>
                </div>
            </div>
            <div className="dataResult">
            </div>
        </div>
    )
}

export default Searchbar
