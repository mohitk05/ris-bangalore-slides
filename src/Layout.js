import React from 'react'

export default props => {
    let obj = { background: 'white', color: '#16161d' }
    const mode = window.location.search.split('=')[1]
    if (mode === 'dark') obj = { background: 'black', color: 'white' }
    return <div style={{ width: '100%', height: '100%', ...obj }}>
        {props.children}
        <div style={{ fontSize: '1.2em', display: 'flex', position: 'absolute', bottom: 10, left: 0, right: 0, justifyContent: 'space-between', width: '92%', margin: 'auto', opacity: 0.6 }}>
            <p>github.com/mohitk05</p>
            <p>twitter.com/mohitkarekar</p>
        </div>
    </div>
}