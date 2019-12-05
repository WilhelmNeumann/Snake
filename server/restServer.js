const restify = require('restify')
const config = require('./config/backendConfig')
const corsMiddleware = require('restify-cors-middleware')

module.exports = {
    /**
     * Запуск рест сервера
     */
    run: () => {
        const server = restify.createServer()

        server.listen(config.restServerPort, () => {
            console.log(`Restify listening at ${server.url}`);
        })

        const cors = corsMiddleware({
            origins: ['*'],
            allowHeaders: ['*']
        })

        server.pre(cors.preflight)
        server.use(cors.actual)

        server.get('/getConfig', (req, res) => {
            const frontendConfig = require('./config/frontendConfig')
            res.send(frontendConfig)
        })
    }
}
