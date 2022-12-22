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
    $("#9am").val(localStorage.getItem("hour-9am"));
    $("#10am").val(localStorage.getItem("hour-10am"));
    $("#11am").val(localStorage.getItem("hour-11am"));
    $("#12pm").val(localStorage.getItem("hour-12pm"));
    $("#13pm").val(localStorage.getItem("hour-13pm"));
    $("#14pm").val(localStorage.getItem("hour-14pm"));
    $("#15pm").val(localStorage.getItem("hour-15pm"));
    $("#16pm").val(localStorage.getItem("hour-16pm"));
    $("#17pm").val(localStorage.getItem("hour-17pm"));
}

checkStorage();

hourTracker();
