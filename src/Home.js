import React from 'react'
import './App.css';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>

            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/IgAnj6r1O48?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/0GZSfBuhf6Y?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/b7FNvq11CEw?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
        </Container>

    );
};

export default Home



