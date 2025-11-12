// src/pages/About.js
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
    return (
        <div style={{ background: '#0f0f0f', color: '#fff', minHeight: '100vh' }}>
            <Header />
            <div style={{ padding: '4rem 10%', maxWidth: '900px', margin: '0 auto' }}>
                <h2>About Me</h2>
                <p style={{ fontSize: '1.4rem', lineHeight: '1.8' }}>
                    I’m a game producer, developer, creative collaborator, and storyteller
                    with experience bringing innovative games to life—from hellish repair puzzles
                    to narrative text adventures. I thrive at the intersection of vision and execution.
                </p>
                <p>
                    Currently pursuing my Master’s in Game Production from the University of Utah.
                    Previously shipped titles in C++, Unity, and Unreal Engine 5.
                    Always looking for the next team to help ship something unforgettable and inspiring.
                </p>
            </div>
            <Footer />
        </div>
    );
}