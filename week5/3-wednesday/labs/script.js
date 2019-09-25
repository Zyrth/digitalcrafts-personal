
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.omdbapi.com/?i=tt0118799&apikey=1d770128");

// Track the state changes of the request.
xhr.onreadystatechange = function() {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      console.log(xhr.responseText); // 'This is the output.'
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.log("Error: " + xhr.status); // An error occurred during the request.
    }
  }
};
xhr.send(null);

// AJAX
$.ajax({
  type: "GET",
  url: "http://www.omdbapi.com/?i=tt0118799&apikey=1d770128",
  dataType: "JSON", // data type expected from server
  success: function(response) {
    console.log(response);
    showMovieDetails(response.Title, response.Released, response.Rated, response.Runtime, response.Genre, response.Plot);
  },
  error: function(error) {
    console.log("Error: " + error);
  }
});

function showMovieDetails(title, released, rated, runtime, genre, plot) {
  var heading = $("<h1/>").text(title);
  $("body").append(heading);
  var released = $("<h2/>").text(released);
  $("body").append(released);
  var rating = $("<h2/>").text(rated);
  $("body").append(rating);
  var length = $("<p/>").text(runtime);
  $("body").append(length);
  var type = $("<h3/>").text(genre);
  $("body").append(type);
  var summary = $("<p/>").text(plot);
  $("body").append(summary);

  summary.append("<br>" + "<br>" +"In 1930s Italy, a carefree Jewish book keeper named Guido starts a fairy tale life by courting and marrying a lovely woman from a nearby city. Guido and his wife have a son and live happily together until the occupation of Italy by German forces. In an attempt to hold his family together and help his son survive the horrors of a Jewish Concentration Camp, Guido imagines that the Holocaust is a game and that the grand prize for winning is a tank.");
  
}
