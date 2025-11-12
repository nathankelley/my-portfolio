// src/components/ProjectCard.js
export default function ProjectCard({ title, role, desc, tech, image, link }) {
    return (
        <div style={styles.card}>
            <img src={image} alt={title} style={styles.image} />
            <div style={styles.content}>
                <h3>{title}</h3>
                <p><strong>Role:</strong> {role}</p>
                <p>{desc}</p>
                <p><strong>Tech:</strong> {tech}</p>
                {link && <a href={link} target="_blank" rel="noopener noreferrer" style={styles.button}>View Project</a>}
            </div>
        </div>
    );
}

const styles = {
    card: {
        border: '1px solid #333', borderRadius: '12px', overflow: 'hidden',
        background: '#222', width: '340px', boxShadow: '0 4px 12px rgba(0,255,157,0.2)'
    },
    img: { width: '100%', height: '200px', objectFit: 'cover' },
    content: { padding: '1.5rem', color: '#fff' },
    button: {
        display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem',
        background: '#00ff9d', color: '#000', borderRadius: '6px', textDecoration: 'none'
    }
};