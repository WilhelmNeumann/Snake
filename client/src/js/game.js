import GameModel from "./gameModel";
import GameController from "./gameController";
import GameRenderer from "./gameRenderer";
import GameLoop from "./gameLoop";
import ApiService from "./apiService";

export default class Game {
    /**
     * Игра змейка. Главный класс.
     * @param {HTMLCanvasElement} canvas - элемент для отрисовки
     * @param {Object} config - настройки
     */
    constructor(canvas, config) {
        this._config = config
        const model = new GameModel()
        this._controller = new GameController(model)
        this._renderer = new GameRenderer(model, canvas)
        this._loop = new GameLoop(() => {
            this._controller.update()
            this._renderer.render()
        })
    }

    /**
     * Запустить игры
     */
    start() {
        this._loop.start()
    }

    /**
     * Остановить игру
     */
    stop() {
        this._loop.stop()
    }
}