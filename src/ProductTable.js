import React, { Component } from 'react'
import ProductRow from "./ProductRow";


class ProductTable extends Component {
    constructor(props) {
        super(props)
        this.handleDestroy = this.handleDestroy.bind(this)
    }

    handleDestroy(id) {
        this.props.onDestroy(id)
    }

    renderTableRows(products){
        const productKeys = Object.keys(products);

        let listOfProducts = [];

        for(let i = 0; i<productKeys.length; i++){
            let product = productKeys[i];
            listOfProducts = listOfProducts.concat(products[product]);
        }


            let rows = [
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
            ];

            for(let i = 0; i<listOfProducts.length; i++){
                if(listOfProducts[i].name === this.props.filterText || this.props.filterText==='') {
                    rows.push(<ProductRow product={listOfProducts[i]} key={listOfProducts[i].id}
                                          onDestroy={this.handleDestroy}/>);
                }}

            return rows;

    }

    render(){
        return(
            <div class="col-md-4">
                <h1>Available Products List</h1>
                <table class="table table-striped">
                    {this.renderTableRows(this.props.productList)}
                </table>
            </div>
        );
    }
}

export default ProductTable