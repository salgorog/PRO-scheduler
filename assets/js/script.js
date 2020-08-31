// Display current day at the top of the calendar
$('#currentTime').text(moment().format('MMMM DD, YYYY'));



//  save button was clicked
$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".task-input").val();
    
    localStorage.setItem(time, value);
});


$("#9am .task-input").val(localStorage.getItem("9am"));
$("#10am .task-input").val(localStorage.getItem("10am"));
$("#11am .task-input").val(localStorage.getItem("11am"));
$("#12pm .task-input").val(localStorage.getItem("12pm"));
$("#1pm .task-input").val(localStorage.getItem("1pm"));
$("#2pm .task-input").val(localStorage.getItem("2pm"));
$("#3pm .task-input").val(localStorage.getItem("3pm"));
$("#4pm .task-input").val(localStorage.getItem("4pm"));
$("#5pm .task-input").val(localStorage.getItem("5pm"));

