// var calendar = require('node-calendar');

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
    var arrayDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    //formula to append days of the week to calendar -- need to get them in a header

    $('.sunday').append('<p>' + arrayDays[0] + '</p>');
    $('.monday').append('<p>' + arrayDays[1] + '</p>');
    $('.tuesday').append('<p>' + arrayDays[2] + '</p>');
    $('.wednesday').append('<p>' + arrayDays[3] + '</p>');
    $('.thursday').append('<p>' + arrayDays[4] + '</p>');
    $('.friday').append('<p>' + arrayDays[5] + '</p>');
    $('.saturday').append('<p>' + arrayDays[6] + '</p>');
    console.log(arrayDays[0])

    //Calling the leapYear function

    leapYear(year);

    //Initializing calendar app date & calculates the amount of days in month with var p

    var jan2016 = new Date(2016, 00, 01)
    var p = jan2016.getMonth();
    var weekday = jan2016.getDay();
    console.log(p)

    //Buttons that append the year and month when clicked left to right

    $(".datez").append("<span><button type='button' id='left' class='btn glyphicon glyphicon-chevron-left btn-primary'>&#8592;</button><p class='months'>" + months[p] + " " + year + "</p><button type='button' id='right' class='btn glyphicon glyphicon-chevron-right'>&#8594;</button></span>")



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
        $(".months").text(months[p] + " " + year);
        drawDays(daysinmonth[p],p)
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
        drawDays(daysinmonth[p],p)
    })



    //Formula to add (numbers) days to each box in the table
    function drawDays(monthdays, month){

      clearCalendar();

      // remove old days
      var newdate = new Date(2016, month, 01);
      var startingDay = newdate.getDay();

      console.log("day",startingDay);
      var count = 0;

      for (var i = 0; i < startingDay; i++) {
        $('.one').append("<td class='grey'><p></p></td>")
        count += 1;
      }
      var day = 1;
      for (var i = 1; i <= monthdays; i++) {
        console.log(day);
          if (count < 7) {
              $('.one').append("<td class='click'>" + "<p>" + day + "</p></td>")
              count += 1;
          } else if (count >= 7 && count < 14) {
              $('.two').append("<td>" + "<p>" + day + "</p></td>")
              count += 1;
          } else if (count >= 14 && count < 21) {
              $('.three').append("<td>" + "<p>" + day + "</p></td>")
              count += 1;
          } else if (count >= 21 && count < 28) {
              $('.four').append("<td>" + "<p>" + day + "</p></td>")
              count += 1;
          } else if (count >= 28 && count < 35) {
              $('.five').append("<td>" + "<p>" + day + "</p></td>")
              count += 1;
          } else if (count >= 35 && count < 38) {
              $('.six').append("<td>" + "<p>" + day + "</p></td>")
              count += 1;
          }
          day ++;
      }
    }

    //Adding todo items to each day

    $('.click').on("click", function() {
        $(this).append("<div class='ribbon'></div>");
        $('ribbon').addClass("ribbon");
    });
    $('.ribbon').on("click", "this", function() {
        $(this).css("background-color", "yellow");
    });

    //clears the tds that were added from prior month

    function clearCalendar(){
      $('.one').empty();
      $('.two').empty();
      $('.three').empty();
      $('.four').empty();
      $('.five').empty();
      $('.six').empty();
    }


    //test to see if zipcode textbox was working - it isnt yet but is console logging

    var zipcode = null;

    //AJAX call for weather from text form asking zip code input

    $('#zipcode').on("keypress", function(e) {
      if (e.which == 13)
      zipcode = ($('#zipcode').val());
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&APPID=b3df5655b9b91983bf112d6eef2da821",
        method: "get",
        success: function(data) {
          $('.weathersmall').empty();
          var skys = data.weather[0].main
          var kelvin = data.main.temp;
          var farenheight = Math.round(1.8 * (kelvin - 273) + 32)
          console.log("Current temperature: " + farenheight + ", " + "current conditions: " + skys)
          $('th').append("<p class='weathersmall'>Current temperature: " + farenheight + ", " + "Current conditions: " + skys + "</p>")
        }
      })
  });

    // zipcode = 88888;
    console.log(zipcode)

})
