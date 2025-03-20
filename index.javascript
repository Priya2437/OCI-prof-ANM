document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        getWeatherData(city);
    } else {
        alert('Please enter a city name!');
    }
});

async function getWeatherData(city) {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert('City not found, please try again!');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = `${data.main.temp} °C`;
    const description = data.weather[0].description;
    const humidity = `Humidity: ${data.main.humidity}%`;
    const windSpeed = `Wind Speed: ${data.wind.speed} m/s`;

    document.getElementById('cityName').textContent = cityName;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}`;
    document.getElementById('description').textContent = `Description: ${description}`;
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('windSpeed').textContent = windSpeed;
}
