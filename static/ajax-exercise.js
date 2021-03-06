"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // Get the fortune and show it in the #fortune-text div
    evt.preventDefault();
    $.get('/fortune', (fortuneResults) => {
        
        $('#fortune-text').html(fortuneResults);
    });
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    // Request weather with that URL and show the forecast in #weather-info
    $.get('/weather.json', formData, (weatherResults) => {
        $('#weather-info').html(weatherResults.forecast);
    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


