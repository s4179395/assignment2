
/* because of the relaxtion theme I wanted to attempt to create a timer with the settings of a pomodoro timer, so using a youtube tutorial for a simple timer I got the basic idea of a pause and play button 
and also a set time button, and used to create 3 buttons for different set times that are used when timing yourself using the pomodoro technique */
class Timer {
    
    constructor(root) 
    {
        root.innerHTML = Timer.getHTML();

        this.el = {

            minutes: root.querySelector(".timer__part--minutes"),
            seconds: root.querySelector(".timer__part--seconds"),
            control: root.querySelector(".timer__btn--control"),
            pomodoro: root.querySelector(".timer__btn--pomodoro"),
            sbreak: root.querySelector(".timer__btn--sbreak"),
            lbreak: root.querySelector(".timer__btn--lbreak")
        };

/* I had initially made a mistake just above where I had messed up the amount of comma's and it was enough to destroy my entire code, it took alot of looking at my code and seeing if everything was written correctly to figure this out */

        this.interval = null;
        this.remainingSeconds = 0;

        console.log(this.remainingSeconds)

        this.el.control.addEventListener("click", () =>  {
            if (this.interval === null) {
                this.start();
            } else { 
                this.stop(); 
            }
        } )

        this.el.pomodoro.addEventListener("click", () => {
            const inputMinutes = 24
            if (inputMinutes < 60)
            {
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.updateInterfaceTime();
            } 
        } 
        );

                this.el.sbreak.addEventListener("click", () => {
            const inputMinutes = 5
            if (inputMinutes < 60)
            {
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.updateInterfaceTime();
            } 
        } 
        );

                        this.el.lbreak.addEventListener("click", () => {
            const inputMinutes = 30
            if (inputMinutes < 60)
            {
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.updateInterfaceTime();
            } 
        } 
        );

    }

    updateInterfaceTime() {

        // this translates the minutes into remaing seconds by intervals of 60 
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;


        this.el.minutes.textContent = 
    minutes.toString().padStart(2, "0");
        this.el.seconds.textContent =
    seconds.toString().padStart(2, "0");

    }

/* this just gives the code an understanding of what to change the images to when either its playing or paused */
    updateinterfaceControls() {
        if (this.interval === null) {
            this.el.control.innerHTML = `<span> <img
              id="play-pause-img"
              src="https://img.icons8.com/play"
              alt="Play Button"
              width="20"
              height="20"
              text-align="center"
                />
                </span>`;
            this.el.control.classList.add("timer__btn--start");
            this.el.control.classList.remove("timer__btn--stop");
        } else {
            this.el.control.innerHTML = `<span><img
              id="play-pause-img"
              src="https://img.icons8.com/pause"
              alt="Pause Button"
              width="20"
              height="20"
              text-align="center"
            /></span>`;
            this.el.control.classList.add("timer__btn--stop");
            this.el.control.classList.remove("timer__btn--start");

        }
    }

    start() {
        // checking if theres any remaining seconds
        if (this.remainingSeconds === 0) return;

        this.interval = setInterval(() => {
            this.remainingSeconds--;   
            this.updateInterfaceTime();

            if (this.remainingSeconds === 0) {
                this.stop();
            }
        }, 1000);

        this.updateinterfaceControls();
    }

    stop () {
        clearInterval(this.interval);
        this.interval = null;
        this.updateinterfaceControls();
    }

    /* this was html that needed to be added within the timer, that the timer calls onto, and it was interesting to figure out like how you can add different codding to html, you can do the same for javascript */
    static getHTML() {
        return  `
            <span class="timer__part timer__part--minutes">00</span>
            <span class="timer__part">:</span>
            <span class="timer__part timer__part--seconds">00</span>
           
        <button type="button" class="timer__btnplaypause timer__btn--control timer__btn--start"><img
              id="play-pause-img"
              src="https://img.icons8.com/play"
              alt="Play Button"
              width="20"
              height="20"
              text-align="center"

            />
        </button>
        <button type="button" class="timer__btnpomodoro  timer__btn--pomodoro"><span><img
              id="play-pause-img"
              src="https://img.icons8.com/book"
              alt="Play Button"
              width="20"
              height="20"
              text-align="center"

            /></span</button>
        <button type="button" class="timer__btnsbreak timer__btn--sbreak"><img
              id="play-pause-img"
              src="https://img.icons8.com/smartphone"
              alt="Play Button"
              width="20"
              height="20"
              text-align="center"

            /></button>
        <button type="button" class="timer__btnlbreak timer__btn--lbreak"><img
              id="play-pause-img"
              src="https://img.icons8.com/controller"
              alt="Play Button"
              width="20"
              height="20"
              text-align="center"

            /></button>
            <nav>
            <ul><img src="https://img.icons8.com/play" width="15" height="15"></img><img src="https://img.icons8.com/pause" width="15" height="15""></img>[Play/Pause]</ul>
            <ul><img src="https://img.icons8.com/book" width="15" height="15"></img>[Study]
            <img src="https://img.icons8.com/smartphone" width="15" height="15"></img>[Short Break]
            <img src="https://img.icons8.com/controller" width="15" height="15"></img>[Long Break]</ul> 
            <ul>--</ul>
            <p>The Pomodoro Technique is a section of 4 25 minute study sessions with 5 minute breaks inbetween and one longer break at the end of the final pomodoro section. This media player has added those timers in to help you track how long you study.</p>
            
            </nav>
        `;
    }
}

new Timer(
    document.querySelector(".timer")
);
/* I really liked the vplayer in class we looked at but I wanted to make sure it fit the idea I wanted to make, because of this I adjusted the code as I wrote it to not include things that were unneccasary for my idea and to also make sure it all
worked for the theme of my work, this meant using different icons and different videos. I mainly focused on adding a pause and mute feature for when you want to stop the music and just focus, and a fullscreen feature incase you have a second monitor or are
working with paper so you have less access to your computer screen */
const videoList = [
    { id: 1, src: "rain.mp4" },
    { id: 2, src: "how.mp4" },
    { id: 3, src: "dont.mp4" }
];

/* I wasn't intially able to made this line of code work properly as I hadn't properly id'd it in my html documenht, this code requires alot of back and forth between all 3 coding styles, css, html and js to work as each part relies on eachother
and it was important to make sure I had every single part of each code working seamlessly together like a machine */
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

myVideo.addEventListener("timeupdate", updateProgress);

function updateProgress() {
    const duration = (myVideo.currentTime / myVideo.duration) * 100;
    progressBar.style.width = duration + "%";
}

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", togglePlayback);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function togglePlayback() {
    if (myVideo.paused || myVideo.ended) {
        myVideo. play();
        playPauseImg.src = "https://img.icons8.com/play"
            } else {
            myVideo.pause();
            playPauseImg.src = "https://img.icons8.com/pause" 
        }

    }

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleAudio);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleAudio() {
    if (myVideo.muted) {
        myVideo.muted = false;
        muteUnmuteImg.src = "https://img.icons8.com/high-volume"
    } else {
        myVideo.muted = true;
        muteUnmuteImg.src = "https://img.icons8.com/mute"
    }
}

const rainButton = document.querySelector("#rain-vid-button")
console.log(rainButton);

/* I found it interesting that the id's were 1-3 but playvideo is 0-2 */

rainButton.addEventListener("click", function chooseVideo() {
    playVideo(0);
});

const howButton = document.querySelector("#how-vid-button")
console.log(howButton);

howButton.addEventListener("click", function chooseVideo() {
    playVideo(1);
});

const dontButton = document.querySelector("#dont-vid-button")
console.log(dontButton)

dontButton.addEventListener("click", function chooseVideo() {
    playVideo(2);
});

function playVideo(no) {
    myVideo.src = videoList[no].src;
    myVideo.load();
    myVideo.play();
}

const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", toggleFullscreen);

/* learning how to add fullscreen was an interesting piece of code and while its relatively simple I wasn't really expecting it to be, but it makes sense since it would be so commonly used */

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        myVideo.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}


