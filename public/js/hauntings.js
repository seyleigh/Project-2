// Get references to page elements
var $hauntingText = $("#haunting-text");
var $hauntingCity = $("#haunting-city");
var $hauntingState = $("#haunting-state");
var $hauntingLocation = $("#haunting-location");
var $submitHaunting = $("#submit-haunting");
var $hauntingsTable = $("#hauntings-table");

// The API object contains methods for each kind of request we'll make
var API = {
  saveHaunting: function(haunting) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/hauntings",
      data: JSON.stringify(haunting)
    });
  },
  getHauntings: function() {
    return $.ajax({
      url: "api/hauntings",
      type: "GET"
    });
  },
  deleteHaunting: function(id) {
    return $.ajax({
      url: "api/hauntings/" + id,
      type: "DELETE"
    });
  }
};

// refreshUfoList gets new Hauntings from the db and repopulates the list
var refreshHauntingList = function() {
  API.getHauntings().then(function(data) {
    console.log(data);
    var $hauntings = data.map(function(hauntings) {
      // Create the new row
      var newRow = $("<tr>").append(
        $("<td>").text(hauntings.city),
        $("<td>").text(hauntings.description),
        $("<td>").text(hauntings.location),
        $("<td>").text(hauntings.state_abbrev),
        $("<td>").html(
          "<button class='btn btn-outline-light float-right delete'>x</button>"
        )
      );

      newRow.attr({
        "data-id": hauntings.id
      });

      // Append the new row to the table
      $("#hauntings-table tbody").append(newRow);

      return newRow;

      //   var $li = $("<li>").attr({
      //     class: "list-group-item",
      //     "data-id": ufo.id
      //   });

      //   var $button = $("<button>")
      //     .addClass("btn btn-danger float-right delete")
      //     .text("ｘ");

      //   $li.append($button);

      //   return $li;
    });

    $("#hauntings-table tbody").empty();
    $("#hauntings-table tbody").append($hauntings);
  });
};

// handleFormSubmit is called whenever we submit a new ufo
// Save the new ufo to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var haunting = {
    description: $hauntingText.val().trim(),
    city: $hauntingCity.val().trim(),
    location: $hauntingLocation.val().trim(),
    state_abbrev: $hauntingState.val().trim()
  };

  if (
    !(
      haunting.description &&
      haunting.city &&
      haunting.location &&
      haunting.state_abbrev
    )
  ) {
    swal("Please complete all fields before submitting a Haunting report", {
      button: false
    });
    return;
  }

  API.saveHaunting(haunting).then(function() {
    refreshHauntingList();
  });

  $hauntingText.val("");
  $hauntingCity.val("");
  $hauntingState.val("");
  $hauntingLocation.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  console.log("At least handle delete function is getting called");
  var idToDelete = $(this)
    .parent()
    .parent()
    .attr("data-id");

  API.deleteHaunting(idToDelete).then(function() {
    refreshHauntingList();
  });
};

// Populate list
refreshHauntingList();

// Add event listeners to the submit and delete buttons
$submitHaunting.on("click", handleFormSubmit);
$hauntingsTable.on("click", ".delete", handleDeleteBtnClick);
