

class MediaPlayer {
  //No tenemos que importar nada como en MediaPlayer
  // porque HTMLMediaElement es nativo
  media: HTMLMediaElement
  plugins: Array<any>
  container: HTMLElement

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlayer()
    this.initPlugins()
  }
  private initPlugins() {

    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  initPlayer() {
    this.container = document.createElement('div')
    this.container.style.position = 'relative'
    this.media.parentNode.insertBefore(this.container, this.media)
    this.container.appendChild(this.media)
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  togglePlay() {
    this.media.paused ? this.play() : this.pause();
  }

  toggleMute() {
    this.media.muted = this.media.muted ? false : true;
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }
  
}

export default MediaPlayer