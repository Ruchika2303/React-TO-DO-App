import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            
            padding: '15px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)}style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}



const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '70%',
    cursor: 'pointer',
    float: 'right'
}




export default TodoItem
