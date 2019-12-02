import React from 'react'
const RESET_VALUES = {id: '', category: '', price: '', name: ''};
class ProductForm extends React.Component{

    constructor(props) {


        super(props);

        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState((prevState) => {
            prevState.product[name] = value
            return { product: prevState.product }
        })
    }

        handleSave(e) {
            this.props.onSave(this.state.product)
            this.setState({
                product: Object.assign({}, RESET_VALUES), errors: {}
            })
            e.preventDefault(); //Prevent form from triggering HTTP POST
        }
    render() {
        return (
            <form onSubmit={this.handleSave}>
                <label> Name:
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.product.name}/><br />
                </label>
                <label> Category:
                    <input type="text" name="category" onChange={this.handleChange} value={this.state.product.category}/><br />
                </label>
                <label> Price:
                    <input type="text" name="price" onChange={this.handleChange} value={this.state.product.price}/><br />
                </label>
                <input type="submit" value="save"/>
            </form>
            );
    }
}

export default ProductForm