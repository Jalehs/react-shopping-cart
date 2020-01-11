import React from 'react';

class AddItem extends React.Component {

    SelectedItem() {
        const options = this.props.products.map((item , i) => <option key={i}>{item.item} : {item.price} </option>)
        return <select name="product">{options}</select>
    }

    handelAddItem = (e) => {
         e.preventDefault();
        const item = e.target.elements.product.value.split(":");
        const num = parseInt(e.target.elements.quantity.value);
        this.props.handleAddOption(item,num);
        e.target.elements.quantity.value = 1;
    }
    
    render() {
        return(
            <form className ="addItem" onSubmit = {this.handelAddItem}>
                <div>
                    <label>Selected Items: </label>  {this.SelectedItem()}
                </div>
                <div>
                    <label> Quantity: </label>
                    <input type='number'  name = "quantity" defaultValue = '1'/>
                </div>
                <button type="submit">Add Item</button>
            </form>

        );
    }
}
export default AddItem;