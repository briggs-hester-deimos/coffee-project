"use strict";

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

function renderCoffee(coffee) {
    var html = '';
    html +=  coffee.name + " " ;
    html += '<p class="card-text"><small class="text-muted">' + coffee.roast + '</small></p>';

    return html;
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

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    console.log(selectedRoast);
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeesTabs(event, roastSelection) {
    console.log(event);
    event.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection;
    console.log(selectedRoast);
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    console.log(filteredCoffees);
    return renderCoffees(filteredCoffees);
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
document.getElementById("nav-all-tab").addEventListener("click", function(event){
    console.log("in all click");
    dbody.innerHTML = "";
    mbody.innerHTML = "";
    lbody.innerHTML = "";
    document.getElementById("orderRoast").className = "";
});
document.getElementById("nav-light-tab").addEventListener("click", function(event){
    console.log("in light click");
    lbody.innerHTML = updateCoffeesTabs(event, "light");
    mbody.innerHTML = "";
    dbody.innerHTML = "";
    document.getElementById("orderRoast").className = "light";
});
document.getElementById("nav-medium-tab").addEventListener("click", function(event){
    console.log("in medium click");
    mbody.innerHTML = updateCoffeesTabs(event, "medium");
    lbody.innerHTML = "";
    dbody.innerHTML = "";
    document.getElementById("orderRoast").className = "medium";
});
document.getElementById("nav-dark-tab").addEventListener("click", function(event){
    console.log("in dark click");
    dbody.innerHTML = updateCoffeesTabs(event, "dark");
    mbody.innerHTML = "";
    lbody.innerHTML = "";
    document.getElementById("orderRoast").className = "dark";
});

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide



var tbody = document.querySelector('#coffees');
var lbody = document.querySelector('#coffees-light');
var mbody = document.querySelector('#coffees-medium');
var dbody = document.querySelector('#coffees-dark');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);


submitButton.addEventListener('click', updateCoffees);

var order = coffeeName.value;

