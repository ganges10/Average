import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {SearchList} from "./apiBlog";

class searchResults extends Component {
    constructor(props){
        super(props)
        this.state = {
            keyword: this.props.location.state.input,
            searchblogs: []
        }
    }

    componentDidMount () {
        SearchList(this.state.keyword).then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                this.setState({searchblogs: data})
                console.log(this.state)
            }
        })
    }


    renderPosts = (posts) => {
        return (
        <div className="row">
            {Object.entries(posts).map(([i, post]) => {
                const obj=JSON.parse(post)
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
                            Posted on {new Date(obj.lastModified).toDateString()}
                        </p>
                        <div style={{color:"brown",fontStyle:"oblique",marginRight:"0"}}> 
                        <Link to = "/edit">Click here to read more  <b>{'>'}</b></Link>
                        </div>
                    </div>
                </div>  
            )              
        } )}
    </div>
        )
    }

    render() {
        const searchblogs=this.state.searchblogs;
        console.log(this.state.keyword)
        return (
            <div>
                <div style={{marginLeft:"20px"}} className="detail">
                        <br/>
                        <div className = "container">
                            <h2 style={{fontFamily: "cursive",color:"brown"}} className = "mt-5 mb-5">{Object.keys(searchblogs).length ? "Search Results" : "Fetching Blogs..." }</h2>
                            <Link to="/"><button type="button"  style={{float:"right"}} class="btn btn-raised btn-warning">Home</button></Link>
                            <br/><br/>
                            {this.renderPosts(searchblogs)}
                        </div>
                </div>
                
            </div>
        )
    }
}

export default searchResults
