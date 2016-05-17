$(function() {

  for (var i = 2; i <= 31; i++) {
  $("<div class='date'>" + i + "<p></p></div>").appendTo($(".secondarycontainer"));
  }
  $(".date").on("click", function() {
    $(this).append("<div class='ribbon'></div>");

  })
  $("p").on("click", function() {
    $(".ribbon").css("background-color", "green");
  })
})
