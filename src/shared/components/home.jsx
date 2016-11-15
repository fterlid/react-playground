import React, { Component } from 'react';
import TodosView from './todosView';
import TodosForm from './todosForm';
import * as TodoActions from '../actions/todoActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({ todos: state.todos }))
class Home extends Component {
    static get needs() {
        return [TodoActions.getTodos];
    }

    render() {
        const { todos, dispatch } = this.props;

        return (
            <div id="todo-list">
                <TodosView
                    todos={todos}
                    {...bindActionCreators(TodoActions, dispatch)}
                />
                <TodosForm
                    {...bindActionCreators(TodoActions, dispatch)}
                />
            </div>
        );
    }
}

export default Home;