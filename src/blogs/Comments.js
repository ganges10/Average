import React , {Component} from 'react';
import {comment,BlogComment} from './apiBlog';
import {isAuthenticated} from '../auth';
import {Link} from 'react-router-dom';

class Comments extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.location.state.id,
            comment:{},
            newComment:"",
            error:""
        }
    }
    componentDidMount () {
        BlogComment(this.state.id).then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                this.setState({comment:data})
                console.log(this.state.comment)
                console.log(this.state.comment)
            }
        })
    }
    handleChange = (name) => (event) => {
        this.setState({error: ""})
        const value = event.target.value
        this.setState({[name]: value})
        console.log(this.state)
    }

    isValid = () => {
        if(!this.state.text.length > 0) {
            this.setState({error: "Comment should not be empty"})
            return false
        }
        return true
    }
    clickSubmit = event => {
        event.preventDefault()
        this.setState({loading: true})
        comment(isAuthenticated().user,this.state.id,this.state.blogComment)
        .then(data => {
            console.log(data)
            if(data.error) this.setState({error: data.error})
            else {
                this.setState({loading: false,redirectToProfile:true})
                window.location.reload();
            }
        })

    }

    renderComments = (posts) => {
        return (
        <div className="row">
            {Object.entries(posts).map(([i, post]) => {
                const obj=JSON.parse(post)
                console.log("Comment")
                console.log(obj)
                return (
                    <div className="postInfo" key = {i}>
                    <div>
                        <p style={{color:"grey"}} className="lead"><b>{obj.userID}</b>{" : "}{obj.commentContent}</p>
                        <br />
                    </div>
                </div>  
            )              
        } )}
    </div>
        )
    }


    render() {
        const comments = this.state.comment
        const {error} = this.state
        return (
           <div>
               <br/><br/>
               {isAuthenticated() &&
                   <form style={{fontFamily:"Times New Roman",fontSize:"14px"}}>
                   <br/>
                   <div className="form-group">
                       <label className="text-muted">What do you think about this blog?</label>
                       <input type ="text"  onChange={this.handleChange("blogComment")} className="form-control" />
                       <br/>
                       <button onClick = {this.clickSubmit} className = "btn btn-raised btn-danger">
                           Post
                        </button>
                   </div>
                   </form>
                }

               <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                    {error}
                </div>
    
               <div className="col-md-12">
                        <h3 className="text-primary">{Object.keys(this.state.comment).length} comments</h3>
                        <hr />
                        {this.renderComments(comments)}
                </div>
           </div> 
        )
    }
}

export default Comments;