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
            <div style={{ width: 300 }}>
                <h1 style={{ fontSize: '2em' }}>Last year I got an idea.</h1>
                <h1 style={{ fontSize: '2em' }}>Stories.</h1>
                <h1 style={{ fontSize: '2em' }}>Let me build this in React.</h1>
            </div>
            <video muted autoPlay src="vid.mp4" style={{ width: 300, marginLeft: 50 }} />
        </div>
    </Layout>
}

const styles = { height: '100%', width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }
