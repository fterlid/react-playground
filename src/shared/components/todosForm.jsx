import React, { Component } from 'react';

export default class TodosForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        let node = this.refs['todo-input'];
        this.props.createTodo(node.value);

        node.value = '';
    }

    render() {
        return (
            <div id="todo-form">
                <input type="text" placeholder="type todo" ref="todo-input" />
                <input type="submit" value="OK!" onClick={this.handleSubmit} />
            </div>
        );
    }
}