//Food2Fork API - working
function cookAtHome(protein) {
    const queryURL = 'https://cors-anywhere.herokuapp.com/' +'http://food2fork.com/api/search?key=91a38b32cc4fa088106c6c76b28feb95&q=' + protein;
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var obj;
        obj = JSON.parse(response); 
            for (let i = 0; i < 5; i++) {
                let link = document.createElement("a");
                link.textContent = obj.recipes[i].title;
                link.href = obj.recipes[i].source_url;
                document.querySelector("#recipes").appendChild(link);
            }
        }); 
    }

//Protein selector
function selectedMeat() {
    var buttonsArray = document.querySelectorAll(".btn");
    for (var i = 0; i < buttonsArray.length; i++) {
        buttonsArray[i].addEventListener("click", function (e) {
            cookAtHome(e.target.id);
        }, false); 
    }
}

selectedMeat();
