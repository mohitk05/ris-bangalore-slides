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
            <h1>Breaking down the UI</h1>
            <img src="breaking_down.png" style={{ width: 600 }}></img>
        </div>
    </Layout>
}

const styles = { height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }
