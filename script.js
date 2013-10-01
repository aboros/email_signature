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
 });