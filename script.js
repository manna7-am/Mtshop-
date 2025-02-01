// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('download-form');
    const videoUrlInput = document.getElementById('video-url');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const videoUrl = videoUrlInput.value;

        if (validateYouTubeUrl(videoUrl)) {
            fetchVideo(videoUrl);
        } else {
            alert('Please enter a valid YouTube URL.');
        }
    });

    function validateYouTubeUrl(url) {
        const regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
        return regex.test(url);
    }

    function fetchVideo(url) {
        // Simulate a server request
        console.log(`Fetching video from URL: ${url}`);

        // Simulate server response
        setTimeout(() => {
            const videoBlob = new Blob(["Video content"], { type: 'video/mp4' });
            const videoUrl = URL.createObjectURL(videoBlob);
            downloadVideo(videoUrl);
        }, 2000);
    }

    function downloadVideo(videoUrl) {
        const a = document.createElement('a');
        a.href = videoUrl;
        a.download = 'video.mp4';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(videoUrl);
    }
});
