function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export default class DummyServer {
    /**
     * Сервер-заглушка
     * @param {Function} callback - функция, запускающаяся по команде от сервера
     */
    constructor(collback, interval) {
        this._collback = collback
        this._loop()
        this._interval = interval
    }

    send(sessionState) {
        this._sessionState = sessionState
    }

    async _loop() {
        // eslint-disable-next-line no-constant-condition
        while (true) {
            if (this._sessionState['stop'] === true) {
                break
            }
            await sleep(this._interval)
            this._updateState()
            this._collback(this._sessionState)
        }
    }

    _updateState() {
        /** TODO */
    }
}