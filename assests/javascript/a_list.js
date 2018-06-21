const selectedCuisine = ['Greek', 'Italian', 'Thai', 'American', 'Indian', 'Chinese', 'Japanese'];
const ingredientsArray = ['tofu', 'brussel sprouts', 'spinach', 'egg whites', 'Himalayan sea salt', 'broccoli slaw', 'coffee', 'matcha', 'almond milk', 
    'watermelon', 'blueberries', 'apple', 'kale', 'cayenne', 'banana', 'almond butter', 'cinnamon', 'cauliflower', 'sweet potato', 'pulled chicken', 
    'pesto', 'edamame pasta', 'roasted garlic', 'olive oil', 'fresh ground pepper', 'salmon', 'lemon', 'ginger', 'curry powder', 'dark chocolate', 
    'red pepper flakes', 'cucumber', 'chick pea', 'hummus', 'almonds', 'bing cherries'];
console.log(selectedCuisine);
console.log(ingredientsArray);

let diningIn = false;
let cuisinePlaces = function() {
    let zomatoOption = $(document).attr("data-name");
    const queryURL = "";
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
        cookAtHome();
    } else {
        return cuisinePlaces;
    }
};
// 
// returns cuisine places here if dining out in the selection.
// 
function changeOfPlans() {
    // displays alternatives.
}
// 
function cookAtHome() {
    // where we call Yummly for the ingredients and return recipes.
}