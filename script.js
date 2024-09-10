let input = document.getElementById('input');
let submit = document.getElementById('submit');
let output = document.getElementById('output');

submit.addEventListener('click', () => {
    let city = input.value;
    if (!city) {
        output.innerHTML = 'Enter a city';
    } else {
        let apiKey = '902ffcbb2ac22ad2df39c3e6ca5d394d';
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;  // added units for Celsius
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                
                display(data, city);  // passing city to display function
            })
            .catch(error => {
                console.log(error);
            });
    }
});

function display(data, city) {
    let weather = data.weather[0];
    let description = weather.description;
    let temperature = data.main.temp;
    let feelsLike = data.main.feels_like;
    let humidity = data.main.humidity;
    let windSpeed = data.wind.speed;
    output.innerText = `
        Weather in ${city}:
        Temperature: ${temperature}°C
        Feels Like: ${feelsLike}°C
        Humidity: ${humidity}%
        Wind Speed: ${windSpeed} m/s
        Description: ${description}`;
}
