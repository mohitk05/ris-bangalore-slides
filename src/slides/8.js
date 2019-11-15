import React, { useEffect } from 'react'
import Layout from './../Layout'

export default ({ action }) => {
    useEffect(() => {
        setTimeout(() => {
            action('pause')
        }, 1000)
    }, [])
    return <Layout>
        <div style={styles}>
            <h1>But here, there's a lot of interdependence between user actions and the animation.</h1>
        </div>
    </Layout>
}

const styles = { height: '100%', width: '60%', margin: 'auto', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }
