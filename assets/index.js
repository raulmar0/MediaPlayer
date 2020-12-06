import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video")
const togglePlayButton = document.querySelector(".play")
const toggleMuteButton = document.querySelector(".mute")

const player = new MediaPlayer({
  el: video, 
  plugins: [
    //new AutoPlay()
  ]
})
togglePlayButton.onclick = () => player.togglePlay();
toggleMuteButton.onclick = () => player.toggleMute()
