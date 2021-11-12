import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:5000',
})

export default class API {
    // Получает сообщение по id
    static async getMessage(id) {
        const resp = await axios.get(`/api/Message/${id}`)
        return resp.data
    }

    // Отправка сообщения
    static async sendMessage(text) {
        var gdata= await axios.post(`/api/set`, {
            text
        })
            .then(function (response) {
                // console.log(response.data);
                return response.data
            })
            .catch(function (error) {
                console.log(error);
            });
        return gdata
    }
}