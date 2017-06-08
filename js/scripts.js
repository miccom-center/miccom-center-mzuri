/* My scripts for the MICCoM website */

/* script for collapsing and expanding submenus in navbar */



/* give all objects in a group the height of the tallest object */



/* toggle button text Show Abstract / Hide Abstract*/
$('.hidden').removeClass('hidden').hide();
$('.toggle-text').click(function() {
    $(this).find('span').each(function() { $(this).toggle(); });
});


/* Move carousel caption -- FIX: flickers on page load. Move where script loads? (bad practice?)*/
/* $(function () {
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .carousel-caption');
    $('.new-caption-area').html(caption.html());
    caption.css('display', 'none');

    $(".carousel").on('slide.bs.carousel', function (evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption');
        $('.new-caption-area').html(caption.html());
        caption.css('display', 'none');
    });
});  */

/* Activate the Carousel */
$('.carousel').carousel({
      interval: 4000 //changes the speed
});