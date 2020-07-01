//http://universities.hipolabs.com/search?country=italy
const exampleData = require("./exampleDataUniversities.json")
module.exports.default = function (req, res, next) {
    const countries = ['italy', 'turkey',  'albania', 'germany', 'france'];

    var rp = require('request-promise'); //https://www.npmjs.com/package/request-promise

    var universitiesPromises = [];
    countries.map(country => {
        var university_details = {
            uri: `http://universities.hipolabs.com/search?country=${country}`,
            json: true // Automatically parses the JSON string in the response
        };
        universitiesPromises.push(rp(university_details));
    });

    Promise.all(universitiesPromises)
        .then((results) => {
            let universitiesData = results.map(universitiesForCountry => (universitiesForCountry.length))
            res.json([{
                'name': 'Università',
                'data': universitiesData
            }])
        }).catch(err => console.log(err));  // First rejected promise
}

