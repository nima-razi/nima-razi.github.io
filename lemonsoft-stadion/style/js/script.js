const translations = {
    fi: {
        "booking-calendar": "VARAUSKALENTERI",
        "getting-here": "SAAPUMINEN",
        "info": "INFO",
        "visitors": "VIERAILIJAT",
        "sports-clubs": "URHEILUSEURAT",
        "event-holders": "TAPAHTUMAJÄRJESTÄJÄT",
        "vaasa-region-arenas": "VAASANSEUDUN AREENAT",
        "vaasan-sahko-areena": "VAASAN SÄHKÖ AREENA",
        "botnia-hall": "BOTNIA HALLI",
        "contact": "YHTEYSTIEDOT"
    },
    en: {
        "booking-calendar": "BOOKING CALENDAR",
        "getting-here": "GETTING HERE",
        "info": "INFO",
        "visitors": "VISITORS",
        "sports-clubs": "SPORTS CLUBS",
        "event-holders": "EVENT HOLDERS",
        "vaasa-region-arenas": "VAASA REGION ARENAS",
        "vaasan-sahko-areena": "VAASAN SÄHKÖ AREENA",
        "botnia-hall": "BOTNIA HALL",
        "contact": "CONTACT"
    },
    se: {
        "booking-calendar": "BOKNINGSKALENDER",
        "getting-here": "HITTA HIT",
        "info": "INFO",
        "visitors": "BESÖKARE",
        "sports-clubs": "IDROTTSSÄLLSKAP",
        "event-holders": "EVENEMANGSARRANGÖRER",
        "vaasa-region-arenas": "ARENARNA I VAASAN REGIONEN",
        "vaasan-sahko-areena": "VAASAN ELEKTRISKA AREENA",
        "botnia-hall": "BOTNIA HALLEN",
        "contact": "KONTAKT"
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
    switchLanguage('en');
});