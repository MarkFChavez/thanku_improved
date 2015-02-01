$(document).ready(function() {
  $(window).load(function() {
    $("#cards").imagesLoaded(function() {
      $("#cards").masonry({
        columnWidth: 70,
        itemSelector: ".card",
        isOriginLeft: true
      });
    });
  });

  $(".dropdown-button").dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: true,
    hover: false,
    alignment: "left",
    gutter: 0
  });
});
