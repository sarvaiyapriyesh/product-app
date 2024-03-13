import React, { Component } from 'react';
import "./index.css"
import { NavLink } from 'react-router-dom';

class Customer extends Component {
    state = {
        pageTitle: "Customer Data",
        count: 99,
        Customers: [
            {
                id: 1,
                name: "vijay", phone: "123456890",
                address: { city: "New Delhi" }
            },
            {
                id: 2,
                name: "ajith", phone: "9820149090", address: { city: "Bangalore" }
            },
            { id: 3, name: "mahesh", phone: "889000921", address: { city: "London" } },
            { id: 4, name: "aamir khan", phone: "552967601", address: { city: "indore" } },
            { id: 5, name: "John", phone: "", address: { city: "surath" } },
        ]
    }
    render() {
        return (
            <div>
                <h2>
                    {this.state.pageTitle}
                </h2>
                <button type="button" class="btn btn-primary" onClick={this.changeCount}>
                    Customers count is  <span class="badge text-bg-secondary">
                        {this.state.count}
                    </span>
                </button>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">NewPassword</th>
                        </tr>
                        <table class=""></table>
                    </thead>
                    <tbody>
                        {
                            this.state.Customers.map((cust) => {
                                return (
                                    <tr key={cust.id}>
                                        <td>{cust.id}</td>
                                        <td className={this.customerNameStyle(cust.name)}>{cust.name}</td>
                                        <td>
                                            {cust.phone ? (cust.phone) : "Not available"}
                                        </td>
                                        <td>{cust.address.city}</td>
                                        <td>{cust.NewPassword}</td>
                                        <td>
                                            <NavLink to ={`/UpdateCustomer/${cust.id}`}>UPDATE</NavLink>
                                        </td>

                                    </tr>
                                );
                            }
                            )
                        }

                    </tbody>
                </table>

            </div>
        );
    }
    changeCount = () => {
        this.setState({ count: 100 })
    }
    customerNameStyle= (custName) => {
        if (custName.startsWith("s"))return "green-highlight border-left";
        else if (custName.startsWith("j"))return "red-highlight border-right";
        else return "";
    }
    componentDidMount=async()=>{
        var response =await fetch("http://localhost:5000/users",{method:"GET"});
        var users=await response.json();
        console.log(users);
        this.setState({customers:users})
    }
}

export default Customer;