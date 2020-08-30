import React, { Component } from 'react';

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            newTodo: event.target.value
        })

    }
    handleSubmit(event) {
        event.preventDefault()
        if(this.state.newTodo===""){
            alert("Bạn chưa nhập note...")
            return;
        }
        this.props.addToDo(this.state.newTodo)
        this.setState({
            newTodo: ""
        })
    }
    render() {
        return (
            <div className="header col-12 ">
                <form className="col-12" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="add-input col-12"
                        placeholder="What needs to be done?"
                        value={this.state.newTodo}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}

export default AddToDo;