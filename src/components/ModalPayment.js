import React from 'react';
import Modal from 'react-modal';

class ModalPayment extends React.Component  {

    state={
        hasError: false
    }

    PayBill = (e) => {
        e.preventDefault();
        if (e.target.elements.bill.value.match("^[0-9]+(?:[0-9]{0,2})?$")) {
            const moneyPaid = parseInt(e.target.elements.bill.value);
            this.props.handleMakePayment(true, moneyPaid);
        }
        else {
            this.setState((prevState) => {
                return {
                    hasError : !prevState.hasError
                }
            })
            e.target.elements.bill.value = ' ';
        }
        
    }

    render() {

    return (
        <Modal
            isOpen = {this.props.open}
            onRequestClose = { () => {this.props.handleMakePayment()} }
            contentLabel = "Make a Payment"
            className = "modal">
           
            <h2>Pay Bill</h2>
            {this.state.hasError && <p>Invalid Input</p> }
            <form onSubmit = {this.PayBill}>
                <label>Amount to Pay:</label>
                <input type='text'  name = "bill" />
                
                <button>Pay Bill</button>
                <button onClick= {() => {this.props.handleMakePayment(false)}}>Cancel</button>
            </form>
          
        </Modal>
    );
    }
  
}

Modal.setAppElement('#root');
export default ModalPayment;