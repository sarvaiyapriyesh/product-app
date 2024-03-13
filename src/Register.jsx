import React, { Component } from 'react';

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            Fname:"",
            Lname:"",
            E_mail:"",
            Phone:"",
            NewPassword:"",
            correctPassword:"",
        }

    }
    render() {
        return (
            <div>
                <form>
                    <h3>Register Form</h3>
                    <div class="mb-3">
                        <label for="exampleInputEmail1"
                            class="form-label">
                            Fname
                        </label>
                        <input type="Text"
                            class="form-control"
                            id="Fname"
                            aria-describedby="fnamelHelp" 
                            value={this.state.Fname}
                            onChange={(event) => {
                                this.setState({ Fname: event.target.value })
                            }} />
                        <label for="lname"
                            class="form-label">
                            Lname
                        </label>
                        <input type="Text"
                            class="form-control"
                            id="lname"
                            aria-describedby="lnamelHelp"
                            value={this.state.Lname}
                            onChange={(event) => {
                                this.setState({ Lname: event.target.value })
                            }} />
                         <label for="E-mail"
                            class="form-label">
                            E_mail
                        </label>
                        <input type="Text"
                            class="form-control"
                            id="E-mail"
                            aria-describedby="emaillHelp"
                            value={this.state.E_mail}
                            onChange={(event) => {
                                this.setState({ E_mail: event.target.value })
                            }} />
                        <label for="lname"
                            class="form-label">
                            PhoneNumber:-
                        </label>
                        <input type="Text"
                            class="form-control"
                            id="lname"
                            aria-describedby="lnamelHelp"
                            value={this.state.phone}
                            onChange={(event) => {
                                this.setState({ phone: event.target.value })
                            }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">NewPassword</label>
                        <input type="text" class="form-control" id="pwd" 
                        value={this.state.NewPassword}
                        onChange={(event) => {
                            this.setState({ NewPassword: event.target.value })
                         }} />
                    </div>
                    <button type="submit" class="btn btn-primary"  onClick={this.onSubmitClick} >Submit</button>
                </form>

            </div>
        );
    }

    onSubmitClick =async(event) =>{
        event.preventDefault();
        var customer ={
            Fname:this.state.Fname,
            Lname:this.state.Lname,
            E_mail:this.state.E_mail,
            phone:this.state.phone,
            NewPassword:this.state.NewPassword
        };
        var response=await fetch("http://localhost:5000/users",
                                    {method:"POST",
                                     body:JSON.stringify(customer),
                                     headers:{"content-type":"application/json"}   
                                    });
        var body =response.json();
        console.log(body);
    }
}

export default Register;