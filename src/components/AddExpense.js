import React, { Component } from 'react';

export class AddExpense extends Component {
  state = {
    due: 0,
    place: '',
    debt: 0,
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addExpense(this.state);
    this.setState({
      due: 0,
      place: '',
      debt: 0,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: 'block' }}>
          <div style={{ display: 'flex' }}>
            <input
              type='number'
              name='due'
              placeholder='Due Date'
              style={{ flex: '1', padding: '5px' }}
              value={this.state.due}
              onChange={this.onChange}
            />
            <input
              type='text'
              name='place'
              placeholder='Location'
              style={{ flex: '1', padding: '5px' }}
              value={this.state.place}
              onChange={this.onChange}
            />
            <input
              type='number'
              name='debt'
              placeholder='Debt Amount'
              style={{ flex: '1', padding: '5px' }}
              value={this.state.debt}
              onChange={this.onChange}
            />
          </div>
          <div>
            <button type='submit' className='btn' style={{ width: '100%' }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddExpense;
