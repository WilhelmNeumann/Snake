export default class GameLoop {
    /**
     * Игровой цикл
     * @param {Function} callback - функция для запуска в интервале
     */
    constructor(callback) {
        this._callack = callback
        this._interval = null
        this._delay = 1000
    }

    start() {
        this._interval = setInterval(this._callack, this._delay)
    }

    stop() {
        this._interval = null
    }
}