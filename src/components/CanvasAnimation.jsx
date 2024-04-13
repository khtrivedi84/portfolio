import React, { useEffect, useRef } from 'react';

const CanvasAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Add your CanvasAnimation logic here

    }, []);

    return (
        <canvas ref={canvasRef} id="canvas" width={window.innerWidth} height={window.innerHeight}>
            Your browser does not support the HTML5 canvas element.
        </canvas>
    );
}

export default CanvasAnimation;
