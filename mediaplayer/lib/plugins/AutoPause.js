"use strict";
exports.__esModule = true;
var AutoPause = /** @class */ (function () {
    function AutoPause() {
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
    }
    AutoPause.prototype.run = function (player) {
        this.player = player;
        var observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold
        });
        observer.observe(this.player.media);
        document.addEventListener('visibilitychange', this.handlerVisibilityChange);
    };
    //cambio 3, tipado de entries
    //cuando el intersection observer llama al handler le pasa 
    //un arreglo del tipo que indicamos en el tipo de ts 
    AutoPause.prototype.handlerIntersection = function (entries) {
        var entry = entries[0];
        var isVisible = entry.intersectionRatio >= this.threshold;
        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    //cambio 4, agregar private porque solo 
    //esta clase es la que las va a ejecutar
    AutoPause.prototype.handlerVisibilityChange = function () {
        var isVisible = document.visibilityState === 'visible';
        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    return AutoPause;
}());
exports["default"] = AutoPause;
