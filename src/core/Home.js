import React from 'react';
import "./Home.css";
import Blogs from '../blogs/Blogs';

function Home(){
    return(
    <div>
        <div className="jumbotron" style={{backgroundImage:`url(${require("../Images/blog_main.jpg")})`,backgroundSize: "100%"}}>
            <br/>
            <h1>
                AVERAGE
            </h1>
            <div className="container">
                <br />
                <div className="caption">
                    <h4><i>It's never a better time to be a writer!</i></h4>
                    <br/>
                </div>
            </div>
        </div>

        <div className="posts">
            <Blogs/>
        </div>
    </div>
    )
}
export default Home;