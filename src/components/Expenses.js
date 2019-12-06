import React, { Component } from 'react';
import uuid from 'uuid';
import ExpenseItem from './ExpenseItem';
import AddExpense from './AddExpense';

export class Expenses extends Component {
  state = {
    expenses: [
      {
        id: uuid.v4(),
        due: 3,
        place: 'KTC (Visa)',
        debt: 8432.65,
      },
      {
        id: uuid.v4(),
        due: 3,
        place: 'KCC (AIA)',
        debt: 12640.0,
      },
      {
        id: uuid.v4(),
        due: 3,
        place: 'NIDA',
        debt: 6450.0,
      },
    ],
  };
  addExpense = (e) => {
    const newExpense = {
      id: uuid.v4(),
      due: e.due,
      place: e.place,
      debt: e.debt,
    };
    this.setState({
      expenses: [...this.state.expenses, newExpense],
    });
  };
  render() {
    return (
      <div>
        <AddExpense addExpense={this.addExpense} />
        <table>
          <thead>
            <tr>
              <th>Due Date</th>
              <th>Place</th>
              <th>Debt Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.expenses.map((expense) => (
              <ExpenseItem key={expense.id} expense={expense} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Expenses;
