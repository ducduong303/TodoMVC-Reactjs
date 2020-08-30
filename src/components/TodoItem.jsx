import React, { Component } from 'react';
import classNames from 'classnames';

import edit from "../assets/image/edit.svg";
import del from "../assets/image/del.svg";
class TodoItem extends Component {
   
    handleRemove(index) {
        this.props.removeTodo(index)
    }
    handleCheck(todo, index, event) {
        this.props.checkTodo(todo, index, event)
    }
    handleEdit(todo, index, event) {
        this.props.editTodo(todo, index, event)
    }
    hadleEditOnDone(todo, index, event) {
        this.props.editOnDone(todo, index, event)
    }
    render() {
        const { todo, index } = this.props
        return (
            <div className="col-12">
                <div className="list-item col-12 ">
                    <div className={!todo.editing ? "align-item col-10" : "align-item col-12"}>
                        <input type="checkbox" checked={todo.completed} id={index} className="add-check" onChange={(event) => this.handleCheck(todo, index, event)}/>
                        {
                            !todo.editing && <label htmlFor={index}
                                className={classNames({ "add-title": true }, { "completed": todo.completed })}>
                                {todo.title}
                            </label>
                        }
                        {
                            todo.editing && <input type="text"
                                className="check-edit "
                                autoFocus
                                defaultValue={todo.title}
                                onBlur={(event) => this.hadleEditOnDone(todo, index, event)}
                                onKeyUp={(event) => event.key === "Enter" ? this.hadleEditOnDone(todo, index, event) : ""}
                            />
                        }
                    </div>
                    {
                        !todo.editing && <div className="align-item col-2">
                            <img
                                className="add-edit"
                                src={edit} alt="***"
                                width={20}
                                onClick={(event) => this.handleEdit(todo, index, event)}
                            ></img>
                            <img
                                className="add-del"
                                src={del} alt="***"
                                width={20}
                                onClick={() => this.handleRemove(index)}
                            ></img>
                        </div>
                    }


                </div>

            </div>


        );
    }
}

export default TodoItem;