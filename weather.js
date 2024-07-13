const apikey = "7e59d56436376c3afef25011faa59537";
const displayContainer = document.querySelector(".weather_content");

function search() {
    let city = document.getElementsByTagName("input")[0].value;
    city = city.charAt(0).toUpperCase() + city.slice(1);
    displayDetails(city);
}

async function displayDetails(city) {
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    let response = await fetch(apiurl);
    let data = await response.json();

    displayContainer.style.display = "flex";
    document.querySelector("h2").textContent = city;
    document.querySelector("h1").textContent = `${(data.main.temp - 273.5).toFixed(2)}°`;
    document.querySelector(".humidity").textContent = `Humidity: ${data.main.humidity}%`;
    let description = data.weather[0].description;
    description = description.charAt(0).toUpperCase() + description.slice(1);
    document.querySelector(".desc").textContent = description;

    let wid = data.weather[0].id;
    switch (true) {
        case (wid >= 200 && wid < 300):
            document.querySelector("span").textContent = "🌩️";
            break;
        case (wid >= 300 && wid < 400):
            document.querySelector("span").textContent = "⛅";
            break;
        case (wid >= 500 && wid < 600):
            document.querySelector("span").textContent = "🌧️";
            break;
        case (wid >= 600 && wid < 700):
            document.querySelector("span").textContent = "🌨️";
            break;
        case (wid >= 700 && wid < 800):
            document.querySelector("span").textContent = "🌨️";
            break;
        case (wid == 800):
            document.querySelector("span").textContent = "🌤️";
            break;
        case (wid > 800 && wid < 900):
            document.querySelector("span").textContent = "☁️";
            break;
    }
}