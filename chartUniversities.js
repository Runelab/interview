//http://universities.hipolabs.com/search

const exampleData = require("./exampleDataUniversities.json")
module.exports.default = function (req, res, next) {
    const countries = ['italy', 'turkey',  'albania', 'germany', 'france'];
    var rp = require('request-promise'); //https://www.npmjs.com/package/request-promise
    const formattedData = {}
    res.send(exampleData)
}

