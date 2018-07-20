// MENU
//

$( ".nav-item, button" ).hover( function () {
  $( this ).css( "background-color", "black" ); 
}, function () {
  $( this ).css( "background-color", "gray" )
});

// CONTACT
//

// contact div pop-out

$( "#nav-contact" ).click( function () {
  $( "#contact-wrapper" ).animate( {
    width: "toggle"
  }, "fast" );
});

// CONTACT - FORM
//

// prevents submit button from being pressed more than once 
var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");
form.addEventListener("submit", function (e) {
  setTimeout(function() {
    submitButton.value = "Sending...";
    submitButton.disabled = true;
  }, 1);
});

// print to console when form is submitted 
$( "#email_form" ).submit( function () {
  console.log( "Form submitted." ); 
}); 

// flash success on successful form submit
$( "#email_form" ).on( "submit", function () {
  $( "#alert-wrapper" ).css( "visibility", "visible" );
  $( "#alert-wrapper" ).fadeOut( 5000 ); 
})