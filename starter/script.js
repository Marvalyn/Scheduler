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
    var currentTime = parseInt(moment().format("HH"));
    // var scheduleTime = parseInt($("input").attr("id"));


    // $("textarea").each(function() {

    //     if (scheduleTime = currentTime) {
    //         $(this).addClass("present");
    //     } else if (scheduleTime < currentTime) {
    //         $(this).addClass("past");
    //     } else (scheduleTime > currentTime)
    //             $(this).addClass("future");
    // });
    $("input").each(function () {
        // console.log(this);
        var scheduleTime = parseInt($(this).attr("id").split("-")[1]);
        //     console.log(currentTime);
        // console.log(scheduleTime);
        if (scheduleTime < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        } else if (scheduleTime == currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });

};

//(scheduleTime > currentTime)
checkTime();

$(".saveBtn").each(function () {
    console.log(this);
    $(this).on("click", function (event) {
        event.preventDefault();
        var toDo = $(this).siblings("input").val();
        var hourID = $(this).siblings("input").attr("id").split("-")[1];
        // var scheduleItem = localStorage.getItem(hourID);

        localStorage.setItem(hourID, toDo);
    });

});

function renderPlans() {
    // hours to account for: 1, 2, 3, 4, 5, 9, 10, 11, 12
    // starts at 1 because 1 is the lowest hour
    for (var i = 8; i <= 18; i++) {
        // select the 
        $("#-" + i).val(localStorage.getItem(i));
    }
}

renderPlans();