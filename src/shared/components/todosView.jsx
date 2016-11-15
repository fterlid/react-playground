import React, { Component } from 'react';
import TodoActions from '../actions/todoActions';

export default class TodosView extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleDelete(e) {
        const id = Number(e.target.dataset.id);

        // Equivalent to 'dispatch(deleteTodo())'
        this.props.deleteTodo(id);
    }

    handleEdit(e) {
        const id = Number(e.target.dataset.id);
        const val = this.props.todos.get(id).text;

        // For cutting edge UX
        let newVal = window.prompt('', val);
        this.props.editTodo(id, newVal);
    }

    render() {
        return (
            <div id="todo-view">
                {
                    this.props.todos.map((todo, index) => (
                        <div key={index}>
                            <span>{todo}</span>
                            <button data-id={index} onClick={this.handleDelete}>
                                X
                            </button>
                            <button data-id={index} onClick={this.handleEdit}>
                                Edit
                            </button>
                        </div>
                    ))
                }
            </div>
        );
    }
}