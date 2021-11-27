import React,{Component} from 'react'
import './Blogs.css';
import {Link} from 'react-router-dom';
import { List } from "./apiBlog.js";

class Blogs extends Component{
    constructor() {
        super()
        this.state = {
            posts: {}
        }
    }

    componentDidMount () {
        List().then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                this.setState({posts: data})
            }
        })
    }

    renderPosts = (posts) => {
        return (
        <div className="row">
            {Object.entries(posts).map(([i, post]) => {
                const obj=JSON.parse(post)
                const id= obj.blogID
                //console.log(obj)
                //const posterId = post.blogID
                //const posterName = post.postedBy ? post.blodTitle : "Unknown"
                return (
                    <div className="postInfo" key = {i}>
                        <div className="card-body">
                            <h5 style={{color:"brown"}} className="postTitle">{obj.blogTitle}</h5>
                            <hr/>
                            <p className="postCat">{obj.content.substring(0,15)}...</p>
                            <p className="card-text"><b>Keywords:</b>{obj.keywords}</p>
                            <br />
                            <p className="postBottom">
                                Posted by {obj.authorID} {''}
                                on {new Date(obj.lastModified).toDateString()}
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
        const {posts} = this.state;
        return (
            <div className = "container">
                <h2 style={{fontFamily: "Italic",color:"brown",textAlign:"center"}} className = "mt-5 mb-5">{Object.keys(posts).length ? "Recent Blogs" : "Fetching Blogs..." }</h2>
                {this.renderPosts(posts)}
            </div>
        )
    }

}

export default Blogs
