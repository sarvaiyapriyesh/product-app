import React, { Component } from 'react';

class UpdateCustomer extends Component {
    constructor(props){
        super(props);
        this.state={
            id:"",
            name:"",
            phone:"",
            address:"",
            NewPassword:""
        }
    }
    render() {
        return (
            <div>
                <form>
                    <h3>Register Form</h3>
                    <div class="mb-3">
                        <label for="exampleInputname"
                            class="form-label">
                            name
                        </label>
                        <input type="Text"
                            class="form-control"
                            id="name"
                            aria-describedby="namelHelp" 
                            value={this.state.name}
                            onChange={(event) => {
                                this.setState({ name: event.target.value })
                            }} />
                        <label for="phone"
                            class="form-label">
                            phone
                        </label>
                        <input type="Text"
                            class="form-control"
                            id="phone"
                            aria-describedby="phonelHelp"
                            value={this.state.phone}
                            onChange={(event) => {
                                this.setState({ phone: event.target.value })
                            }} />
                         <label for="add"
                            class="form-label">
                            Address
                        </label>
                        <input type="Text"
                            class="form-control"
                            id="address"
                            aria-describedby="addHelp"
                            value={this.state.address}
                            onChange={(event) => {
                                this.setState({ address: event.target.value })
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
}

export default UpdateCustomer;