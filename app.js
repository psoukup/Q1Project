$(function() {
    var year;
    var data = { months: ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], days: [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ] }
    for (var i = 2; i <= 31; i++) {
        $("<div class='date'>" + i + "<p></p></div>").appendTo($(".secondarycontainer"));
    }
    $(".date").on("click", function() {
        $(this).append("<div class='ribbon'></div>");

    })
    $("p").on("click", function() {
        $(".ribbon").css("background-color", "green");
    })

    function years(year) {
        if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
            feb.day = 29;
            console.log(feb.day);
            console.log(29);
        } else {
            feb.day = 28;
            console.log(feb.day);
            console.log(28);
        }
    }

})
