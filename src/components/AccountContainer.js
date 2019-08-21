import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state ={
      transactions: [],
      filteredTransaction: ''
    } 
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions').then(res => res.json()).then(json => {this.setState({transactions: json})})
  }

  handleChange = (ev) => {
    event.preventDefault()
    this.setState({filteredTransaction: ev.target.value})
  }

  render() {

    return (
      <div>
        <Search 
        updateSearch={this.updateSearch} 
        filteredTransaction={this.state.filteredTransaction} 
        handleChange={this.handleChange} />

        <TransactionsList  
        filteredTransaction={this.state.filteredTransaction} 
        transactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
