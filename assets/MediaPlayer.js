function MediaPlayer({el}) {
  this.media = el
}

MediaPlayer.prototype.toggle = function() {
  this.media.paused ? this.media.play() : this.media.pause()
}

export default MediaPlayer