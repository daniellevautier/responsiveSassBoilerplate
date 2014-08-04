//When the DOM tree is loaded
$(document).ready(function() {

    //Add pointer class to .photo .item
    $(".photo .item").addClass("pointer");

    //Hover over photo fade in hidden span
    $(".photo .item").hover(
        function() {
            $(this).find("span").fadeIn();
        },
        function() {
            $(this).find("span").fadeOut();
        }
    );

        $('a.show-more').click(function() {
        $(this).next('.more').show('slow');        
        });

});

