 $(document).ready(function() {
 	$('.edit').editable(function(value, settings) {
 		/*
 		console.log(this);
 		console.log(value);
 		console.log(settings);
 		*/

 		/* We simply return the value and let the magic happen */
 		return(value);
 	}, { 
 		submit  : 'OK',
 		cancel  : 'Cancel'
 	});

 	/* copy to clipboard with zeroclipboard */
 	var clip = new ZeroClipboard( document.getElementById("copy-button"), {
 		moviePath: "ZeroClipboard.swf"
 	} );

 	clip.on( 'load', function(client) {
  		// alert( "movie is loaded" );
	} );

 	clip.on( 'complete', function(client, args) {
	  // this.style.display = 'none'; // "this" is the element that was clicked
	  alert("Copied text to clipboard: " + args.html );
	} );
	
	clip.on( 'mouseover', function(client) {
	  // alert("mouse over");
	} );
	
	clip.on( 'mouseout', function(client) {
	  // alert("mouse out");
	} );
	
	clip.on( 'mousedown', function(client) {
	
	  // alert("mouse down");
	} );
	
	clip.on( 'mouseup', function(client) {
	  // alert("mouse up");
	} );

 });