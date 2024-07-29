const translations = {
    fi: {
        "lemonsoft-stadion": "LEMONSOFT STADION",
        "lemonsoft-stadion-paragraph": "Yli 6000 istumapaikkaa lähellä kenttää tuovat elämykset iholla uutuuttaan kiiltävällä Lemonsoft Stadionilla. Upeat puitteet ja laadukkaat oheispalvelut mahdollistivat kaiken liikunnan harrastamisesta inspiroiviin kokouksiin, isoihin yleisötapahtumiin ja suuren luokan konsertteihin.",
        "booking-calendar": "VARAUSKALENTERI",
        "getting-here": "SAAPUMINEN",
        "info": "INFO",
        "visitors": "VIERAILIJAT",
        "sports-clubs": "URHEILUSEURAT",
        "event-holders": "TAPAHTUMAJÄRJESTÄJÄT",
        "vaasa-region-arenas": "VAASANSEUDUN AREENAT",
        "vaasan-sahko-areena": "VAASAN SÄHKÖ AREENA",
        "botnia-hall": "BOTNIA HALLI",
        "contact": "YHTEYSTIEDOT",
        "reservations-title": "VUOROJEN VARAUS",
        "reservations-paragraph": "Stadionin kalenterista pääsee näkemään vapaita  ja varattuja vuoroja.",
        "reservations-button": "KÄY VARAAMASSA",
        "lemonsoft-info-title": "TÄMÄ ON LEMONSOFT STADION",
        "lemonsoft-info-paragraph": "Historiaa ja kehitystä urheilun parissa.",
        "lemonsoft-info-button": "LUE LISÄÄ"
    },
    en: {
        "lemonsoft-stadion": "LEMONSOFT STADION",
        "lemonsoft-stadion-paragraph": "More than 6,000 seats close to the field bring new experiences on the skin at the shiny Lemonsoft Stadium. The wonderful setting and high-quality ancillary services made everything possible, from exercising to inspiring meetings, large public events and high-class concerts.",
        "booking-calendar": "BOOKING CALENDAR",
        "getting-here": "GETTING HERE",
        "info": "INFO",
        "visitors": "VISITORS",
        "sports-clubs": "SPORTS CLUBS",
        "event-holders": "EVENT HOLDERS",
        "vaasa-region-arenas": "VAASA REGION ARENAS",
        "vaasan-sahko-areena": "VAASAN SÄHKÖ AREENA",
        "botnia-hall": "BOTNIA HALL",
        "contact": "CONTACT",
        "reservations-title": "RESERVING SCHEDULES",
        "reservations-paragraph": "See free and reserved shifts from the stadions calendar. ",
        "reservations-button": "GO RESERVE",
        "lemonsoft-info-title": "THIS IS LEMONSOFT STADION",
        "lemonsoft-info-paragraph": "History and developement alongside sports.",
        "lemonsoft-info-button": "LEARN MORE"
    },
    se: {
        "lemonsoft-stadion": "LEMNSOFT STADION",
        "lemonsoft-stadion-paragraph": "Mer än 6 000 platser nära planen ger nya upplevelser på huden på det glänsande Lemonsoft Stadium. Den underbara miljön och högkvalitativa kringtjänster gjorde allt möjligt, från träning till inspirerande möten, stora publikevenemang och högklassiga konserter.",
        "booking-calendar": "BOKNINGSKALENDER",
        "getting-here": "HITTA HIT",
        "info": "INFO",
        "visitors": "BESÖKARE",
        "sports-clubs": "IDROTTSSÄLLSKAP",
        "event-holders": "EVENEMANGSARRANGÖRER",
        "vaasa-region-arenas": "ARENARNA I VAASAN REGIONEN",
        "vaasan-sahko-areena": "VAASAN ELEKTRISKA AREENA",
        "botnia-hall": "BOTNIA HALLEN",
        "contact": "KONTAKT",
        "reservations-title": "",
        "reservations-paragraph": "",
        "reservations-button": "",
        "lemonsoft-info-title": "",
        "lemonsoft-info-paragraph": "",
        "lemonsoft-info-button": ""
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