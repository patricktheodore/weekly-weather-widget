import moment from 'moment';

export function getCurrentDate() {
    return moment().format('dddd Do MMMM')
}

export function trimWeather(temp) {
    return Math.round(temp)
}

export function getDay(date) {
    return moment.unix(date).format('ddd')
}

export function getIcon(description) {
    let icon = ''
    switch (description) {
        case 'clear sky':
            icon = `ClearSky`;
            break;
        case 'few clouds':
            icon = 'FewClouds'
            break;
        case 'scattered clouds':
            icon = 'Cloudy'
            break;
        case 'broken clouds':
            icon = 'Cloudy'
            break;
        case 'shower rain':
            icon = 'Showers'
            break;
        case 'rain':
            icon = 'Rain'
            break;
        case 'thunderstorm':
            icon = 'Thunder'
            break;
        case 'snow':
            icon = 'Snow'
            break;
        case 'mist':
            icon = 'Mist'
            break;
        default: 
            icon = 'ClearSky'
    }
    return icon
}