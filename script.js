let input = document.getElementById('input');
let submit = document.getElementById('submit');
let output = document.getElementById('output');

submit.addEventListener('click', () => {
    let city = input.value;
    if (!city) {
        output.innerHTML = '<p id="error">Please enter a city name!</p>';
    } else {
        let apiKey = '902ffcbb2ac22ad2df39c3e6ca5d394d';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === "404") {
                    output.innerHTML = '<p id="error">City not found. Try again!</p>';
                } else {
                    displayWeather(data, city);
                }
            })
            .catch(error => {
                output.innerHTML = '<p id="error">Error fetching weather data. Please try again later.</p>';
            });
    }
});

function displayWeather(data, city) {
    let weather = data.weather[0].description;
    let temperature = data.main.temp;
    let feelsLike = data.main.feels_like;
    let humidity = data.main.humidity;
    let windSpeed = data.wind.speed;

    output.innerHTML = `
        <h2>Weather in ${city}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Feels Like: ${feelsLike}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
        <p>Description: ${weather}</p>
    `;
}
