const restify = require('restify')
const config = require('./config/backendConfig')

module.exports = {
    /**
     * Запуск рест сервера
     */
    run: () => {
        const server = restify.createServer()

        server.listen(config.restServerPort, () => {
            console.log(`Restify listening at ${server.url}`);
        })

        server.get('/getConfig', (req, res) => {
            const frontendConfig = require('./config/frontendConfig')
            res.send(frontendConfig)
        })
    }
}
