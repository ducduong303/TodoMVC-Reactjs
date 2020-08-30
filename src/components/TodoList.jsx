import React, { Component } from 'react';

import TodoItem from './TodoItem';
import task from "../assets/image/task.svg"
class TodoList extends Component {
    render() {
        const { todos, removeTodo, checkTodo, editTodo, editOnDone, filterToDo } = this.props


        if (todos.length === 0) {
            return (
                <div>
                    <div className="no-tasks ">
                        <img src={task} width={20} alt="" />
                        No Tasks
                    </div>
                </div>
            )
        }  
        return (
            <div>
                {filterToDo().map((item, index) => {
                    return (
                        <TodoItem
                            todo={item}
                            index={index}
                            key={index}
                            removeTodo={removeTodo}
                            checkTodo={checkTodo}
                            editTodo={editTodo}
                            editOnDone={editOnDone}
                        >
                        </TodoItem>
                    )
                })}
            </div>
        );
      
    }
}

export default TodoList;