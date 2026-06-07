import React from 'react';
import BoardCarousel from '../components/BoardCarousel';

function BoardPage() {
    return (
        <div className="board-page">
            <div className="board-hero">
                <h1>Leadership of the Debaters' Council</h1>
            </div>
            <BoardCarousel />
        </div>
    );
}

export default BoardPage;
