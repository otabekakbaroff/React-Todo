import React from 'react';

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      toDO: ''
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      toDO: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.toDO);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="item"
          value={this.state.toDO}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;
