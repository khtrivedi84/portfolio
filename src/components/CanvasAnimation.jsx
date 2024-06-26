import React, { useEffect, useRef } from 'react';

const CanvasAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let can_w = canvas.width;
        let can_h = canvas.height;
        const BALL_NUM = 15;
        const R = 2;
        let balls = [];
        let animationFrameId;

        const ball_color = {
            r: 207,
            g: 255,
            b: 4
        };

        // Defined with initial position offscreen to prevent flash of unstyled content
        const mouse_ball = {
            x: -100,
            y: -100,
            vx: 0,
            vy: 0,
            r: R,
            alpha: 1,
            phase: 0,
            type: 'mouse'
        };

        balls.push(mouse_ball); // This keeps the mouse_ball always in the array

        function handleMouseMove(event) {
            mouse_ball.x = event.clientX;
            mouse_ball.y = event.clientY;
        }

        function randomNumFrom(min, max) {
            return Math.random() * (max - min) + min;
        }

        function randomSidePos(length) {
            return Math.ceil(Math.random() * length);
        }

        function getRandomSpeed(pos) {
            const min = -1, max = 1;
            switch (pos) {
                case 'top': return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
                case 'right': return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
                case 'bottom': return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
                case 'left': return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
                default: return [0, 0];
            }
        }

        function getDisOf(b1, b2) {
            const delta_x = Math.abs(b1.x - b2.x);
            const delta_y = Math.abs(b1.y - b2.y);
            return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
        }

        function getRandomBall() {
            const positions = ['top', 'right', 'bottom', 'left'];
            const pos = positions[Math.floor(Math.random() * positions.length)];
            return {
                x: randomSidePos(can_w),
                y: pos === 'top' ? -R : can_h + R,
                vx: getRandomSpeed(pos)[0],
                vy: getRandomSpeed(pos)[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            };
        }

        function renderBalls() {
            balls.forEach(ball => {
                ctx.fillStyle = `rgba(${ball_color.r},${ball_color.g},${ball_color.b},${ball.alpha})`;
                ctx.beginPath();
                ctx.arc(ball.x, ball.y, R, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
            });
        }

        function updateBalls() {
            balls.forEach(ball => {
                ball.x += ball.vx;
                ball.y += ball.vy;
        
                if (ball.x < -R) ball.x = can_w + R;
                else if (ball.x > can_w + R) ball.x = -R;
        
                if (ball.y < -R) ball.y = can_h + R;
                else if (ball.y > can_h + R) ball.y = -R;
        
                ball.phase += 0.03;
                ball.alpha = Math.abs(Math.cos(ball.phase));
            });
        }

        function renderLines() {
            balls.forEach((ball, index) => {
                for (let j = index + 1; j < balls.length; j++) {
                    const fraction = getDisOf(ball, balls[j]) / 260;
                    if (fraction < 1) {
                        const alpha = (1 - fraction).toString();
                        ctx.strokeStyle = `rgba(150,150,150,${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(ball.x, ball.y);
                        ctx.lineTo(balls[j].x, balls[j].y);
                        ctx.stroke();
                    }
                }
            });
        }

        function initBalls() {
            for (let i = 0; i < BALL_NUM; i++) {
                balls.push(getRandomBall());
            }
        }

        function handleResize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            can_w = canvas.width;
            can_h = canvas.height;
        }

        function animate() {
            ctx.clearRect(0, 0, can_w, can_h);
            renderBalls();
            renderLines();
            updateBalls();
            animationFrameId = requestAnimationFrame(animate);
        }

        initBalls();
        animate();

        canvas.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%' }} />;
};

export default CanvasAnimation;
