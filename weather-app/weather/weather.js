const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/7325e86919a3baa83546fd1553135f3b/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature
            });
        }
        else {
            callback('Unable to fetch');
        }
    });
};

module.exports.getWeather = getWeather;
