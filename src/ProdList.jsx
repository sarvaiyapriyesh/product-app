import React, { Component } from 'react';
import Product from './Product';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Products List',
            products: [

            ],
        };
    }

    render() {
        return (
            <div>
                <h2>Product list</h2>
                <div className='row'>
                    {this.state.products.map((prod) => {
                        return (
                            <Product key={prod.id} product={prod}
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}>
                                <button type='button' className='btn btn-info'>Buy now</button>
                            </Product>

                        )
                    })}
                </div></div>
        );
    }
    componentDidMount() {
        // console.log("componentDidmount - CustomerLIst");
        var promise = fetch("http://localhost:5000/products", {method: "GET" });
        promise.then((response) => {
            console.log(response);
            
            var promise2 = response.json();
            promise2.then((prods) => {
                console.log(prods);
                this.setState({ products: prods });
            });
        });
    }

    handleIncrement = (product, maxvalue) => {
        var totProducts = [...this.state.products];
        var index = totProducts.indexOf(product);
        if (totProducts[index].quantity < maxvalue) {
            totProducts[index].quantity++;
            this.setState({ products: totProducts });
        }
    }

    handleDecrement = (product, minvalue) => {
        var totProducts = [...this.state.products];
        var index = totProducts.indexOf(product);
        if (totProducts[index].quantity > minvalue) {
            totProducts[index].quantity--;
            this.setState({ products: totProducts });
        }
    }

    handleDelete = (product) => {
        let totProducts = [...this.state.products];
        let index = totProducts.indexOf(product);
        if (window.confirm("are you sure to delete ")) {
            totProducts.splice(index, 1);
            this.setState({ products: totProducts });
        }
    }



}

export default ProductsList;