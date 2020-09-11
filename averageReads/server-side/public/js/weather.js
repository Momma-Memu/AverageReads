
// domManipulate()

// async function domManipulate(){
//     const cityDiv = document.getElementById('city');

//     if(cityDiv.innerHTML.includes('In')){
//         console.log('hey')
//         return;
//     }

//     const lat = 25.8305;
//     const lng = -80.1803;

//     const params = 'airTemperature,windSpeed,cloudCover,humidity';

//         const response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
//             headers: {
//                 'Authorization': '3d4d1220-f46c-11ea-9d9b-0242ac130002-3d4d12de-f46c-11ea-9d9b-0242ac130002'
//             }
//         })
//     const weather = await response.json();

//     const temp = weather.hours[0].airTemperature.noaa * 9 / 5 + 32;
//     const cloud = weather.hours[0].cloudCover.noaa
//     const wind = Math.round(weather.hours[0].windSpeed.noaa * 2.236936);

//     const cloudDiv = document.getElementById('cloud');
//     const windDiv = document.getElementById('wind');
//     const tempDiv = document.getElementById('temp');

//     const apiKey = '4ccce17a2b18430f8ddcf4f6956b9943'
//     const reverseGeoUrl =
//         'https://api.opencagedata.com/geocode/v1/json'
//         + '?' + 'key=' + apiKey + '&q=' + encodeURIComponent(lat + ',' + lng)
//         + '&pretty=1' + '&no_annotations=1';

//     const addData = await fetch(reverseGeoUrl)
//     const parsedAdd = await addData.json();
//     const address = parsedAdd.results[0].formatted.split(',')[1]

//     cityDiv.innerHTML = address
//     cloudDiv.innerHTML = ` ${cloud}% Coverage`
//     windDiv.innerHTML = ` ${wind} mph`
//     tempDiv.innerHTML = ` ${temp}`
// }

// navigator.geolocation.getCurrentPosition(async function(position) {
//     lat = Number(position.coords.latitude.toString().slice(0, 6));
//     lng = Number(position.coords.longitude.toString().slice(0, 6));
//     console.log(lat)
//     console.log(lng)
//     const params = 'airTemperature,windSpeed,cloudCover,humidity';

//     const response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
//         headers: {
//             'Authorization': '3d4d1220-f46c-11ea-9d9b-0242ac130002-3d4d12de-f46c-11ea-9d9b-0242ac130002'
//         }
//     })
//     const weather = await response.json();
//     const temp = weather.hours[0].airTemperature.noaa * 9 / 5 + 32;
//     const cloud = weather.hours[0].cloudCover.noaa
//     const wind = Math.round(weather.hours[0].windSpeed.noaa * 2.236936);

//     const cloudDiv = document.getElementById('cloud');
//     const windDiv = document.getElementById('wind');
//     const tempDiv = document.getElementById('temp');
//     const cityDiv = document.getElementById('city');

//     const apiKey = '4ccce17a2b18430f8ddcf4f6956b9943'
//     const reverseGeoUrl =
//         'https://api.opencagedata.com/geocode/v1/json'
//         + '?' + 'key=' + apiKey + '&q=' + encodeURIComponent(lat + ',' + lng)
//         + '&pretty=1' + '&no_annotations=1';

//     const addData = await fetch(reverseGeoUrl)
//     const parsedAdd = await addData.json();
//     const address = parsedAdd.results[0].formatted.split(',')[1]

//     cityDiv.innerHTML = ` In ${address}`
//     cloudDiv.innerHTML = ` ${cloud}% Coverage`
//     windDiv.innerHTML = ` ${wind} mph`
//     tempDiv.innerHTML = ` ${temp}`

// })
