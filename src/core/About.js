import React from 'react'
import './About.css';

const About=()=>(
        <div>
            <div className="description">
                <div className="detail">
                    <h3 style={{color:"brown",fontFamily:"Cursive", marginTop: "30px"}}>Welcome To The World Of Writing!</h3>
                    <p style={{fontSize:"18px",fontFamily:"Cursive"}}>
                        Blogging is a great way of expressing yourself and a fantastic way of sharing and spreading your knowledge.
                        According to the IACP Center For Social Media, 3 million new blogs come online every month.
                        We aim to create an application that allows users to create blogs in their area of expertise as well as view the blogs written by others, free of cost!
                        <br/><br/>
                        So... How do I blog? Where to begin with?? If these are your train of thoughts, you can relax.
                        Average lets you pen down your thoughts in your own style! 
                        You can view blogs of your peers and get motivated!
                        If you wanna be a wizard of words, join us and spread your magic!
                        <br/>
                    </p>
                    <img style={{ width:"250px",height:"200px"}} src={require("../Images/book.gif")} alt=""/>
               </div>
                <div className="developer">
                    <img src ={require("../Images/developers.jpg")} alt="" />
                    <ul className="creators">
                        <li className="listItem">Created By</li>
                        <li className="listItem">Ganga  And Sivaranjan</li>
                    </ul>
                        <hr/>
                    <ul className="devList">
                        <li className="listItem"><u>Contact us</u></li>
                        <li>
                            <a className="listItem" href="https://www.linkedin.com/in/ganga-b-88098418b">Ganga's Socials</a>
                        </li>
                        <li>
                            <a className="listItem"  href ="https://www.linkedin.com/in/sivaranjan-m/">Sivaranjan's Socials</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
);
export default About
