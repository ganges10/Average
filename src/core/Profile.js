import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import UserBlog from '../blogs/UserBlog';
import {isAuthenticated} from '../auth';
import {UserDetail} from '../blogs/apiBlog';

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            userID:"",
            username:""
        }
    }

    componentDidMount () {
        console.log(isAuthenticated().user)
        UserDetail(isAuthenticated().user).then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                console.log("reply for user detail....")
                let res= data.toString().replace('{}\n','').split(':')[2].split(",")[0]
                console.log(res)
                this.setState({username:res})
            }
        })
    }

    
    render() {
        const id = isAuthenticated().user
        return (
            <div>
                <div className="description">
                <div style={{marginTop:"20px",borderStyle:"groove"}} className="userDetails">
                    <img style={{borderStyle:"double"}} src ={require("../Images/prof.jpg")} alt="" />
                    <ul className="creators">
                        <li style={{fontFamily:"Georgia"}} className="listItem">Author</li>
                        <li className="listItem">"{this.state.username}"</li>
                        <li><hr/></li>
                        <li style={{fontFamily:"Georgia"}} className="listItem">Email Id</li>
                        <li className="listItem">{id}</li>
                    </ul>
                </div>
                <div className="detail">
                    <UserBlog/>
                </div>
                </div>
                
            </div>
        )
    }
}

export default Profile

