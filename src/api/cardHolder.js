import axios from "axios";
const URL = "http://0.0.0.0:8000"

export async function getAll() {
    try {
        const response = await axios.get(
            URL + "/get_all/",
            {params: {"page[size]": 100}})
        return [response.data, ""]
    } catch (error) {
        return [[], "Сервер временно не доступен"]
    }
}

export async function createCards(requestData) {
    try {
        const response = await axios.post(URL + "/create_cards/", requestData)
        return [response.data, ""]
    } catch (error) {
        console.log("ERROR", error.response)
        return [[], error.response]
    }
}

export async function deleteCard(id) {
    try {
        const response = await axios.delete(URL + `/delete_card/?id_card=${id}`)
        return [response.data, ""]
    } catch (error) {
        console.log("ERROR", error.response)
        return [[], error.response]
    }


}

