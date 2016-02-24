var abc = 0; //Declaring and defining global increement variable

$(document).ready(function() {

//To add new input file field dynamically, on click of "Add More Files" button below function will be executed
    $('#add_more').click(function() {
        $(this).before($("<div/>", {id: 'filediv'}).fadeIn('slow').append(
                $("<input/>", {name: 'files[]', type: 'file', id: 'file'}),        
                $("<br/><br/>")
                ));
    });


});