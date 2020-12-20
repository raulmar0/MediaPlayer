import MediaPlayer from '../MediaPlayer.js'
class AutoPause {
  // cambio 1: asignamos un tipo a threshold
  // threshold es una propiedad privada, por eso el private
  //(concepto que no existe en js pero si en ts)
  private threshold: number
  player: MediaPlayer

  
  constructor() {
    this.threshold = 0.25
    this.handlerIntersection = this.handlerIntersection.bind(this)
    this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
  }

  run(player: MediaPlayer) {
    this.player = player

    const observer = new IntersectionObserver(this.handlerIntersection,{
      threshold: this.threshold
    }) 

    observer.observe(this.player.media)

    document.addEventListener('visibilitychange', this.handlerVisibilityChange)
  }
  //cambio 3, tipado de entries
  //cuando el intersection observer llama al handler le pasa 
  //un arreglo del tipo que indicamos en el tipo de ts 
  private handlerIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0]

    const isVisible = entry.intersectionRatio >= this.threshold

    if(isVisible) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }

  //cambio 4, agregar private porque solo 
  //esta clase es la que las va a ejecutar
  private handlerVisibilityChange() {
    const isVisible = document.visibilityState === 'visible'

    if(isVisible) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }
}

export default AutoPause