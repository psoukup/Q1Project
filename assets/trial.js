$(function() {
    var year = 2016;
    var daysinmonth = [];

//Setting the leapYear
    function leapYear(year) {
        if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
            daysinmonth[2] === 29;
        } else {
            daysinmonth[2] === 28;
        }
    }
    leapYear(year);

//array data for number of days per month, months per year, and days of the week
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var daysinmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var arrayDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


//formula to
    $('.monday').append('<p>' + arrayDays[0] + '</p>');
    $('.tuesday').append('<p>' + arrayDays[1] + '</p>');
    $('.wednesday').append('<p>' + arrayDays[2] + '</p>');
    $('.thursday').append('<p>' + arrayDays[3] + '</p>');
    $('.friday').append('<p>' + arrayDays[4] + '</p>');
    $('.saturday').append('<p>' + arrayDays[5] + '</p>');
    console.log(arrayDays[0])

//Calling the leapYear function

    leapYear(year);

//Initializing calendar app date
    var jan2016 = new Date(2016, 01, 01)
    var p = jan2016.getMonth();
    var weekday = jan2016.getDay();
    console.log(p)

//Buttons that append the year and month when clicked left to right
    $("th").append("<span><button type='button' id='left' class='btn glyphicon glyphicon-chevron-left'></button>" + " " + "<p class='month'> " + months[p] + " " + year + "</p>" + " <span><button type='button' id='right' class='btn glyphicon glyphicon-chevron-right'></button>")

    $('td').on("click", function() {
        $(this).append("<div class='ribbon'></div>");
        $('ribbon').addClass("ribbon");
    });
    $('th').on("click", function() {
        console.log('clicked');
        $('.ribbon').css("background-color", "green")
        $(this).append("<form type='text' class='todo'></form>");
    });

//Formulas to get the proper month data
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


//Formula to add (numbers) days to each box in the table
    for (var i = 1; i <= daysinmonth[p]; i++) {
        $('td').append("<p>" + i + "</p>")
    }


//test to see if zipcode textbox was working - it isnt yet
    $('#zipcode').on("click", function() {
        console.log("clikzzzz");
        console.log($('#zipcode').val())
    });

    //AJAX call for weather from text form asking zip code input

    var zipcode = ($('#zipcode').val());

    // zipcode = 88888;
    // console.log(zipcode)
    
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?zip=" + ($('#zipcode').val()) + ",us&APPID=b3df5655b9b91983bf112d6eef2da821",
        method: "get",
        success: function(data) {
            var skys = data.weather[0].main
            var kelvin = data.main.temp;
            var farenheight = Math.round(1.8 * (kelvin - 273) + 32)
            console.log("Current temperature: " + farenheight + ", " + "current conditions: " + skys)
            $('th').append("<p class='weathersmall'>Current temperature: " + farenheight + ", " + "Current conditions: " + skys + "</p>")
        }
    })
})
