//Assition of current date

var today = moment();
$("#currentDay").text(today.format("dddd, Do MMM YYYY"));

//Addition of time blocks from 9-5 in html
//each block has 3 columns for time, content and save button
//add time blocks as text area with class off time-block

//add a save button with class of saveBtn
var textField = $(".input-group");
var saveBtn = $('<button class="saveBtn"><i class="fas fa-save"></i></button>');
// textField.append('<button class="saveBtn"><i class="fas fa-save"></i></button>');
textField.append(saveBtn);

//add get & set JSON to add info to client side storage so info stays when page is refreshed
// localStorage.setItem("activity");

//add colour coding for time block
// add variable current
//  for each $span.val
// if val is <current hour add class past
// if val = current hour add class present
// if val is > current hour add class future

//Doesn't work
function checkTime() {
    var currentTime = moment().format("HH");
    var scheduleTime = parseInt($("textarea").attr("id"));
    // var scheduleTime = $("span").val();
    console.log(currentTime);
    console.log(scheduleTime);

    // $("textarea").each(function() {

    //     if (scheduleTime = currentTime) {
    //         $(this).addClass("present");
    //     } else if (scheduleTime < currentTime) {
    //         $(this).addClass("past");
    //     } else (scheduleTime > currentTime)
    //             $(this).addClass("future");
    // });
    $("textarea").each(function () {
        if (scheduleTime < currentTime) {
            $(this).addClass("past");
        } else if (scheduleTime == currentTime) {
            $(this).addClass("present");
        } else (scheduleTime > currentTime)
        $(this).addClass("future");
    });

};

checkTime();

//Doesn't work
saveBtn.on("click", function (event) {
    event.preventDefault();
    var toDo = $(".form-control").val();
   localStorage.setItem("toDo", toDo);

    // toDo.textContent = JSON.parse(localStorage.getItem("toDo"));
});

// $(".saveBtn").on("click", function () {
//     // Get nearby values of the description in JQuery
//     var text = $(this).siblings(".description").val();
//     var time = $(this).parent().attr("id");

//     // Save text in local storage
//     localStorage.setItem(time, text);
// })