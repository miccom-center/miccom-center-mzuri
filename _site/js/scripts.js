/* My scripts for the MICCoM website */

/*
  When jumping to an anchor link (webaddress#id - takes you partway down the page to where the unique id lives), this offsets by the size of the navigation bar so it doesn't cover up the top bit, like a section header  
*/

// the amount in pixels we want to offset by 
var offset=80;
  
// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - offset);
  }
}

// selects <a> elements with href starting with # which are NOT in the navbar
var jumpLink = 'a[href^="#"]:not(nav):not(nav *)'

// Captures click events of all <a> elements described above
$(document).on('click', jumpLink, function(event) {
  // Click events are captured before hashchanges. 
  // Timeout causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);





/* script for collapsing and expanding submenus in navbar */



/* give all objects in a group the height of the tallest object */



/* toggle button text Show Abstract / Hide Abstract*/
$('.hidden').removeClass('hidden').hide();
$('.toggle-text').click(function() {
    $(this).find('span').each(function() { $(this).toggle(); });
});


/* Move carousel caption -- FIX: flickers on page load. Move where script loads? (bad practice?)*/
 $(function () {
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .carousel-caption');
    $('.new-caption-area').html(caption.html());
    caption.css('display', 'none');

    $(".carousel").on('slide.bs.carousel', function (evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption');
        $('.new-caption-area').html(caption.html());
        caption.css('display', 'none');
    });
});  

/* Activate the Carousel */
$('.carousel').carousel({
      interval: 4000 //changes the speed
});