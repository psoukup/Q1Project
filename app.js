$(function() {
    var year = 2016;
    var daysinmonth = [];
    var p;

    //Function for leap years
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


    //formula to append days of the week to calendar -- need to get them in a header

    $('.sunday').append("<p>" + arrayDays[0] + "</p>");
    $('.monday').append("<p>" + arrayDays[1] + "</p>");
    $('.tuesday').append("<p>" + arrayDays[2] + "</p>");
    $('.wednesday').append("<p>" + arrayDays[3] + "</p>");
    $('.thursday').append("<p>" + arrayDays[4] + "</p>");
    $('.friday').append("<p>" + arrayDays[5] + "</p>");
    $('.saturday').append("<p>" + arrayDays[6] + "</p>");


    $(".datez").append("<span><button type='button' id='left' class='btn glyphicon glyphicon-chevron-left'></button>" + " " + "<p class='months'> " + months[p] + " " + year + "</p>" + " <span><button type='button' id='right' class='btn glyphicon glyphicon-chevron-right'></button>")


    //adding ribbon datestring
    $(".date").on("click", function() {
        $(this).append("<div class='ribbon'><p></p></div>");
    })
    $("p").on("click", function() {
        $(".ribbon").css("background-color", "green");
    })
    $(".ribbon").on("dblclick", function() {
        $(this).remove();
    })

    $('#right').on("click", function() {
        if (p < 11) {
            p += 1;
        } else {
            p = 0;
            year += 1;
        }
        console.log(p);
        console.log(year);
        $(".months").text(months[p] + " " + year);
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
        $(".months").text(months[p] + " " + year);
    })






})
