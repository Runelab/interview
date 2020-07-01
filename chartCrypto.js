// alphavantage apiKey J06QACM0IZY7CCHY 
// https://www.alphavantage.co/documentation (closing daily US con USD market)
const moment = require("moment") //https://momentjs.com/docs/
const exampleData = require("./exampleDataCrypto.json")

module.exports.default = function (req, res, next) {
    var rp = require('request-promise'); //https://www.npmjs.com/package/request-promise
    const coins = ['BTC', 'LTC', 'ETH'];
    const apiKey = 'J06QACM0IZY7CCHY';

    let coinsPromises = [];
    coins.map(coin => {
        var coin_details = {
            uri: `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&market=CNY`,
            qs: {
                symbol: coin,
                apikey: apiKey
            },
            json: true // Automatically parses the JSON string in the response
        };
        coinsPromises.push(rp(coin_details));
    });


    const formattedData = {}
    res.send(exampleData);
}

