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
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                </tr>
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
            <div>
                <h1>Available Products List</h1>
                <p>Showing all available products:</p>
                <table>
                    {this.renderTableRows(this.props.productList)}
                </table>
            </div>
        );
    }
}

export default ProductTable