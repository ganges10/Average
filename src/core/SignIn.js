import React from "react";
import ReactModalLogin from "react-modal-login";
import { signin,signup,authenticate, setUser } from "../auth";
import {Redirect} from 'react-router-dom';

 
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      loading: false,
      error: null, 
      initialTab: null,
      recoverPasswordSuccess: null,
      redirectToRefer: false,
      email:"",
      failedSignin:false
    };
  }
  
  onLogin() {
    console.log('__onLogin__');

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (!email || !password) {
      this.setState({
        error: true
      })
    } else {
      this.setState({email:email})
      this.onLoginSuccess(email,password);
    }
  }

  onRegister() {
    console.log('__onRegister__');
    console.log('login: ' + document.querySelector('#login').value);
    console.log('email: ' + document.querySelector('#email').value);
    console.log('password: ' + document.querySelector('#password').value);

    const username = document.querySelector('#login').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (!username || !email || !password) {
      this.setState({
        error: true
      })
    } else {
      this.onRegisterSuccess(email,password,username);
    }
  }


  openModal(initialTab) {
    this.setState({
      initialTab: initialTab
    }, () => {
      this.setState({
        showModal: true,
      })
    });
  }

  onLoginSuccess(email,password, response) {

    signin(email,password)
    .then(data => {
      if(data.toString() === 'statusCode: 404\n') { 
        this.setState({error: true, loading: false})
    }
    else
    {
        //authenticate
        //redirect
        authenticate(data,()=> {
          this.setState({redirectToRefer: true})
          window.location.reload()
          this.closeModal();
        });
    }
    })
    this.setState({
      loggedIn: email,
      loading: false
    })

  }

  onRegisterSuccess(email,password,username, response) {
    signup(email,password,username)
    .then(data => {
      if(data.toString() === 'statusCode: 404\n') { 
        this.setState({error: true, loading: false})
    }
    else
    {
        //authenticate
        //redirect
        authenticate(data,()=> {
            this.setState({redirectToRefer: true})
            window.location.reload()
            this.closeModal();
        });
    }
    })
    this.setState({
      loggedIn: email,
      loading: false
    })

  }


  onLoginFail(method, response) {

    this.setState({
      loading: false,
      error: response
    })
  }

  startLoading() {
    this.setState({
      loading: true
    })
  }

  finishLoading() {
    this.setState({
      loading: false
    })
  }

  afterTabsChange() {
    this.setState({
      error: null,
      recoverPasswordSuccess: false,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }
 
  render() {
    if(this.state.redirectToRefer === true) {
      return <Redirect to="/"/>
    }
    return (
      <div>
         <div className="jumbotron" style={{backgroundImage:`url(${require("../Images/signin.jpg")})`,backgroundSize: "100%"}}>
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
        <div>
          <h1>PLEASE WAIT...</h1>
        </div>
        <ReactModalLogin
          visible={this.state.showModal}
          onCloseModal={this.closeModal.bind(this)}
          loading={this.state.loading}
          error={this.state.error}
          tabs={{
            afterChange: this.afterTabsChange.bind(this)
          }}
          loginError={{
            label: "Couldn't sign in, please try again."
          }}
          registerError={{
            label: "Couldn't sign up, please try again."
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
          form={{
            onLogin: this.onLogin.bind(this),
            onRegister: this.onRegister.bind(this),
            loginBtn: {
              label: "Sign in"
            },
            registerBtn: {
              label: "Sign up"
            },
            loginInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: 'Email',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Password',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: 'Password',
              }
            ],
            registerInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Writer name',
                type: 'text',
                inputClass: 'RML-form-control',
                id: 'login',
                name: 'login',
                placeholder: 'Writer name',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: 'Email',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Password',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: 'Password',
              }
            ]
          }}
        />
      </div>
    );
  }
}

export default SignIn;