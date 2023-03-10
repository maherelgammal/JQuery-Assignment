(function () {

    let allDivs = $('section > p').hide();

    $('section h4').click(function () {
        $(this).next().slideToggle(500);
        allDivs.not($(this).next()).slideUp(500);
    });

})();
$(".closebtn").click(function(){
    $("#mySidenav").width("0px")
    $("#main").css("margin-left", "0px");
})
$(".openNav").click(function(){
    if ($("#mySidenav").width() == "250") {
        $("#mySidenav").width("0px")
        $("#main").css("margin-left", "0px");
    } else {
        $("#mySidenav").width("250px");
        $("#main").css("margin-left", "250px");
    }
})
// Set the date we're counting down to
var countDownDate = new Date("Apr 1, 2023 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    
    document.getElementById("day").innerHTML = days + " Days";
    document.getElementById("hour").innerHTML = hours + " Hours";
    document.getElementById("minute").innerHTML = minutes + " Minutes";
    document.getElementById("second").innerHTML = seconds + " Seconds";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


$(function () {
    let areaMax = 100;
    $("textarea").keyup(function () {
        let length = $(this).val().length;
        let remain = areaMax - length;
        if (remain <= 0) {
            $("form p").css("color", "red")
            $("form p").text("No More Available area");
        } else {
            $("form p span").text(remain);
        }
    });
});