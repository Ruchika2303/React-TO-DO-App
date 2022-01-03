import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo APP</h1>
            
        </header>
    )
}

const headerStyle = {
    background: '#0000FF',
    color: '#fff',
    textAlign: 'center',
    padding: '40px'
}



export default Header;