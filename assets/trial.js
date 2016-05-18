$(function() {
    var year = 2016;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var jan2016 = new Date(2016, 0, 01)
    var p = jan2016.getMonth();
    var weekday = jan2016.getDay();
    console.log(p)


    $("th").append("<span><button type='button' id='left' class='btn glyphicon glyphicon-chevron-left'></button>" + " " + "<p class='month'> " + months[p] + " " + year + "</p>" + " <span><button type='button' id='right' class='btn glyphicon glyphicon-chevron-right'></button>")

    $('td').on("click", function() {
        $(this).append("<div class='ribbon'></div>");
        $('ribbon').addClass("ribbon");
    });
    $('.ribbon').on("click", function() {
        console.log('clicked');
        $(this).append("<form type='text' class='todo'></form>");
    });

    $('#right').on("click", function() {
        if (p < 11) {
            p += 1;
        } else {
            p = 0;
            year += 1;
        }
        console.log(p);
        console.log(year);
        $(".month").text(months[p] + " " + year);
    });
    $('#left').on("click", function() {
        if (p > 0 && p < 12) {
            p -= 1;
        } else {
            p = 12;
            p -= 1;
            year -= 1;
        }
        console.log(p)
        console.log(year)
        $(".month").text(months[p] + " " + year);
    })

    var datestring = $(".month").text();
    console.log(datestring)
    console.log(typeof datestring)
    var datedata = Date.parse(datestring)
    console.log(datedata)
    var date = new Date(datedata);
    console.log(date)
    var dayz = date.getDay();
    console.log(dayz);
    var daydate = ((date.toJSON()).slice(5, 7));
    console.log(daydate);

    if (dayz === 0) {
        console.log("Sunday")
        $(".sunday").append("<p>" + daydate + "</p>")
    } else if (dayz === 1) {
        console.log("Monday");
        $(".monday").append("<p>" + daydate + "</p>")
    } else if (dayz === 2) {
        console.log("Tuesday");
        $(".tuesday").append("<p>" + daydate + "</p>")
    } else if (dayz === 3) {
        console.log("Wednesday");
        $(".wednesday").append("<p>" + daydate + "</p>")
    } else if (dayz === 4) {
        console.log("Thursday");
        $(".thursday").append("<p>" + daydate + "</p>")
    } else if (dayz === 5) {
        console.log("Friday");
        $(".friday").append("<p>" + daydate + "</p>")
    } else if (dayz === 6) {
        console.log("Saturday");
        $(".saturday").append("<p>" + daydate + "</p>")
    }
    // $('#right').on("click", function() {
    //   if (weekday < 6) {
    //     weekday += 1;
    //   } else {
    //     weekday = 0;
    //   }
    // })
    // $('#left').on("click", function() {
    //   if (weekday >= 0 && weekday < 6) {
    //     p -= 1;
    //   } else {
    //     weekday = 6;
    //     p -= 1;
    //   }
    //   console.log(weekday)
    // })
    var zipcode = $('#zipcode').text()
    // zipcode = 88888;
    console.log(zipcode)
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&APPID=b3df5655b9b91983bf112d6eef2da821",
      method: "get",
      success: function(data) {
        var skys = data.weather[0].main
        var kelvin = data.main.temp;
        var farenheight = Math.round(1.8 * (kelvin - 273) + 32)
        console.log("Current temperature: " + farenheight + ", " + "current conditions: " + skys)
      }
    })
})
