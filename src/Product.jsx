import React, { Component } from 'react';

class Product extends Component {
    state = {
        product: this.props.product
    }
    render() {
        return (
            // <div>
            //     <h5>Product componrnts</h5>
            //     {this.props.product.id}
            // </div>
            <div classNameName="card" style={{ "width": "18rem" }}>
                <img src={this.props.product.img} className="card-img-top" alt=".../" />
                <span className='pull-right hand-icon' onClick={() => {
                    this.props.onDelete(this.state.product);
                }}>
                    <i class="fa fa-times"></i>
                </span>
                <div className="card-body">
                    <h5 className="card-title">{this.props.product.pname}</h5>
                    <p className="card-text">{this.props.product.price}</p>
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button"
                            class="btn btn-danger"
                            onClick={() => {
                                console.log("clicked on + symbol")
                                this.props.onIncrement(this.state.product, 5)
                            }}>
                            +
                        </button>
                        <button type="button" class="btn btn-warning">{this.props.product.quantity}</button>

                        <button type="button"
                            class="btn btn-success"
                            onClick={() => {
                                console.log("click on  - symbole")
                                this.props.onDecrement(this.state.product, 0)
                            }}>-</button>
                    </div>
                    <div>{this.props.children}</div>

                </div>


            </div>
        );
    }
}

export default Product;