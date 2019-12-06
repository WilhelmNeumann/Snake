const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default class DummyServer {
    /**
     * Сервер-заглушка
     * @param {Function} callback - функция, запускающаяся по команде от сервера
     * @param {Number} interval - Интервал для одного игрового цикла сервера в мс.
     * @param {String} address - Адрес для подключения к серверу (не используется в DummyServer)
     */
    constructor(collback, interval, address) {
        this._collback = collback
        this._interval = interval
        this._address = address
        this._loop()
    }

    send(msg) {
        this._sessionState = this._updateState(msg)
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

    _updateState(msg) {
        /** TODO */
    }
}