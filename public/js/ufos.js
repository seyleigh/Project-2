// Get references to page elements
var $ufoText = $("#ufo-text");
var $ufoShape = $("#ufo-shape");
var $ufoDuration = $("#ufo-duration");
var $ufoCity = $("#ufo-city");
var $ufoState = $("#ufo-state");
var $submitBtn = $("#submit");
var $ufoTable = $("#ufo-table");

// The API object contains methods for each kind of request we'll make
var API = {
  saveUfo: function(ufo) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/ufos",
      data: JSON.stringify(ufo)
    });
  },
  getUfos: function() {
    return $.ajax({
      url: "api/ufos",
      type: "GET"
    });
  },
  deleteUfo: function(id) {
    return $.ajax({
      url: "api/ufos/" + id,
      type: "DELETE"
    });
  }
};

// refreshUfoList gets new UFOs from the db and repopulates the list
var refreshUfoList = function() {
  API.getUfos().then(function(data) {
    console.log(data);
    var $ufos = data.map(function(ufo) {
      // Create the new row
      var newRow = $("<tr>").append(
        $("<td>").text(ufo.shape),
        $("<td>").text(ufo.duration),
        $("<td>").text(ufo.city),
        $("<td>").text(ufo.state),
        $("<td>").text(ufo.text),
        $("<td>").html(
          "<button class='btn btn-outline-dark float-right delete'>x</button>"
        )
      );
      // Give the row an id based on the db record's primary key, which we can use later to target this report's record in the db
      newRow.attr({
        "data-id": ufo.id
      });

      // Append the new row to the table
      $("#ufoTable tbody").append(newRow);

      return newRow;
    });

    // Empty and re-populate the table with updated info
    $("#ufo-table tbody").empty();
    $("#ufo-table tbody").append($ufos);
  });
};

// handleFormSubmit is called whenever we submit a new ufo
var handleFormSubmit = function(event) {
  event.preventDefault();

  var ufo = {
    text: $ufoText.val().trim(),
    shape: $ufoShape.val().trim(),
    duration: $ufoDuration.val().trim(),
    city: $ufoCity.val().trim(),
    state: $ufoState.val().trim()
  };

  // Ensure all input fields are completed before accepting the form submission
  if (!(ufo.text && ufo.shape && ufo.duration && ufo.city && ufo.state)) {
    swal("Please complete all fields before submitting UFO report", {
      button: false
    });
    return;
  }

  // Save the new ufo to the db and refresh the list
  API.saveUfo(ufo).then(function() {
    refreshUfoList();
  });

  // Clear the submission form's input fields
  $ufoText.val("");
  $ufoShape.val("");
  $ufoDuration.val("");
  $ufoCity.val("");
  $ufoState.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
var handleDeleteBtnClick = function() {
  console.log("At least handle delete function is getting called");
  var idToDelete = $(this)
    .parent()
    .parent()
    .attr("data-id");

  // Remove the example from the db and refresh the list
  API.deleteUfo(idToDelete).then(function() {
    refreshUfoList();
  });
};

// Populate list
refreshUfoList();

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$ufoTable.on("click", ".delete", handleDeleteBtnClick);
