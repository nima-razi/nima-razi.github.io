const translations = {
    fi: {
        "page-title": "Sää Sovellus",
        "container-title": "Sää Sovellus",
        "search-via-location": "Paikanna",
        "search-via-input": "Hae"
    },
    en: {
        "page-title": "Weather App",
        "container-title": "Weather App",
        "search-via-location": "Locate",
        "search-via-input": "Search"
    },
    se: {
        "page-title": "Väder App",
        "container-title": "Väder App",
        "search-via-location": "Lokalisera",
        "search-via-input": "Söka"
    }
};

document.getElementById('btn-fi').addEventListener('click', function() {
    switchLanguage('fi');
});
document.getElementById('btn-en').addEventListener('click', function() {
    switchLanguage('en');
});
document.getElementById('btn-se').addEventListener('click', function() {
    switchLanguage('se');
});

function switchLanguage(language) {
    document.querySelectorAll('[id]').forEach(function(element) {
        const key = element.id;
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

function switchLanguage(language) {
document.querySelectorAll('[id]').forEach(function(element) {
    const key = element.id;
    if (translations[language][key]) {
        element.textContent = translations[language][key];
    }
});

// Remove active class from all buttons
document.querySelectorAll('.btn-outline-secondary').forEach(function(button) {
    button.classList.remove('active');
});

// Add active class to the selected button
document.getElementById('btn-' + language).classList.add('active');
}

// Set default language to English on initial load
document.addEventListener('DOMContentLoaded', function() {
    switchLanguage('fi');
});

function getWeather() {
    const apiKey = 'a2ed853528c8c6416f230af509878eac';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again.');
        });

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data.list);
        })
        .catch(error => {
            console.error('Error fetching hourly forecast data:', error);
            alert('Error fetching hourly forecast data. Please try again.');
        });
}

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    // Clear prevoius content
    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
        const temperatureHTML = `<h1>${temperature}°C</h1>`;
        const weatherHTML = `<div class="hstack gap-2 pb-4"><h3 class="text-secondary">${cityName} - </h3><h3 class="text-capitalize text-secondary">${description}</h3></div>`;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHTML;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
    }
}

function displayHourlyForecast(hourlyData) {
    const hourlyForecastDiv = document.getElementById('hourly-forecast');
    const next24Hours = hourlyData.slice(0, 8);

    next24Hours.forEach(item => {
        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHTML = `<div class="hourly-item text-center">
                                    <span>${hour}:00</span><br>
                                    <img class="img-fluid" src="${iconUrl}" alt="Hourly Weather Icon"><br>
                                    <span>${temperature}°C</span>
                                </div>`;
        hourlyForecastDiv.innerHTML += hourlyItemHTML;
    });
}

function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
}

/* function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Use reverse geocoding to get the city name
    reverseGeocode(latitude, longitude);
}

function reverseGeocode(latitude, longitude) {
    // Using OpenStreetMap's Nominatim reverse geocoding service
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.address && data.address.city) {
                document.getElementById("locationInput").value = data.address.city;
            } else {
                alert("City not found.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Unable to retrieve location.");
        });
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
} */