// src/components/Header.js

import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style = { styles.header }>
            <h1>Nathan Kelley</h1>
            <nav>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/about" style={styles.link}>About</Link>
                <Link to="/projects" style={styles.link}>Projects</Link>
                <Link to="/blog" style={styles.link}>Blog</Link>
                <Link to="/blog-dashboard" style={styles.link}>Dashboard</Link>
            </nav>
        </header>
    );
}

const styles = {
    header: {
        background: '#1a1a1a', color: '#fff', padding: '1rem 2rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
    },
    link: { color: '#00ff9d', margin: '0 1rem', textDecoration: 'none', fontWeight: 'bold' }
};