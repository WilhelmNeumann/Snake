export default class GameController {
    /**
     * Контроллер игровой логики
     * @param {GameModel} model - модель данных игры
     */
    constructor(model) {
        this._model = model
    }

    /**
     * Обновить игровую логику
     */
    update() {
        // eslint-disable-next-line no-console
        console.log('update')
    }
}