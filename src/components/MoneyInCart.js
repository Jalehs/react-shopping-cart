import React from 'react';

class MoneyInCart extends React.Component {
     
    render() {
        
        return(
            <div className="moneyInCart">
                {this.props.moneyInCart >= 0 ? (<p>You have ${(this.props.moneyInCart).toLocaleString()} left to spend</p>) :
                (<p>You are now indebt and you owe ${(-this.props.moneyInCart).toLocaleString()}</p>)}
                <button onClick = { () => this.props.handleMakePayment(false) }>Pay Bill</button>
            </div>
        );
    }

}

export default MoneyInCart;