// ************************************************
//    
//     [Table of Contents]
//
//     - 
//     - 
//     - 
//     - 
//
//
// ************************************************



// ======
// Header
// ======


// reference: https://momentjs.com/ 
// the moment() method can be used to call the immediate time/date depending on the specified format

// adding (hour:minute:second) clock to header
$("#time").text(moment().format("LTS"));

// adding (day of the week, month day, year) to header
$("#date").text(moment().format("dddd, MMMM Do, YYYY"));



//saveBtn function to save the inputvalue in the local stprage
$(".saveBtn").on("click", function () {
    console.log(this);
    var inputvalue = $(this).siblings(".description").val();
    console.log(inputvalue);

    var keyvalue = $(this).parent().attr("id");
    console.log(keyvalue);

    var inputEl = $(this).siblings(".description")
    console.log(inputEl);

    //Use jQuery to set items in the local storage
    localStorage.setItem(keyvalue, inputvalue);
    var inputEl = localStorage.getItem("keyvalue");


    
})

// Use moment.js fomate to create this function to get current number of hours.
function hourTracker() {
    var currentHour = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(blockHour, currentHour);

        if (blockHour < currentHour) {
            $(this).find("input").addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).find("input").addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
            $(this).find("input").addClass("future");
        }
    });
}

function checkStorage ()  {
    // Reference link: https://www.codegrepper.com/code-examples/javascript/javascript+localstorage+getitem //
    // Refeeence link: https://www.w3schools.com/jsref/prop_win_localstorage.asp//
    $("#9am").val(localStorage.getItem("hour-9am"));
    $("#10am .description").val(localStorage.getItem("hour-10am"));
    $("#11am .description").val(localStorage.getItem("hour-11am"));
    $("#12pm .description").val(localStorage.getItem("hour-12pm"));
    $("#1pm .description").val(localStorage.getItem("hour-1pm"));
    $("#2pm .description").val(localStorage.getItem("hour-2pm"));
    $("#3pm .description").val(localStorage.getItem("hour-3pm"));
    $("#4pm .description").val(localStorage.getItem("hour-4pm"));
    $("#5pm .description").val(localStorage.getItem("hour-5pm"));
    
    // check storage, if true set input values 
}

checkStorage();

// Go back to the hourTracker function
hourTracker();
