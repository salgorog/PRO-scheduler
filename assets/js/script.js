// Display current day at the top of the calendar
$('#currentTime').text(moment().format('MMMM DD, YYYY'));



//  save button was clicked
$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".task-input").val();
    
    localStorage.setItem(time, value);
});