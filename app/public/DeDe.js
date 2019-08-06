$.get("/api/all", function(data) {

    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("drinks");
  
        row.append("<p>" + data[i].author + " drink.. </p>");
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
        $("#drinks-area").prepend(row);
  
      }
  
    }
  
  });
  
  // When user adds drink (clicks addBtn)
  $("#drinks-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newDrinks object
    var newDrinks = {
      drinks: $("#").val().trim(),
      abv: $("#").val().trim(),
      calories: $(#)
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
    console.log(newDrinks);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newDrinks)
      // On success, run the following code
      .then(function() {
  
        var row = $("<div>");
        row.addClass("drinks");
  
        row.append("<p>" + newDrinks.drinks + " chirped: </p>");
        row.append("<p>" + newDrinks.abv + "</p>");
        row.append("<p>" + newDrinks.calories = "</p>");
        row.append("<p>At " + moment(newDrinks.created_at).format("h:mma on dddd") + "</p>");
  
        $("#drinks-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#drinks").val("");
    $("#drinks-box").val("");
  });
  