import React from 'react'


class Filters extends React.Component{
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        this.props.onFilter({
            [name]: value
        });
    }


    render() {
      return ( <form >
            <label>
                <input type="text" name="filterText" onChange={this.handleChange}/><br />
                </label>
        </form>)


    }
}

export default Filters;