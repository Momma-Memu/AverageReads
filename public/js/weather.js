
domManipulate()

async function domManipulate(){
    const cityDiv = document.getElementById('city');

    if(cityDiv.innerHTML.includes('In')){
        // console.log('hey')
        return;
    }

    const lat = 25.8305;
    const lng = -80.1803;
    const key = document.cookie.split(';')[0].split('=')[1]
    const key2 = document.cookie.split(';')[1].split('=')[1]
    console.log(key2)
    const params = 'airTemperature,windSpeed,cloudCover,humidity';

    let response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
        headers: {
            'Authorization': key
        }
    })

    if(response.status === 402) {
        // console.log(true)
        response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
            headers: {
                'Authorization': key2
            }
        })
        // console.log('after call two')
    }

    const weather = await response.json();

    const temp = weather.hours[0].airTemperature.noaa * 9 / 5 + 32;
    const cloud = weather.hours[0].cloudCover.noaa
    const wind = Math.round(weather.hours[0].windSpeed.noaa * 2.236936);

    const cloudDiv = document.getElementById('cloud');
    const windDiv = document.getElementById('wind');
    const tempDiv = document.getElementById('temp');

    const addData = await fetch('/weather', {
        method: 'POST',
        body: JSON.stringify({lat, lng}),
        headers:{
            'Content-Type': 'application/json'
        },
    })


    const parsedAdd = await addData.json();
    const address = parsedAdd.results[0].formatted.split(',')[1]

    cityDiv.innerHTML = address
    cloudDiv.innerHTML = ` ${cloud}% Coverage`
    windDiv.innerHTML = ` ${wind} mph`
    tempDiv.innerHTML = ` ${temp}`
}

navigator.geolocation.getCurrentPosition(async function(position) {
    lat = Number(position.coords.latitude.toString().slice(0, 6));
    lng = Number(position.coords.longitude.toString().slice(0, 6));

    const key = document.cookie.split(';')[0].split('=')[1]
    const key2 = document.cookie.split(';')[1].split('=')[1]
    const params = 'airTemperature,windSpeed,cloudCover,humidity';

    let response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
        headers: {
            'Authorization': key
        }
    })

    if(response.status === 402) {
        // console.log(true)
        response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
            headers: {
                'Authorization': key2
            }
        })
        // console.log('after call two')
    }
    const weather = await response.json();

    const temp = weather.hours[0].airTemperature.noaa * 9 / 5 + 32;
    const cloud = weather.hours[0].cloudCover.noaa
    const wind = Math.round(weather.hours[0].windSpeed.noaa * 2.236936);

    const cloudDiv = document.getElementById('cloud');
    const windDiv = document.getElementById('wind');
    const tempDiv = document.getElementById('temp');
    const cityDiv = document.getElementById('city');

    const addData = await fetch('/weather', {
        method: 'POST',
        body: JSON.stringify({lat, lng}),
        headers:{
            'Content-Type': 'application/json'
        },
    })

    const parsedAdd = await addData.json();
    const address = parsedAdd.results[0].formatted.split(',')[1]

    cityDiv.innerHTML = ` In ${address}`
    cloudDiv.innerHTML = ` ${cloud}% Coverage`
    windDiv.innerHTML = ` ${wind} mph`
    tempDiv.innerHTML = ` ${temp}`

})
