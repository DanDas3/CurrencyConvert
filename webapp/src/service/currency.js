import {http, key} from "../config";

const currency = {
    obterValorConversao(query){
        return http.get(`convert?q=${query}&compact=ultra&apiKey=${key}`);
    }
}

export default currency;