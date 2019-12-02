import React from 'react'
import Filters from "./Filters";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";

class Product extends  React.Component{
    constructor(){
        super();
        this.state = {
            productList : [
                {
                    id:0,
                    name: "Pursuit of happyness",
                    category: "Books",
                    price: "459.99"},
                {
                    id:1,
                    name: "Wolfs",
                    category: "Videos",
                    price: "3999"},
                {
                    id:2,
                    name: "Counter Strike",
                    category: "Games",
                    price: "11999"},
                {
                    id:3,
                    name: "Chase Master",
                    category: "Utility",
                    price: "199"},
                {
                    id:4,
                    name: "Cricket",
                    category: "Sports",
                    price: "13"},
                {
                    id:5,
                    name: "Naruto",
                    category: "Anime",
                    price: "120"}],
            filterText:''
        };

        this.handleDestroy = this.handleDestroy.bind(this);
        this.handleFilter = this.handleFilter.bind(this)
        this.handleSave = this.handleSave.bind(this);
    }

    handleSave(productsingle) {
        if (!productsingle.id) {
            productsingle.id = new Date().getTime()
        }
        this.setState((prevState) => {
            let products = prevState.productList
            products[productsingle.id] = productsingle
            return { products }
        });
    }
    handleFilter(filterInput) {
        this.setState(filterInput)
    }
    handleDestroy(productId) {
        this.setState((prevState) => {
            let products = prevState.productList
            delete products[productId]
            return { products }
        })
    }
    render() {
        return(<div><h1>My Inventory</h1>
            <div> <Filters onFilter={this.handleFilter}/>
                <ProductTable productList = {this.state.productList} onDestroy={this.handleDestroy} filterText={this.state.filterText}/>
                <ProductForm onSave={this.handleSave} onDestroy={this.handleDestroy}/></div>
        </div>);
    }
}

export default Product