const input = document.getElementById('input');
const button = document.getElementById('button');
const temp = document.getElementById('temperature');
const desc = document.getElementById('description');
const error = document.getElementById('error');
const weather_box = document.getElementById('weather-box');
const humidity_value = document.getElementById('humidity-value');
const wind_speed_value = document.getElementById('wind-speed-value');
const img = document.getElementById('image');

async function func() {
    const api = `801fb0eb3e99eeb07750c75fa93f6439`;
    const city = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    const response = await fetch(url);
    if (!response.ok) {
        error.style.display = "flex";
        weather_box.style.display = "none";
        return;
    }
    error.style.display = "none";
    weather_box.style.display = "flex";
    const data = await response.json();
    temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
    humidity_value.innerHTML = `${data.main.humidity}%`;
    wind_speed_value.innerHTML = `${data.wind.speed} km/h`;
    desc.innerHTML = `${data.weather[0].main}`;
    img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

button.addEventListener('click', () => {
    func();
})

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        func();
    }
});