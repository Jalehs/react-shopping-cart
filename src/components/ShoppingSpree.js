import React from 'react';
import Header from './Header'
import MoneyInCart from './MoneyInCart';
import AddItem from './AddItem';
import Table from './Table';
import ModalPayment from './ModalPayment';

class ShoppingSpree extends React.Component {
    state = {
      limits:5000,
      openModalPayment : false,
        totalSpent : 0,
        products : [
            {
              item: 'Camera',
              price: 500
            },
            {
              item: 'Shoes',
              price: 150
            },
            {
              item: 'Hand Bag',
              price: 700
            },
            {
              item: 'Smart Phone',
              price: 1200
            },
            {
              item: 'Sweater',
              price: 120
            },
            {
              item: 'Watch',
              price: 600
            },
            {
              item: 'Headphones',
              price: 300
            },
            {
              item: 'Book',
              price: 20
            },
            {
              item: 'Ring',
              price: 3000
            }
        ],
        items : [],
        moneyInCart : 5000,
    }

    handleMakePayment = (payment = true, moneyPaid) => {
      if (payment) {
        this.setState((prevState) => {
          return {
            moneyInCart: prevState.moneyInCart += moneyPaid,
            openModalPayment : !prevState.openModalPayment
          }
          
        })
      }
      else {
        this.setState((prevState) => {
          return {
            openModalPayment : !prevState.openModalPayment
          }
          
        })
       
      }
    }
    handleRemoveOption = (index) => {
     this.setState((prevState) => {
          return {
            items: prevState.items.filter((row, i) => i !== index),
            totalSpent : prevState.totalSpent -= prevState.items[index].cost,
            moneyInCart : prevState.moneyInCart +=  prevState.items[index].cost
            
          }
      
      });
    }
    handleAddOption = (item, num) => {   
      let index = this.state.items.findIndex(element =>element.name === item[0]);
      this.setState((prevState) => { 
        if (index === -1 ) {
          return {
            items: prevState.items.concat({quantity : num, name : item[0], price : item[1], cost : (num * item[1])}),
            totalSpent : prevState.totalSpent += (num * item[1]),
            moneyInCart : prevState.moneyInCart -= (num * item[1])
          } 
        }
        else {
          prevState.items[index].quantity += num;
          prevState.items[index].cost += num * item[1];
          return { 
            items :prevState.items,
            totalSpent : prevState.totalSpent += (num * item[1]),
            moneyInCart : prevState.moneyInCart -= (num * item[1])
          } 
        }
    });
  } 

  render() {
     
      return (
          <div className="wrapper">
              <Header />
              <MoneyInCart open ={this.state.openModalPayment} totalSpent = {this.state.totalSpent}      
              handleMakePayment = {this.handleMakePayment}   
              limits = {this.state.limits} moneyInCart = {this.state.moneyInCart}/>
              <Table items = {this.state.items} totalSpent = {this.state.totalSpent}
              handleRemoveOption = {this.handleRemoveOption} />
              <AddItem  products = {this.state.products} handleAddOption = {this.handleAddOption} />
              <ModalPayment open ={this.state.openModalPayment} handleMakePayment = {this.handleMakePayment}  />
          </div>
      );
  }

}

export default ShoppingSpree;