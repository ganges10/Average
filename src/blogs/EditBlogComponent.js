import React , {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {create} from './apiBlog';
import {isAuthenticated} from '../auth';

class EditBlogComponent extends Component {

    constructor()  {
        super()
        this.state = {
            blogID: "",
            blogContent: "",
            blogTitle: "",
            keywords:"",
            error:"",
            redirectToProfile: false,
            user:{

            }
        }
        this.data={
            blogContent: "",
            blogTitle: "",
            keywords:"",
            authorID: isAuthenticated().user,
            blogID:Math.random(),
            creationDate:new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()
        }
    }
    componentDidMount() {
        this.postData = new FormData()
        this.setState({user: isAuthenticated().user})
    }
    handleChange = (name) => (event) => {
        this.setState({error: ""})
        const value = event.target.value
        this.postData.set(name,value)
        this.setState({[name]: value})
    }


    clickSubmit = event => {
        event.preventDefault()
        this.setState({loading: true})
        this.data.blogContent=this.state.blogContent
        this.data.blogTitle=this.state.blogTitle
        this.data.keywords = this.state.keywords
        create(this.data)
        .then(data => {
            console.log(data)
            if(data.error) this.setState({error: data.error})
            else {
                this.setState({loading: false,redirectToProfile:true})
            }
        })

    }

    newPostForm = () => (
        <form style={{fontFamily:"Times New Roman",fontSize:"14px"}}>
            <br/>
            <div className="form-group">
                <label className="text-muted">How would you like to name your blog?</label>
                <input type ="text"  onChange={this.handleChange("blogTitle")} className="form-control" />
            </div>
            <br/>
            <div className="form-group">
                <label className="text-muted">Some keywords to identify your blog</label>
                <input type ="text"  onChange={this.handleChange("keywords")} className="form-control" />
            </div>
            <br/>
            <div className="form-group green-border-focus">
                <label className="text-muted">What is your blog about?</label>
                <textarea className="form-control"  onChange={this.handleChange("blogContent")} id="Blog" rows="3" />
            </div>
            <button onClick = {this.clickSubmit} className = "btn btn-raised btn-danger">
                My Blog is ready to go!
            </button>
        </form>
    );

    render() {

        if(this.state.redirectToProfile) {
            return  <Redirect to={`/profile`}/>
         }
 
        return (
            <div className = "container" style={{marginTop:"50px"}}>                
                {this.newPostForm()}
            </div>
        )
    }
}

export default EditBlogComponent;