export default class ApiService {
    static baseUrl = ''

    /**
     * Получить конфигурацию с сервера
     */
    static async getConfig() {
        const responce = await fetch(ApiService.baseUrl + 'getConfig')
        return await responce.json()
    }
}