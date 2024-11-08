const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");

const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");

// Button for play/pause with icons
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.querySelector('.fa-play');
const pauseIcon = document.querySelector('.fa-pause');

let currentVideoElement = null; // Holds the currently loaded video element

// Function to trigger video file input
const handleInput = () => {
  videoInput.click(); // Open file selection dialog
};

// Function to handle selected video input
const acceptInputHandler = (event) => {
  const selectedVideo = event.target.files[0];
  if (!selectedVideo) return;

  // Create a new video element and set it up
  const videoElement = document.createElement("video");
  videoElement.src = URL.createObjectURL(selectedVideo);
  videoElement.className = "video"; // Set class for styling
  videoElement.controls = true; // Add native video controls

  videoPlayer.innerHTML = ""; // Clear previous video if any
  videoPlayer.appendChild(videoElement);
  currentVideoElement = videoElement; // Update reference to new video

  // Set initial state and behavior
  videoElement.play();
  videoElement.volume = 0.5; // Set initial volume to 50%

  // Sync icons and buttons with video state
  videoElement.addEventListener("play", syncPlayPauseIcon);
  videoElement.addEventListener("pause", syncPlayPauseIcon);
  videoElement.addEventListener("volumechange", syncVolumeIcon);
  videoElement.addEventListener("ratechange", syncSpeedIcon);
};

// Attach event listeners for file selection and video loading
videoBtn.addEventListener("click", handleInput);
videoInput.addEventListener("change", acceptInputHandler);

// Sync play/pause icon with video state
const syncPlayPauseIcon = () => {
  if (currentVideoElement && !currentVideoElement.paused) {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline-block';
  } else {
    playIcon.style.display = 'inline-block';
    pauseIcon.style.display = 'none';
  }
};

// Play/Pause Toggle Logic
playPauseBtn.addEventListener('click', () => {
  if (!currentVideoElement) return; // Ensure video is loaded

  if (currentVideoElement.paused) {
    currentVideoElement.play();
  } else {
    currentVideoElement.pause();
  }
});

speedUp.addEventListener("click", () => {
  if (!currentVideoElement) return;

  const maxSpeed = 2.0; 
  currentVideoElement.playbackRate = Math.min(currentVideoElement.playbackRate + 0.1, maxSpeed);
});

speedDown.addEventListener("click", () => {
  if (!currentVideoElement) return;

  const minSpeed = 0.5; 
  currentVideoElement.playbackRate = Math.max(currentVideoElement.playbackRate - 0.1, minSpeed);
});

volumeUp.addEventListener("click", () => {
  if (!currentVideoElement) return;

  const maxVolume = 1.0; 
  currentVideoElement.volume = Math.min(currentVideoElement.volume + 0.1, maxVolume);
});

volumeDown.addEventListener("click", () => {
  if (!currentVideoElement) return;

  const minVolume = 0.0; 
  currentVideoElement.volume = Math.max(currentVideoElement.volume - 0.1, minVolume);
});

const syncVolumeIcon = () => {
  console.log(`Current volume: ${Math.round(currentVideoElement.volume * 100)}%`);
};

const syncSpeedIcon = () => {
  console.log(`Current playback speed: ${currentVideoElement.playbackRate}x`);
};
