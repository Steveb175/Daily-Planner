// Current Date and Time
$("#currentDay").text(dayjs().format("dddd, MMM D, hh:mm:ss a"));
setInterval(function currentTime() {
  $("#currentDay").text(dayjs().format("dddd, MMM D, hh:mm:ss a"));
}, 1000);

// Current time

var currentTime = dayjs();

// Sets current time to hour

currentTime = currentTime.startOf("hour");

// Time set at the start of the day (+9 hours)
var beginningTime = dayjs().startOf("day").add(9, "hours");

//Event Listener to save input to local storage --this works!
$(".saveBtn").click(function () {
  var inputValue = $(this).siblings(".input").val();
  var listHour = $(this).parent().data("hour");
  localStorage.setItem(listHour, inputValue);
});

//array to be used with for loop in ready function
var businessHoursArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];

$(document).ready(function () {
  pastPresentFuture();
  //for loop to loop through and get from local storage --IT WORKS!
  for (var i = 0; i < businessHoursArray.length; i++) {
    var dataSetHour = localStorage.getItem(businessHoursArray[i]);
    $("#input" + businessHoursArray[i]).val(dataSetHour);
  }
});

// Business hours from beginning hour 9 + hours after
var hour9 = beginningTime;
hour9.format("hh:mm a");
var hour10 = beginningTime.add(1, "hour");
hour10.format("hh:mm a");
var hour11 = beginningTime.add(2, "hour");
hour11.format("hh:mm a");
var hour12 = beginningTime.add(3, "hour");
hour12.format("hh:mm a");
var hour1 = beginningTime.add(4, "hour");
hour1.format("hh:mm a");
var hour2 = beginningTime.add(5, "hour");
hour2.format("hh:mm a");
var hour3 = beginningTime.add(6, "hour");
hour3.format("hh:mm a");
var hour4 = beginningTime.add(7, "hour");
hour4.format("hh:mm a");
var hour5 = beginningTime.add(8, "hour");
hour5.format("hh:mm a");

// Function to determine if past/present/future using the business hour variables above
function pastPresentFuture() {
  currentTime = currentTime.startOf("hour");
  if (currentTime.isAfter(hour9)) {
    $("#input9").addClass("past");
  } else if (currentTime.isBefore(hour9)) {
    $("#input9").addClass("future");
  } else if (currentTime.isSame(hour9)) {
    $("#input9").addClass("present");
  }
  if (currentTime.isAfter(hour10)) {
    $("#input10").addClass("past");
  } else if (currentTime.isBefore(hour10)) {
    $("#input10").addClass("future");
  } else if (currentTime.isSame(hour10)) {
    $("#input10").addClass("present");
  }
  if (currentTime.isAfter(hour11)) {
    $("#input11").addClass("past");
  } else if (currentTime.isBefore(hour11)) {
    $("#input11").addClass("future");
  } else if (currentTime.isSame(hour11)) {
    $("#input11").addClass("present");
  }
  if (currentTime.isAfter(hour12)) {
    $("#input12").addClass("past");
  } else if (currentTime.isBefore(hour12)) {
    $("#input12").addClass("future");
  } else if (currentTime.isSame(hour12)) {
    $("#input12").addClass("present");
  }
  if (currentTime.isAfter(hour1)) {
    $("#input1").addClass("past");
  } else if (currentTime.isBefore(hour1)) {
    $("#input1").addClass("future");
  } else if (currentTime.isSame(hour1)) {
    $("#input1").addClass("present");
  }
  if (currentTime.isAfter(hour2)) {
    $("#input2").addClass("past");
  } else if (currentTime.isBefore(hour2)) {
    $("#input2").addClass("future");
  } else if (currentTime.isSame(hour2)) {
    $("#input2").addClass("present");
  }
  if (currentTime.isAfter(hour3)) {
    $("#input3").addClass("past");
  } else if (currentTime.isBefore(hour3)) {
    $("#input3").addClass("future");
  } else if (currentTime.isSame(hour3)) {
    $("#input3").addClass("present");
  }
  if (currentTime.isAfter(hour4)) {
    $("#input4").addClass("past");
  } else if (currentTime.isBefore(hour4)) {
    $("#input4").addClass("future");
  } else if (currentTime.isSame(hour4)) {
    $("#input4").addClass("present");
  }
  if (currentTime.isAfter(hour5)) {
    $("#input5").addClass("past");
  } else if (currentTime.isBefore(hour5)) {
    $("#input5").addClass("future");
  } else if (currentTime.isSame(hour5)) {
    $("#input5").addClass("present");
  }
}
