import {http, key} from "../config";

const currency = {
    obterValorConversao(){
        return http.get(`https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=${key}`);
    }
}

export default currency;