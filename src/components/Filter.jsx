import React, { Component } from 'react';
import classNames from 'classnames';
class Filter extends Component {

    render() {
        const { todos, clearToDo, filterUpdate, filter } = this.props
        return (
            <div className="col-12 filter-container row">
                <div className="btn-box col-lg-8 col-md-12 col-sm-12">
                    <button className={classNames({ "btn-click": true }, { "active": filter === "all" })} onClick={() => filterUpdate("all")}>All</button>
                    <button className={classNames({ "btn-click": true }, { "active": filter === "active" })} onClick={() => filterUpdate("active")}>Active</button>
                    <button className={classNames({ "btn-click": true }, { "active": filter === "completed"})} onClick={() => filterUpdate("completed")}>Completed</button>
                </div>
                <div className="btn-box col-lg-4 col-md-12 col-sm-12 dlfex-end">
                    {todos.length > 0 && <button className="btn-click" onClick={() => clearToDo()}>Clear</button>}
                </div>

            </div>
        );
    }
}

export default Filter;