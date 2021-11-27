import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { isAuthenticated } from '../auth';
import { UserList } from '../blogs/apiBlog';
import "./Blogs.css"

class UserBlog extends Component {
    constructor(){
        super()
        this.state = {
            userblogs: []
        }
    }

    componentDidMount () {
        UserList(isAuthenticated().user).then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                this.setState({userblogs: data})
                console.log(this.state)
            }
        })
    }


    renderPosts = (posts) => {
        return (
        <div className="row">
            {Object.entries(posts).map(([i, post]) => {
                const obj=JSON.parse(post)
                const id= obj["blogID"]
                console.log(id)
                return (
                    <div className="postInfo" key = {i}>
                    <div className="card-body">
                        <h5 style={{color:"brown"}} className="postTitle">{obj.blogTitle}</h5>
                        <hr/>
                        <p className="postCat">{obj.content.substring(0,15)}...</p>
                        <p className="card-text"><b>Keywords:</b>{obj.keywords}</p>
                        <br />
                        <p className="postBottom">
                            Posted on {new Date(obj.lastModified).toDateString()}
                        </p>
                        <div style={{color:"brown",fontStyle:"oblique",marginRight:"0"}}> 
                        <Link to={{pathname: "/blog/content",state:{id} }}>Click here to read more  <b>{'>'}</b></Link>
                        </div>
                    </div>
                </div>  
            )              
        } )}
    </div>
        )
    }



    render() {       
        const userblogs=this.state.userblogs;
        return (
            <div>
                <div style={{marginLeft:"20px"}} className="detail">
                        <br/>
                        <div className = "container">
                            <h2 style={{fontFamily: "cursive",color:"brown"}} className = "mt-5 mb-5">{Object.keys(userblogs).length ? "My Blogs" : "Fetching Blogs..." }</h2>
                            {this.renderPosts(userblogs)}
                        </div>
                </div>
                
            </div>
        )
    }
}

export default UserBlog
