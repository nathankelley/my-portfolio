// src/components/Lightbox.js
import { useState } from 'react';

export default function Lightbox({ images, onClose }) {
    const [index, setIndex] = useState(0);

    if (!images || images.length === 0) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.95)', zIndex: 9999,
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        }} onClick={onClose}>
            <img
                src={images[index]}
                alt={`Project ${index + 1}`}
                style={{ maxWidth: '90%', maxHeight: '70vh', borderRadius: '12px', boxShadow: '0 0 30px rgba(0,255,157,0.3)' }}
                onClick={(e) => e.stopPropagation()}
            />
            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                <button onClick={(e) => { e.stopPropagation(); setIndex(Math.max(0, index - 1)); }}
                    style={btnStyle} disabled={index === 0}>left</button>
                <span style={{ color: '#fff', fontSize: '1.1rem' }}>{index + 1} / {images.length}</span>
                <button onClick={(e) => { e.stopPropagation(); setIndex(Math.min(images.length - 1, index + 1)); }}
                    style={btnStyle} disabled={index === images.length - 1}>right</button>
            </div>
            <button onClick={onClose} style={{ ...btnStyle, marginTop: '1rem', background: '#ff4444' }}>Close</button>
        </div>
    );
}

const btnStyle = {
    background: '#00ff9d', color: '#000', border: 'none', padding: '0.5rem 1rem',
    borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem'
};