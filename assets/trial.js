$(function() {
  var year = 2016;
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  $("th").append("<p><span><button type='button' class='btn glyphicon glyphicon-chevron-left'></button>" + " " + months[6q] + " " + year + " <span><button type='button' class='btn glyphicon glyphicon-chevron-right'></button></p>")
  $('td').on("click", function() {
    $(this).append("<div class='ribbon'></div>")
    $('ribbon').addClass("ribbon")
  })
  $('.ribbon').on("click", function() {
    $(this).append("<form type='text' class='todo'></form>")
    })
})
