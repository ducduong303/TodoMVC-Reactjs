import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import "../assets/css/style.scss";
import TodoList from './TodoList';
import AddToDo from './AddToDo';
import Title from './Title';
import Loading from './Loading';
import CheckAll from './CheckAll';
import Filter from './Filter';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            loading: false,
            beforTodo: "",
            filter: "all",
        }
        this.addToDo = this.addToDo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.checkTodo = this.checkTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.editOnDone = this.editOnDone.bind(this);
        this.checkAll = this.checkAll.bind(this);
        this.remaining = this.remaining.bind(this);
        this.clearToDo = this.clearToDo.bind(this);
        this.filterUpdate = this.filterUpdate.bind(this);
        this.filterToDo = this.filterToDo.bind(this)
    }

    /** ADD Todo */
    addToDo(newTitle) {
        const { todos } = this.state;
        let newTodo = {
            id: uuidv4(),
            title: newTitle,
            completed: false,
            editing: false,
        }
        this.setState({
            loading: true
        })
        setTimeout(() => {
            this.setState({
                loading: false,
                todos: [...todos, newTodo],
            })
        }, 1000)
    }
    /** Remove Todo */
    removeTodo(index) {
        const { todos } = this.state
        const cloneTodo = [...todos]
        cloneTodo.splice(index, 1)
        this.setState({
            loading: true
        })
        setTimeout(() => {
            this.setState({
                loading: false,
                todos: cloneTodo
            })
        }, 1000)
    }

    /** CheckTOdo */
    checkTodo(todo, index, event) {
        const { todos } = this.state
        const cloneTodo = [...todos]
        todo.completed = !todo.completed;
        cloneTodo.splice(index, 1, todo)
        this.setState({
            todos: cloneTodo
        })
    }
    /** Edit todo */
    editTodo(todo, index, event) {
        const { todos } = this.state
        const cloneTodo = [...todos]
        todo.editing = !todo.editing;
        cloneTodo.splice(index, 1, todo)
        this.setState({
            todos: cloneTodo,
            beforTodo: todo.title
        })
    }

    /** Edit Done */
    editOnDone(todo, index, event) {
        const { todos } = this.state
        const cloneTodo = [...todos];
        todo.editing = !todo.editing;
        if (event.target.value.trim().length === 0) {
            alert("Bạn chưa nhập...")
            todo.title = this.state.beforTodo
        } else {
            todo.title = event.target.value
        }
        cloneTodo.splice(index, 1, todo);
        this.setState({
            todos: cloneTodo,
        })
    }
    
    /** Check All */
    checkAll(event) {
        event.persist();
        this.setState((prev, props) => {
            let todos = prev.todos;
            todos.forEach((todo) => todo.completed = event.target.checked)
            return { todos }
        })
    }

    /** Filter remaining */
    remaining() {
        return this.state.todos.filter(todo => !todo.completed).length;
    }

    /** Clear Todo */
    clearToDo() {
        const cloneTodo = [...this.state.todos];
        const clear = cloneTodo.filter(todo => !todo.completed);

        this.setState({
            todos: clear
        })
    }

    /** Filter updater */
    filterUpdate(filter) {
        this.setState({
            filter: filter
        })
    }

    /** filter todos */
    filterToDo() {
        const { filter, todos } = this.state
        if (filter === "all") {
            return todos
        } else if (filter === "active") {
            return todos.filter(todo => !todo.completed)
        } else if (filter === "completed") {
            return todos.filter(todo => todo.completed)
        }
        return todos
    }

    // Lưu local
    componentDidMount() {
        const data = JSON.parse(localStorage.getItem("data"))
        if (data) {
            this.setState({
                todos: data
            })
        }
    }
    componentDidUpdate() {
        const { todos } = this.state
        localStorage.setItem('data', JSON.stringify(todos))
    }
    render() {
        const { todos, loading, filter } = this.state
        return (
            <div className="col-lg-5 col-md-8 col-sm-12 mt-100">
                <Title></Title>
                {loading && <Loading></Loading>}
                <div className="box ">
                    <AddToDo
                        addToDo={this.addToDo}>
                    </AddToDo>
                    <TodoList
                        todos={todos}
                        removeTodo={this.removeTodo}
                        checkTodo={this.checkTodo}
                        editTodo={this.editTodo}
                        editOnDone={this.editOnDone}
                        filterToDo={this.filterToDo}
                    ></TodoList>
                    <CheckAll
                        todos={todos}
                        checkAll={this.checkAll}
                        remaining={this.remaining}
                    ></CheckAll>
                    <Filter
                        todos={todos}
                        clearToDo={this.clearToDo}
                        filterUpdate={this.filterUpdate}
                        filter={filter}
                    ></Filter>
                </div>
            </div>
        );
    }
}

export default Todo;