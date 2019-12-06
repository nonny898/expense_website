import React, { Component } from 'react';

export class ExpenseItem extends Component {
  render() {
    const { due, place, debt } = this.props.expense;
    return (
      <tr>
        <td>{due}</td>
        <td>{place}</td>
        <td>{debt}</td>
      </tr>
    );
  }
}

export default ExpenseItem;
