//var to track
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC"

//functions
$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function (response){
        console.log(queryURL);
        console.log(response);

    });







//main process

//events
$("#rock").click(function () { 
   alert("button press");
});
$("#input").click(function () {
    var inputBox = $("#input").val().trim();
    console.log(inputBox); 
});
