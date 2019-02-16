import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddProduct extends Component {

    isButtonDisabled = () => {
        if (this.props.newProduct.tittle === '' ||
            this.props.newProduct.category === '' ||
            this.props.newProduct.brand === '' ||
            this.props.newProduct.color === '') {
            return 'disabled ui primary button';
        } else {
            return 'ui primary button';
        }
    }

    render() {
        return (
            <div>
                <h2 className="ui header">Add Product</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Category</label>
                        <input placeholder="Category" name="category" value={this.props.newProduct.category} onChange={this.props.onInputChange} required />
                        {this.props.newProduct.category === '' ? <div className="ui red pointing basic label">Please enter a Category</div> : null}
                    </div>
                    <div className="field">
                        <label>Title</label>
                        <input placeholder="Title" name="title" value={this.props.newProduct.title} onChange={this.props.onInputChange} required />
                        {this.props.newProduct.title === '' ? <div className="ui red pointing basic label">Please enter a Title</div> : null}
                    </div>
                    <div className="field">
                        <label>Brand</label>
                        <input placeholder="Brand" name="brand" value={this.props.newProduct.brand} onChange={this.props.onInputChange} required />
                        {this.props.newProduct.brand === '' ? <div className="ui red pointing basic label">Please enter a Brand</div> : null}
                    </div>
                    <div className="field">
                        <label>Color</label>
                        <input placeholder="Color" name="color" value={this.props.newProduct.color} onChange={this.props.onInputChange} required />
                        {this.props.newProduct.color === '' ? <div className="ui red pointing basic label">Please enter a Color</div> : null}
                    </div>
                    <div><button className={this.isButtonDisabled()} onClick={this.props.onProductAdd}>Submit</button></div>
                </form>
            </div>
        )
    }

}

// connecting state to props, so we can read state using this.props.XXX 
const mapStateToProps = state => {
    return {
        newProduct: state.newProduct,
        list: state.productsList
    }
}

// mapping dispatch functions so we can call actions and pass data to those actions.
const mapDispatchToProps = dispatch => {
    return {
        onInputChange: (event) => {
            return dispatch({ type: 'INPUTCHANGE', event: event })
        },
        onProductAdd: (event) => {
            return dispatch({ type: 'ADDPRODUCT', event: event })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
