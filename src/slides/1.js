import React, { useEffect } from 'react'
import Layout from './../Layout'

export default ({ action, isPaused }) => {
    useEffect(() => {
        setTimeout(() => {
            action('pause')
        }, 1000)
    }, [])
    return <Layout>
        <div style={styles}>
            <h1 style={{ fontSize: '3em' }}>Hello, Bengaluru!</h1>
        </div>
    </Layout>
}

const styles = { height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }