import React from 'react';
import NationalTeamCarousel from '../components/NationalTeamCarousel';

function NationalTeamPage() {
    return (
        <div className="national-team-page">
            <div className="national-team-hero">
                <h1>The National Debating <br /> Team of Sri Lanka</h1>
            </div>
            <NationalTeamCarousel />
        </div>
    )
}
export default NationalTeamPage;