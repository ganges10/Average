import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './NewBlog.css'
import {BlogContent} from './apiBlog';


class NewBlog extends Component{
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            id:this.props.location.state.id
        }
    }
    componentDidMount () {
        console.log(this.state.id)
        BlogContent(this.state.id).then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                console.log("Response to indi blog")
                console.log(data)
                this.setState({post: JSON.parse(data['0'])})
                console.log(this.state)
            }
        })
    }

    render() {
    const id=this.state.post.blogID
    return(
    <>
    {Object.keys(this.state.post).length <=1 ?"Fetching Blog...": 
    <div className="blogContent">
        <h2 className="heading">{this.state.post.blogTitle}</h2>
        <hr/>
        <p className="content">
            {this.state.post.content}
        </p>
        <p>{this.state.post.keywords}</p>
        <br/>
        <Link to={{pathname: "/comments",state:{id} }}><button className="btn btn-raised btn-warning">
                    Show Comments
            </button></Link>
        <p align="right">
            <Link style={{color:"white"}} to="/">
                <button className="btn btn-raised btn-dark">
                    Back
                </button>
            </Link>
        </p>
    </div>
    }
    </>
    )
    }
        
}

export default NewBlog
