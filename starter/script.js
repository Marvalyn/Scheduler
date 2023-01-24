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
        console.log(this);
        var scheduleTime = parseInt($(this).attr("id").split("-")[1]);
        console.log(currentTime);
    console.log(scheduleTime);
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

//Doesn't work
saveBtn.on("click", function (event) {
    event.preventDefault();
    var toDo = $(".form-control").val();
   localStorage.setItem("toDo", toDo);

    // toDo.textContent = JSON.parse(localStorage.getItem("toDo"));
});
//Regarding local storage -- get item -- if you applied local storage set item 
//-- you will see each hour listed individually within your application local storage.  to get it, you will need to code for each hour.
// $(".saveBtn").on("click", function () {
//     // Get nearby values of the description in JQuery
//     var text = $(this).siblings(".description").val();
//     var time = $(this).parent().attr("id");

//     // Save text in local storage
//     localStorage.setItem(time, text);
// })

//Now, you calling out check time 
// -- but when the app deploys, it only runs this app once... 
// in order to run this function numerous times, like every 15 seconds, you will want to consider applying a timer to the function 
// -- look up functions in w3 schools.  
// You just need to declare a variable to define the timer applied to the function.