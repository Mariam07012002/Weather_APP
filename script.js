const keyApi = 'b698da05d747196e7848bb6cc2a14080';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weathrIcone = document.querySelector('.weather-icon')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${keyApi}`)
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    } else {
        var data  = await response.json()

    console.log(data)

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)  + '°c'
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'

    if (data.weather[0].main == 'Rain') {
        weathrIcone.src = 'https://png.pngtree.com/png-clipart/20201201/ourmid/pngtree-rainy-day-raining-gray-clouds-clip-art-png-image_2480526.jpg'
    } else if (data.weather[0].main == 'Clear') {
        weathrIcone.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Weather_icon_-_sunny.svg/2048px-Weather_icon_-_sunny.svg.png'
    } else if (data.weather[0].main == 'Clouds') {
        weathrIcone.src = 'https://img.favpng.com/11/17/11/cloud-weather-rain-illustration-png-favpng-DJmSjCNPBEmDZqgvMHMWMAnek.jpg'
    } else if (data.weather[0].main == 'Drizzle') {
        weathrIcone.src = 'https://w7.pngwing.com/pngs/397/536/png-transparent-rainy-day-clouds-rain-the-weather-thumbnail.png'
    } else if (data.weather[0].main == 'Mist') {
        weathrIcone.src = 'https://cdn-icons-png.flaticon.com/512/4005/4005901.png'
    }
    document.querySelector('.weather').style.display = 'block'
    }
    
}

searchBtn.addEventListener('click' , () => {
checkWeather(searchBox.value)
})