import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'

const video = document.querySelector("video")
const togglePlayButton: HTMLElement = document.querySelector(".play")
const toggleMuteButton: HTMLElement = document.querySelector(".mute")

const player = new MediaPlayer({
  el: video, 
  plugins: [
    new AutoPlay(),
    new AutoPause(),
    new Ads(),
  ]
})

togglePlayButton.onclick = () => player.togglePlay();
toggleMuteButton.onclick = () => player.toggleMute()


if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.error(error.message)
  })
}