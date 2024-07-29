import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/Animation - 1722236443722.json';
import '../../styles/components/full_screen.css'; // Import the CSS file

const FullScreen = () => {
    return (
        <div className="fullscreen-container">
            <Lottie 
                animationData={animationData} 
                className="lottie-animation" 
            />
        </div>
    );
}

export default FullScreen;
