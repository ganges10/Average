import React from 'react'
import "./menubar.css"
import Searchbar from './searchbar';
import {signout,isAuthenticated} from '../auth';
import {Link,useHistory} from 'react-router-dom';



function Menubar(){
    const refreshPage = ()=>{
        signout();
        window.location.reload();  }
   
        return(
        <div className="menu">
            <div>
                <Link className="topLeft" to = "/">AVERAGE</Link>
            </div>
            <div className="topCenter">
                <ul className="menuList">
                    <li>
                        <Link className="menuListItem"  to = "/about">ABOUT</Link>
                    </li>
                    {isAuthenticated() && (
                        <>
                        <li>
                            <Link className="menuListItem" to = "/profile">PROFILE</Link>
                        </li>
                        <li>
                            <Link className="menuListItem" to = "/create">CREATE</Link>
                        </li>
                        <li>
                            <Link className="menuListItem" onClick={() => signout()} to = "/">LOGOUT</Link>
                        </li>
                        </>
                    )}

                    {!isAuthenticated() && (
                    <li>
                        <Link className="menuListItem" to = "/signup">LOGIN</Link>
                    </li>
                    )}
                </ul>
            </div>
            <div className="topRight">
                <Searchbar placeholder="Enter blog category..." data="get function data"/>
            </div>
        </div>
        )
}
export default Menubar;

