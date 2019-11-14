import React, { useEffect, useState } from 'react'
import Layout from './../Layout'
import './7.css'

export default ({ action, isPaused }) => {
    useEffect(() => {
        setTimeout(() => {
            action('pause')
        }, 1000)
    }, [])
    return <Layout>
        <div style={styles}>
            <h1>Animations are usually independent.</h1>
            <div>
                <p style={{ fontSize: '1.5em', margin: 0, marginTop: 150 }}>Loaders/Spinners</p>
                <p style={{ fontSize: '1.5em', marginTop: 10 }}>Something that you start, and then it runs on its own.</p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                    <div class="spinner1"></div>
                    <div class="spinner2"></div>
                </div>
            </div>
        </div>
    </Layout>
}

const styles = { height: '100%', width: '100%', marginTop: 100, textAlign: 'center' }
