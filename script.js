document.getElementById('videoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    if (file) {
        const url = URL.createObjectURL(file);
        video.src = url;
        video.play();

        video.addEventListener('play', function() {
            console.log('Video is playing');
            const draw = () => {
                if (!video.paused && !video.ended) {
                    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);

                    // Placeholder for ball tracking and tracer drawing
                    context.beginPath();
                    context.arc(320, 180, 5, 0, 2 * Math.PI, false); // Example: Draw a fixed circle at center
                    context.fillStyle = 'red';
                    context.fill();

                    requestAnimationFrame(draw);
                }
            };
            draw();
        }, false);

        video.addEventListener('error', function() {
            console.error('Error loading video');
        }, false);
    } else {
        console.error('No file selected');
    }
});
