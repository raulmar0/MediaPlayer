function MediaPlayer(config) {
  this.media = config.el
  this.plugins = config.plugins || []

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
  this.plugins.forEach(plugin => {
    plugin.run(this)
  })
}

MediaPlayer.prototype.togglePlay = function() {
  this.media.paused ? this.media.play() : this.media.pause()
}

MediaPlayer.prototype.toggleMute = function() {
  this.media.muted = this.media.muted ? false : true
}

MediaPlayer.prototype.mute = function() {
  this.media.muted = true
}

MediaPlayer.prototype.unmute = function() {
  this.media.muted = false
}

export default MediaPlayer