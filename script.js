
const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");


const handleInput = () => {
    // console.log("Input is clicked");
    // you have make it click               .......
    videoInput.click();

}

const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");

const videoPlayer = document.querySelector("#main") ;

// const speedUpHandler = () => {
//     // alert("Speed up was clicked");
//     const videoElement = document.querySelector(".main .video");
//     let isVideoPresent = false;
//     if (isVideoPresent !== null) {
//         // video is present
//         videoElement.defaultPlaybackRate = videoElement.defaultPlaybackRate + 0.1;
//     }
// }

let isVideoPresent = false;

const speedUpHandler = () => {
    // alert("Speed up was clicked"); // You can remove this line for a cleaner implementation
    const videoElement = document.querySelector(".main .video");
    // video is present (assuming the video is always present after successful video selection)
    videoElement.defaultPlaybackRate = videoElement.defaultPlaybackRate + 0.1;
  }


const acceptInputHandler = (obj) => {
    const selectedVideo = obj.target.files[0];
    //  src -> base64 
    const link = URL.createObjectURL(selectedVideo);

    const videoElement = document.createElement("video");
    videoElement.src = link;
    // now it is done
    videoElement.setAttribute("class", "video");
    videoPlayer.appendChild(videoElement);
    videoElement.play();
    videoElement.volume = 0.3;

    // how to inc/dec the volume of a video in js 
    // how to inc/dec speed of a video in js
    videoElement.addEventListener("onloadedmetadata",function(){
        // your time will there
 
        isVideoPresent = true;

    }) 
}


videoBtn.addEventListener("click", handleInput);
// when file is selected
videoInput.addEventListener("change", acceptInputHandler);

/*****************volume speed*****************/

speedUp.addEventListener("click", speedUpHandler);
videoBtn.addEventListener("click", handleInput);

// when file is selected
videoInput.addEventListener("change", acceptInputHandler)



