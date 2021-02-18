//http://universities.hipolabs.com/search?country=italy
const exampleData = require("./exampleDataUniversities.json")
module.exports.default = function (req, res, next) {
    var rp = require('request-promise'); //https://www.npmjs.com/package/request-promise
    const formattedData = {}
    res.send(exampleData)
}

