/* My scripts for the MICCoM website */

/* script for collapsing and expanding submenus in navbar */



/* give all objects in a group the height of the tallest object */



/* toggle button text Show Abstract / Hide Abstract*/
$('.hidden').removeClass('hidden').hide();
$('.toggle-text').click(function() {
    $(this).find('span').each(function() { $(this).toggle(); });
});