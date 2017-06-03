/*
  When jumping to an anchor link (webaddress#id - takes you partway down the page to where the unique id lives), this offsets by the size of the navigation bar so it doesn't cover up the top bit, like a section header  
*/

/* the amount in pixels we want to offset by */
var offset=100;
  
// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - offset);
  }
}

// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);