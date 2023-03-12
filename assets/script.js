// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Current Date and Time
$("#currentDay").text(dayjs().format("dddd, MMM D, hh:mm a"));
setInterval(function currentTime() {
  $("#currentDay").text(dayjs().format("dddd, MMM D, hh:mm a"));
}, 1000);

// Current time

var currentTime = dayjs();

// Sets current time to hour

currentTime = currentTime.startOf("hour");
$("#test-time").text(currentTime);

// Current

// Time set at the start of the day (+9 hours)
var beginningTime = dayjs().startOf("day").add(9, "hours");

//Event Listener to save input to local storage --this works!
$(".saveBtn").click(function () {
  var inputValue = $(this).siblings(".input").val();
  var listHour = $(this).parent().data("hour");
  localStorage.setItem(listHour, inputValue);
});

//for loop to loop through and get from local storage --IT WORKS!
var businessHoursArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < businessHoursArray.length; i++) {
  var dataSetHour = localStorage.getItem(businessHoursArray[i]);
  $("#input" + businessHoursArray[i]).val(dataSetHour);
}

$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// function pastPresentFuture() {
//   businessHour9 = dayjs().startOf("day").add(9, "hours");
//   currentTime = currentTime.startOf("hour");
//   if (currentTime.isAfter(businessHour9)) {
//     $("#input9").addClass("past");
//   } else if (current {
//   }
// }
