import React from "react";
import { connect } from "react-redux";
import { addTodo, edit, clear } from "../actions/actions";
import uuid from "uuid"
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  add = () => {
    this.props.add({ text: this.state.text, complete: false , id : uuid() })
    this.setState({text : ""})
  }
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.todoToUpdate);
}
update = () => {
    this.props.editTodo({
        text: this.state.text,
        complete : this.props.todoToUpdate.complete,
        id: this.props.todoToUpdate.id
      });
      this.setState({
          text : ""
      })
    this.props.clearInput()
}
  render() {
    return (
      <div>
        <div className="header">
          <h1>To-Do App!</h1>
          <label> Add New To-Do </label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button
            className="button-add"
            onClick={
              this.props.todoToUpdate
                ? this.update
                : this.add
                    
            }
          >
            {this.props.todoToUpdate ? "Update" : "Add"}
          </button>
        </div>
        <div className="title">
          <h1>Let's get some work done </h1>
        </div>
      </div>
    );
  }
}
const mapDispatchToprops = dispatch => {
  return {
    add: x => dispatch(addTodo(x)),
    editTodo: el => dispatch(edit(el)),
    clearInput : () => dispatch(clear())
  };
};
const mapStateToProps = state => {
  return {
    todoToUpdate: state.todosReducer.todoToEdit
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(Input);
