$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#userName-signup");
  var passwordInput = $("input#password-signup");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    console.log("heyyyy");
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function() {
        window.location.replace("/home");
        // If there's an error, log the error
      })
      .catch(function(err) {
        $("#alert").css("color", "#ff2b2b");
        $("#alert").fadeIn(500);
      });
  }
});
