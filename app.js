$(function() {
    var year = 2019;
    var data = { months: ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], days: [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ] }

    var monthAndYear = (data.months[6] + " " + year).toString();

      $("<h1>" + monthAndYear + "</h1>").appendTo(".heading");

      // for (var i = 1; i <= data.days[4]; i++) {

      for (var i = 2; i < 36; i++) {
        $("<div class='date'>" + "<p></p></div>").appendTo($(".secondarycontainer"));

      }

      // }


    $(".date").on("click", function() {
        $(this).append("<div class='ribbon'></div>");

    })
    $("p").on("click", function() {
        $(".ribbon").css("background-color", "green");
    })
    $(".ribbon").on("dblclick", function() {
        $(this).remove();
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

    var year = 2016;
    var days = [];
    for (var i = 1; i <= data.days[2]; i++) {
      var stringparse = (data.months[2] + " " + i + " " + year).toString();
      console.log(stringparse);
      var dateparse = (Date.parse(stringparse));
      var theDate = new Date(dateparse);
      console.log(theDate);
      console.log(theDate.getDay());
      days.push(theDate.getDay());
    }
      console.log(days);



      for (var i = 0; i < days.length; i++) {
        if (days[i] === 0) {
          console.log("Sunday");
        }
        else if (days[i] === 1) {
          console.log("Monday");
        }
        else if (days[i] === 2) {
          console.log("Tuesday");
        }
        else if (days[i] === 3) {
          console.log("Wednesday");
        }
        else if (days[i] === 4) {
          console.log("Thursday");
        }
        else if (days[i] === 5) {
          console.log("Friday");
        }
        else if (days[i] === 6) {
          console.log("Saturday");
        } else {
          return null;
        }
      }








})
