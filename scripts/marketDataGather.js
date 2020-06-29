const axios = require('axios');

const gatherMarketInformation = () => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.binance.com/exchange-api/v1/public/asset-service/product/get-products`)
            .then(res => res)
            .then((data) => {
                resolve(data.data)
            }).catch((err) => {
                reject(err)
        });
    })
}


module.exports = gatherMarketInformation;