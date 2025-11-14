// src/components/ProjectCard.js
import { useState } from 'react';
import Lightbox from './Lightbox';

export default function ProjectCard({ title, role, desc, tech, image, link, gallery = [] }) {
    const [isHovered, setIsHovered] = useState(false);
    const [showLightbox, setShowLightbox] = useState(false);

    return (
        <>
            <div
                style={{
                    ...styles.card,
                    ...(isHovered ? styles.cardHover : {}),
                    cursor: gallery?.length > 1 ? 'zoom-in' : 'default'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => gallery?.length > 1 && setShowLightbox(true)}
            >
                <img src={image} alt={title} style={styles.img} />
                <div style={styles.content}>
                    <h3 style={styles.title}>{title}</h3>
                    <p><strong>Role:</strong> {role}</p>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.5', opacity: 0.9 }}>{desc}</p>
                    <p><strong>Tech:</strong> <span style={{ color: '#00ff9d' }}>{tech}</span></p>
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.button}
                            onClick={(e) => e.stopPropagation()}
                            onMouseEnter={(e) => e.target.style.background = '#00cc7a'}
                            onMouseLeave={(e) => e.target.style.background = '#00ff9d'}
                        >
                            View Project
                        </a>
                    )}
                    {gallery?.length > 1 && (
                        <p style={{
                            margin: '0.75rem 0 0',
                            color: '#00ff9d',
                            fontSize: '0.85rem',
                            fontStyle: 'italic',
                            opacity: 0.8
                        }}>
                            Click card to view {gallery.length} images
                        </p>
                    )}
                </div>
            </div>

            {showLightbox && (
                <Lightbox images={gallery} onClose={() => setShowLightbox(false)} />
            )}
        </>
    );
}

const styles = {
    card: {
        border: '1px solid #333',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 8px 24px rgba(0, 255, 157, 0.15)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    },
    cardHover: {
        transform: 'translateY(-8px)',
        boxShadow: '0 16px 32px rgba(0, 255, 157, 0.25)'
    },
    img: {
        width: '100%',
        height: '240px',
        objectFit: 'cover',
        borderBottom: '2px solid #00ff9d'
    },
    content: {
        padding: '1.75rem',
        color: '#fff'
    },
    title: {
        margin: '0 0 0.5rem',
        fontSize: '1.5rem',
        color: '#00ff9d'
    },
    button: {
        display: 'inline-block',
        marginTop: '1rem',
        padding: '0.65rem 1.5rem',
        background: '#00ff9d',
        color: '#000',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '0.95rem',
        transition: 'all 0.2s ease'
    }
};