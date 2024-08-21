const translations = {
    fi: {
        "page-title": "Sää Sovellus",
        "container-title": "Sää",
        "search-via-location": "Paikanna",
        "search-via-input": "Hae"
    },
    en: {
        "page-title": "Weather App",
        "container-title": "Weather",
        "search-via-location": "Locate",
        "search-via-input": "Search"
    },
    se: {
        "page-title": "Väder App",
        "container-title": "Väder",
        "search-via-location": "Lokalisera",
        "search-via-input": "Söka"
    }
};

const placeholders = {
    en: "Enter city",
    fi: "Syötä kaupunki",
    se: "Ange stad"
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
    const inputField = document.getElementById('city');
    if (placeholders[language]) {
        inputField.placeholder = placeholders[language];
    }
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
    switchLanguage('en');
});