import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            msg: ""
        }
    }
    render() {
        return (
            <div className='container'>
                <form>
                    <h3>Login here</h3>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label" >user Name</label>
                        <input type="text"
                            class="form-control"
                            id="uname"
                            aria-describedby="emailHelp"
                            value={this.state.username}
                            onChange={(event) => {
                                this.setState({ username: event.target.value })
                            }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="text"
                            class="form-control"
                            id="pwd"
                            value={this.state.password}
                            onChange={(event) => {
                                this.setState({ password: event.target.value })
                            }}
                        />
                    </div>
                    <div className='btn btn-submit'>
                    <button type="submit"
                     class="btn btn-primary" 
                     onClick={this.onLoginClick}>Submit</button> 
                     <button type='Register' className='btn btn-primary'><a href="Register.jsx"></a>Register</button>
                     </div>
                     <h2>{this.state.msg}</h2>
                </form>
            </div>
        );
    }
    onLoginClick = async(event) => {
        event.preventDefault();

        var response = await fetch(`http://localhost:5000/users/?username=${this.state.username}&password=${this.state.password}`,{method:"GET"})
        var body =await response.json();
        if (body.length>0){
            this.setState({msg:"valid password"})
            this.props.updateIsLoggedInStatus(true);
        }
        else{
            this.setState({msg:"invalid password"})
        }
        
    }
}

export default Login;