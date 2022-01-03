import React, { Component } from 'react';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: 
        e.target.value });
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ tilte: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    name="title" 
                    style={{ flex: '100', padding: '20px'}}
                    placeholder="Add Task"
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    value="Click to Add"
                    className="btn btn-secondary"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}



export default AddTodo
