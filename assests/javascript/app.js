const selectedCuisine = ['Greek', 'Italian', 'Thai', 'American', 'Indian', 'Chinese', 'Japanese', 'Dessert'];
const ingredientsArray = [];
console.log(selectedCuisine);
console.log(ingredientsArray);

// API for Zomato
let diningIn = false;
let cuisinePlaces = function() {
    let zomatoOption = $(document).attr("data-name");
    const queryURL = "https://developers.zomato.com/api/v2.1/searchq="+"&apief145721eeab99e0f51189b27480e26b";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        console.log(queryURL);
        var results = response.data;
        console.log(results);
    });
}
//  let cuisineOptions = {
    //  js for listing the selectedCuisine array
//  }
let availableRecipes = function() {
    // API for Yummly goes here.
    let yummlyOption = $(this).attr("data-name");
    const queryURL = "http://api.yummly.com/v1/api/recipes?_app_id=app-id&_app_key=app-key&your _search_parameters";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        console.log(queryURL);
        var results = response.data;
        console.log(results);
    });
}

var location = function() {
    if (diningIn === true) {
        return ingredientsArray;
        return cookAtHome();
    } else {
        return cuisinePlaces;
    }
};
// 
// returns cuisine places here if dining out in the selection.
// 
function changeOfPlans() {
    // toggles alternatives. button click used as a toggle to the other option.
    // if (cuisinePlaces != true) {
        //return cookAtHome;
        //} else {
            //do nothing
        //}
    //}    
}

function cookAtHome() {
    // where we call Yummly for the ingredients and return recipes.
    //let chosenCuisine == selectedCuisine;
    //let chosenIngredients = user's input;
    //chosenIngredients.push(ingredientsArray[]);
    //const queryURL = "http://api.yummly.com/v1/api/recipes?_app_id=app-id&_app_key=app-key&your _search_parameters";
    //$.ajax({
        //url: queryURL,
        //method: "GET"
    //}).then(function(response){
        //console.log(response);
        //console.log(queryURL);
        //var results = response.data;
        //console.log(results);
    //});
}