const translations = {
    fi: {
        "carousel-slide-1-header": "YLI 6000 ISTUMAPAIKKAA",
        "carousel-slide-1-paragraph": "Koe VPS:n kotikenttä.",
        "carousel-slide-2-header": "LIIKUNTAA, KOKOUKSIA, YLEISÖTAPAHTUMIA & KONSERTTEJA",
        "carousel-slide-2-paragraph": "Monipuolisia palveluja ja mahdollisuuksia.",
        "carousel-slide-3-header": "VUOSI SUUNNITTELUA & TOTEUTUSTA",
        "carousel-slide-3-paragraph": "Taidokasta rakentamista historiaa kunnioittaen.",
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
        "carousel-slide-1-header": "OVER 6000 SEATS",
        "carousel-slide-1-paragraph": "Experience the VPS's homefield.",
        "carousel-slide-2-header": "SPORTS, MEETINGS & CONCERTS",
        "carousel-slide-2-paragraph": "Varying services and opportunities.",
        "carousel-slide-3-header": "DESIGNED & COMPLETED IN A YEAR",
        "carousel-slide-3-paragraph": "Skillful construction with respect for history.",
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
        "carousel-slide-1-header": "ÖVER 6000 PLATSER",
        "carousel-slide-1-paragraph": "Upplev VPS:s hemmaplan.",
        "carousel-slide-2-header": "SPORT, MÖTEN & KONSERTER",
        "carousel-slide-2-paragraph": "Olika tjänster och möjligheter.",
        "carousel-slide-3-header": "DESIGNAD & FÄRDIG PÅ ETT ÅR",
        "carousel-slide-3-paragraph": "Skickligt byggande med respekt för historien.",
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