
navigator.geolocation.getCurrentPosition(async function(position) {
    let lat = Number(position.coords.latitude.toString().slice(0, 6));
    let lng = Number(position.coords.longitude.toString().slice(0, 6));
    console.log(lat)
    console.log(lng)
    if(!lat || !lng){
        console.log('here')
        lat = 25.8305;
        lng = -80.1803;
    }

    // const params = 'airTemperature,windSpeed,cloudCover,humidity';

    //     const response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
    //         headers: {
    //             'Authorization': '8b74d418-f3b5-11ea-9e97-0242ac130002-8b74d4e0-f3b5-11ea-9e97-0242ac130002'
    //         }
    //     })
    // const weather = await response.json();
    // console.log(weather.hours[0])
    const cloud = document.getElementById('cloud');
    const wind = document.getElementById('wind');
    const temp = document.getElementById('temp');
    cloud.innerHTML = '    32% coverage'
    wind.innerHTML = '    25 mph'
    temp.innerHTML = '    98.7'
})
