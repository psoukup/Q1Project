$(function() {
  $('td').on("click", function() {
    $(this).append("<div class='ribbon'></div>")
    $('ribbon').addClass("ribbon")
  })
  $('.ribbon').on("click", function() {
    $(this).append("<form type='text' class='todo'></form>")
    })
})
