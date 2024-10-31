jQuery(document).ready(function($) {
  // Search/filter functionality
  $("#eseot-search").on("keyup", function() {
    var searchTerm = $(this).val().toLowerCase();
    $(".eseot-accordion > li").each(function() {
      var categoryName = $(this).find(".eseot-toggle").text().toLowerCase();
      var categoryMatch = categoryName.indexOf(searchTerm) !== -1;

      var sources = $(this).find("li");
      var sourceMatch = false;
      sources.each(function() {
        var sourceName = $(this).find("a").first().text().toLowerCase();
        if (sourceName.indexOf(searchTerm) !== -1) {
          sourceMatch = true;
          $(this).show();
        } else {
          $(this).hide();
        }
      });

      if (categoryMatch || sourceMatch) {
        $(this).show();
        if (searchTerm) {
          $(this).find(".inner").show(); // Show the content when there's a match and search term is not empty
        }
      } else {
        $(this).hide();
      }
    });

    if (!searchTerm) {
      $(".inner").hide(); // Hide the content when the search term is empty
    }
  });
});