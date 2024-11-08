
const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");

const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");

let currentVideoElement; // Stores reference to the currently playing video

const handleInput = () => {
  videoInput.click(); // Trigger file selection dialog for user
};

const acceptInputHandler = (event) => {
  const selectedVideo = event.target.files[0];

  if (!selectedVideo) {
    return; // Handle potential errors or empty file selection
  }

  const videoElement = document.createElement("video");
  videoElement.src = URL.createObjectURL(selectedVideo);
  videoElement.className = "video"; // Set the class for styling

  videoPlayer.appendChild(videoElement);

  currentVideoElement = videoElement; // Update reference to the new video

  videoElement.play();
  videoElement.volume = 0.3; // Set initial volume

  videoElement.addEventListener("loadedmetadata", () => {
    // Video metadata loaded (optional: handle duration, etc.)
  });
};

videoBtn.addEventListener("click", handleInput);
videoInput.addEventListener("change", acceptInputHandler);

speedUp.addEventListener("click", () => {
  if (!currentVideoElement) {
    return; // Handle potential errors: No video loaded
  }

  const maxSpeed = 2.0; // Set a reasonable maximum playback rate
  currentVideoElement.playbackRate = Math.min(currentVideoElement.playbackRate + 0.1, maxSpeed);
});

speedDown.addEventListener("click", () => {
  if (!currentVideoElement) {
    return; // Handle potential errors: No video loaded
  }

  const minSpeed = 0.5; // Set a reasonable minimum playback rate (avoid negative values)
  currentVideoElement.playbackRate = Math.max(currentVideoElement.playbackRate - 0.1, minSpeed);
});

volumeUp.addEventListener("click", () => {
  if (!currentVideoElement) {
    return; // Handle potential errors: No video loaded
  }

  const maxVolume = 1.0; // Maximum volume
  currentVideoElement.volume = Math.min(currentVideoElement.volume + 0.1, maxVolume);
});

volumeDown.addEventListener("click", () => {
  if (!currentVideoElement) {
    return; // Handle potential errors: No video loaded
  }

  const minVolume = 0.0; // Minimum volume (mute)
  currentVideoElement.volume = Math.max(currentVideoElement.volume - 0.1, minVolume);
});
