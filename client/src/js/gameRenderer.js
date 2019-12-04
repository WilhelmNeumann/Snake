export default class GameRenderer {
    /**
     * Отрисовщик кадров игры
     * @param {GameModel} model - модель данных игры 
     * @param {HTMLCanvasElement} canvas - элемент для отрисовки
     */
    constructor(model, canvas) {
        canvas.width = 500
        canvas.height = 500
        this._context2d = canvas.getContext('2d')
        this._model = model
    }

    /**
     * Отрисовать кадр игры
     */
    render() {
        // eslint-disable-next-line no-console
        console.log('render')
    }
}