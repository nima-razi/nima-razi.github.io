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

    if (input.length > 1) { // Trigger search after 2 characters
        for (let country in citiesData) {
            if (citiesData.hasOwnProperty(country)) {
                citiesData[country].forEach(city => {
                    if (city.toLowerCase().startsWith(input)) {
                        const option = document.createElement('option');
                        option.value = `${city}, ${country}`;
                        datalist.appendChild(option);
                    }
                });
            }
        }
    }
});   