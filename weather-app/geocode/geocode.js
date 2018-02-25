const request = require('request');

var geocodeAddress = (Addr, callback) => {
    var encodedAddr = encodeURIComponent(Addr);
    request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`,
    json: true
}, (error, response, body) => { // ENOTFOUND in error object means that the local machine couldnt connect to internet
        if (error) {
            callback('Unable to connect to Google servers');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else { //if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
            // console.log(`Address: ${body.results[0].formatted_address}`);
            // console.log(`Lat: ${body.results[0].geometry.location.lat}`);
            // console.log(`Lng: ${body.results[0].geometry.location.lng}`);
        }
        // console.log(body);
        // console.log(JSON.stringify(error, undefined, 2));
    });
};

module.exports.geocodeAddress = geocodeAddress;
