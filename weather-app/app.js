const request = require('request');

const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

// console.log(argv);

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        // console.log('Printing address: ' + JSON.stringify(results, undefined, 2));
        console.log(results.address);

        weather.getWeather(results.latitude, results.longitude, (errorMsg, weatherResults) => {
            if (errorMsg) {
                console.log(errorMsg);
            }
            else {
                console.log(`It's currently ${weatherResults.temperature}`);
            }
        });
    }
});
