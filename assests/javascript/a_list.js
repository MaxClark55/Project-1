let tonightsChoice;
let diningIn = false;

// function changeOfPlans()    
function proteinRecipes() {
    console.log(obj.recipes[i]);

}

function cookAtHome(protein) {
    console.log(protein);
    const queryURL = 'https://cors-anywhere.herokuapp.com/' +'http://food2fork.com/api/search?key=91a38b32cc4fa088106c6c76b28feb95&q=' + protein;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
    var obj;
    obj = JSON.parse(response);  
    console.log(obj.recipes[0]);
    for (let i = 0; i < 5; i++) {
        console.log(obj.recipes[i]);
    }
    }); 
}

function selectedMeat() {
    var buttonsArray = document.querySelectorAll(".btn");
    console.log(buttonsArray);
    for (var i = 0; i < buttonsArray.length; i++) {
        buttonsArray[i].addEventListener("click", function (e) {
            console.log(e.target.id);
            cookAtHome(e.target.id);
        }, false); 
    }
    //When user clicks cuisine option from carousel, logs the option and stores in 
    //variable "tonightsChoice"
    // .onclick("button") {
        // tonightsChoice = button.onclick("button")
    // };
}
selectedMeat();