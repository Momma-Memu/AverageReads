navigator.geolocation.getCurrentPosition(async function(position) {
    const lat = Number(position.coords.latitude.toString().slice(0, 6));
    const lng = Number(position.coords.longitude.toString().slice(0, 6));

    document.cookie = `lat=${lat}; max-age-in-seconds=259200`;
    document.cookie = `lng=${lng}; max-age-in-seconds=259200`;

})


domManipulate()

async function domManipulate(){
    const cityDiv = document.getElementById('city');

    if(cityDiv.innerHTML.includes('In')){
        // console.log('hey')
        return;
    }


    let lat;
    let lng;

    const cookieArr = document.cookie.split(';')
    cookieArr.forEach(cookie => {
        if(cookie.includes('lat')){
            // console.log(cookie)
            lat = Number(cookie.split('=')[1])
        } else if(cookie.includes('lng')){
            lng = Number(cookie.split('=')[1])
        }
    });


    if(!lng || !lat){
        console.log('here')
        lat = 25.8305;
        lng = -80.1803;
    }

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
    const lat = Number(position.coords.latitude.toString().slice(0, 6));
    const lng = Number(position.coords.longitude.toString().slice(0, 6));

    document.cookie = `lat=${lat}; max-age-in-seconds=259200`;
    document.cookie = `lng=${lng}; max-age-in-seconds=259200`;

})
