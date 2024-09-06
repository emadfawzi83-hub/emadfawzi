const apiKey = 'YOUR_YOUTUBE_API_KEY'; // استبدلها بمفتاح API الخاص بك
const channelId = 'UC9KbWJjbNcBm4OIfjYATkmA'; // معرف قناتك

async function fetchYouTubeVideos() {
    const response = await fetch(https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=10);
    const data = await response.json();
    const videoContainer = document.getElementById('youtube-videos');

    data.items.forEach(item => {
        const videoId = item.id.videoId;
        const videoTitle = item.snippet.title;

        const videoElement = document.createElement('div');
        videoElement.innerHTML = `
            <iframe width="300" height="200" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
            <p>${videoTitle}</p>
        `;
        videoContainer.appendChild(videoElement);
    });
}

fetchYouTubeVideos();