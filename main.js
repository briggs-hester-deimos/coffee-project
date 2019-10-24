"use strict"

function renderCoffee(coffee) {
    var html = '';
    html +=  coffee.name + " " ;
    html += '<p class="card-text"><small class="text-muted">' + coffee.roast + '</small></p>';

    return html;
}

function renderCoffeeLight(coffee) {
    var html = '';
    html +=  coffee.name + " " ;
    html += '<p class="card-text"><small class="text-muted">' + coffee.roast + '</small></p>';
if (coffee.roast === "light") {
    return html;
}
}

function renderCoffeeMedium(coffee) {
    var html = '';
    html +=  coffee.name + " " ;
    html += '<p class="card-text"><small class="text-muted">' + coffee.roast + '</small></p>';
    if (coffee.roast === "medium") {
        return html;
    }
}

function renderCoffees(coffees) {
    var html = '<div class="card-columns-3">';
    for(var i = 0; i < coffees.length; i++) {
        html += '<div class="card text-center">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + renderCoffee(coffees[i]) + '</h5>'+
            '</div>' +
            '</div>'
    }
    return html;
}

function renderCoffeesLight(coffees) {
    var html = '<div class="card-columns-3">';
    for(var i = 0; i < coffees.length; i++) {
        html += '<div class="card text-center">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + renderCoffeeLight(coffees[i]) + '</h5>'+
            '</div>' +
            '</div>'
    }
    return html;
}

function renderCoffeesMedium(coffees) {
    var html = '<div class="card-columns-3">';
    for(var i = 0; i < coffees.length; i++) {
        html += '<div class="card text-center">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + renderCoffeeMedium(coffees[i]) + '</h5>'+
            '</div>' +
            '</div>'
    }
    return html;
}
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function chooseCoffee(){
    var html = '<div class="card-columns-3">';
    for(var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().includes(coffeeName.value.toLowerCase())) {
            html += '<div class="card text-center">' +
                '<div class="card-body">' +
                '<h5 class="card-title">' + renderCoffee(coffees[i]) + '</h5>'+
                '</div>' +
                '</div>'
        }
        tbody.innerHTML = html;
    }
}
document.getElementById("coffeeName").addEventListener("keyup", chooseCoffee);


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];



var tbody = document.querySelector('#coffees');
var lbody = document.querySelector('#coffees-light');
var mbody = document.querySelector('#coffees-medium');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);
lbody.innerHTML = renderCoffeesLight(coffees);
mbody.innerHTML = renderCoffeesMedium(coffees);


submitButton.addEventListener('click', updateCoffees);
