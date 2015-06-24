$(document).ready(function(){
    $('.input').hide(); // Hide all inputs on page load
    
    $('.click-edit').on('click', function() {
        // Hide the editable item
        var clickedElement = $(this);
        clickedElement.hide();
        
        // Now that the clicked element is hidden, show & focus the input.
        // Add a class to track currently edited inputs
        var input = clickedElement.next().show();
        input.focus();
        input.addClass('currently-editing'); 
        
        // When the input that is currently being edited triggers blur event
        // 1. Grab the value and update the clickedElement
        // 2. Hide the input
        // 3. Show the updated element
        // 4. Remove the editing class
        $('.currently-editing').blur(function() {
            clickedElement.html($(this).val());
            $(this).hide();
            clickedElement.show();
            $(this).removeClass('currently-editing');
        });
    });
}); // End Document Ready