const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddr = encodeURIComponent(address);
        request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`,
        json: true
    }, (error, response, body) => { // ENOTFOUND in error object means that the local machine couldnt connect to internet
            if (error || body.status === 'ZERO_RESULTS') {
                reject('Unable to find any place');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMsg) => {
    console.log(errorMsg);
});
