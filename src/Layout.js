import React from 'react'

export default props => {
    return <div style={{ width: '100%', height: '100%', background: 'black', color: 'white' }}>
        {props.children}
        <div style={{ display: 'flex', position: 'absolute', bottom: 10, left: 0, right: 0, justifyContent: 'space-between', width: '94%', margin: 'auto', opacity: 0.6 }}>
            <p>github.com/mohitk05</p>
            <p>twitter.com/mohitkarekar</p>
        </div>
    </div>
}