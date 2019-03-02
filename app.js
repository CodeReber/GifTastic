//var to track
$(document).ready(function(){

  var wrestlers = ["The Rock", "Nikki Bella", "Hulk Hogan","Daniel Bryan","The Undertaker","John Cena","Triple H","Roman Reigns","Macho Man Randy Savage","Andre The Giant"];
  //functions
  function displayWrestlerInfo() {
      $("#print").empty();
        // In this case, the "this" keyword refers to the button that was clicked
        var data = $(this).attr("data-name");
  
        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          data + "&api_key=dc6zaTOxFJmzC&limit=10";
  
        // Performing our AJAX GET request
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          // After the data comes back from the API
          .then(function(response) {
            // Storing an array of results in the results variable
            var results = response.data;
            // Looping over every result item
            for (var i = 0; i < results.length; i++) {
  
              // Only taking action if the photo has an appropriate rating
              // if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                // Creating a div for the gif
                var gifDiv = $("<div>");
  
                // Storing the result item's rating
                var title = results[i].title;
  
                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text(title);
  
                // Creating an image tag
                var personImage = $("<img>");
  
                // Giving the image tag an src attribute of a proprty pulled off the
                // result item
                personImage.attr("src", results[i].images.fixed_height.url);
  
                // Appending the paragraph and personImage we created to the "gifDiv" div we created
                gifDiv.append(p);
                gifDiv.append(personImage);
  
                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                
                $("#print").prepend(gifDiv);
                
              // }
            }
          });
      };
      function renderButtons() {
  
        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        // $(".Buttons").empty();
        $(".Buttons").empty();
  
        // Looping through the array of movies
        for (var i = 0; i < wrestlers.length; i++) {
  
          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie-btn to our button
          a.addClass("btn btn-primary mr-1 mt-1");
          // Adding a data-attribute
          a.attr("data-name", wrestlers[i]);
          // Providing the initial button text
          a.text(wrestlers[i]);
          // Adding the button to the buttons-view div
          $(".Buttons").append(a);
        }
      }
  
      $(".add_wrestler").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var wrestler = $("#input").val().trim();
  
        // Adding movie from the textbox to our array
        wrestlers.push(wrestler);
  
        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      })
      
      renderButtons();
      $(document).on("click", ".btn", displayWrestlerInfo);


});






