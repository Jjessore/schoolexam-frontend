import React, { Component } from 'react'
import Home from './Home'
import axios from 'axios'
import { withRouter } from './common/with-router';


class Login extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       user:'',
       pwd:'',
       login_success:false
    }
  }

  handleUserChange = (event) => {
    this.setState({
      user: event.target.value
    })
  } 

  handlePwdChange = (event) => {
      this.setState({
        pwd: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    var res = {
      user_name: this.state.user,
      password: this.state.pwd
    }

       
    console.log('User : ' + this.state.user)
    console.log('Password : ' + this.state.pwd)

    //if (this.state.user==='doctor' && this.state.pwd==='doctor')
      //{
          //this.setState({
              //login_clicked:true
          //});
      //}
    //else {
          // alert("wrong credentials")
    //}

    axios
            .post('http://localhost:8080/login',res)
            .then(response => {
                console.log(response)
                alert("Data fetched successfully")
                this.props.router.navigate("/home")
            })
            .catch(error => {
                console.log(error)
            })
  }


 render () {
  if (this.state.login_clicked) {
    return (<div><Home /></div>)
  }
  else {
    return (  
            <div>
            <form className='loginform'>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" autoComplete="off" onChange={this.handleUserChange} value = {this.state.user} required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" onChange={this.handlePwdChange} value={this.state.pwd} required/>
                <button onClick={this.handleSubmit}>Sign In</button>
            </form>
            </div>
  )
  }
 }
}

export default withRouter(Login)