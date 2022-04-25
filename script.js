$(function () {

    $(".button1").click(function () {

        clickevent();

    });

    $(document).keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13')
            clickevent();
    });
});


function clickevent() {

    var val1 = $("input").val();
    if (val1 !== '') {
        var elem = $("<li></li>").text(val1);


        $(elem).append("<button class='button2 btn-close btn-close-black'></button>");
        $("#list").append(elem);
        $("input").val('');
        $(".button2").on("click", function () {
            $(this).parent().fadeOut();

        });
    }
}