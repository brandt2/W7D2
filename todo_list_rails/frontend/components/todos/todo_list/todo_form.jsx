import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }

  updateFormState(field) {
    return (event) => {
      this.setState({ [field]: event.currentTarget.value})
    }
  }

  handleClick(event) {
    const todo = this.state;
    todo.id = Date.now();
    this.props.handleTodo(todo);
  }

  render () {
    return (
      <form action="" onSubmit={e => e.preventDefault()}>
        <input type="text" onChange={this.updateFormState("title")} value={this.state.value} placeholder="title"/>
        <input type="text" onChange={this.updateFormState("description")} value={this.state.value} placeholder="description"/>
        <button onClick={this.handleClick}>Submit</button>
      </form>
    )
  }
}

export default TodoForm