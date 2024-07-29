import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/Animation - 1722236546698.json';
import '../../styles/components/full_screen.css'; // Import the CSS file

const FullScreen2 = () => {
    return (
        <div className="fullscreen-container">
            <Lottie 
                animationData={animationData} 
                className="lottie-animation" 
            />
        </div>
    );
}

export default FullScreen2;
