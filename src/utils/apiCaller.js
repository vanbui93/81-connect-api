import * as Config from './../constants/Config';
const axios = require('axios');

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    }).catch((error) => {
        console.log(error);
    })
}