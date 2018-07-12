$( ".nav-item" ).hover( function () {
  $( this ).css( "background-color", "black" ); 
}, function () {
  $( this ).css( "background-color", "gray" )
});

$( "#nav-contact" ).click( function () {
  $( "#contact-wrapper" ).animate( {
    width: "toggle"
  }, "fast" );
});

