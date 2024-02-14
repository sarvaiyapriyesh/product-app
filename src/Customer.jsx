import React, { Component } from 'react';

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
            { id: 5, name: "John", phone: "781566778", address: { city: "surath" } },
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
                <table class="table table-hopver">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                        </tr>
                        <table class=""></table>
                    </thead>
                    <tbody>
                        {
                            this.state.Customers.map((cust) => {
                                return(
                                    <tr key={cust.id}>
                                        <td>{cust.id}</td>
                                        <td>{cust.name}</td>
                                        <td>{cust.phone}</td>
                                        <td>{cust.address.city}</td>
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
}

export default Customer;