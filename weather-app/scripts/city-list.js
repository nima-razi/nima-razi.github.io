let citiesData = {};

fetch('scripts/countries.min.json')
    .then(response => response.json())
    .then(data => {
        citiesData = data;
    })
    .catch(error => console.error('Error loading cities:', error));

document.getElementById('city').addEventListener('input', function() {
    const input = this.value.toLowerCase();
    const datalist = document.getElementById('city-list');
    datalist.innerHTML = ''; // Clear previous options

    // Check if citiesData is loaded
    if (!Object.keys(citiesData).length) {
        console.error('City data has not been loaded yet.');
        return; // Exit the function if data is not loaded
    }

    if (input.length > 1) { // Trigger search after 2 characters
        const fragment = document.createDocumentFragment(); // Use fragment for performance
        for (let country in citiesData) {
            if (citiesData.hasOwnProperty(country)) {
                citiesData[country].forEach(city => {
                    if (city.toLowerCase().startsWith(input)) {
                        const option = document.createElement('option');
                        option.value = `${city}, ${country}`;
                        fragment.appendChild(option);
                    }
                });
            }
        }
        datalist.appendChild(fragment); // Append all options at once
    }
});