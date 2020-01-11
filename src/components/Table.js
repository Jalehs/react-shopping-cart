import React from 'react';

class Table extends React.Component {
    
    renderTableHeader = () =>{
        return ( 
        <tr>
            <th>Quantity</th>
            <th>Item</th>
            <th>UnitCost</th>
            <th colSpan = '2'>Total Cost</th>
        </tr>  
        );
    }
    renderTableData = (arr) =>{
        return (
        arr.map((item,i) =>
        <tr key={i}>
            <td>{item.quantity}</td>
            <td>{item.name}</td>
            <td>${item.price.toLocaleString()}</td>
            <td>${item.cost.toLocaleString()}</td>
            <td><button onClick = {() => this.props.handleRemoveOption(i)}>Remove Item</button></td>
        </tr>)
        );
    }

    renderTableFooter =() =>{
        return  (
        <tr>
          <td colSpan = '3'> Total:</td>
          <td colSpan = '2'>${this.props.totalSpent.toLocaleString()}</td>
        </tr>
        );
    }

    renderTable = () => {
        return (
            <table>
                <thead>{this.renderTableHeader()}</thead>
                <tbody>{this.renderTableData(this.props.items)}</tbody>
                <tfoot>{this.renderTableFooter()}</tfoot>
            </table>
        );
    }


    render() {
        return(
            <div className="shoppingTable">
                {(this.props.items && this.props.items.length > 0) ? this.renderTable() : <p>Add Some Items</p>}
            </div>

        );
    }
}
export default Table;