


$(document).ready(function () {

    // Прогресс Бар
    $(".progressbar__line").each(function(){
        $(this)
        .data("origWidth", $(this).width())
        .width(0)
        .animate({
            width: $(this).data("origWidth")
        },2000);
    });

    // Прыгающая иконка

    $(document).find('.icon__start').on('click', function(e) {
        e.preventDefault();
        $('.bounce').toggleClass('animate');
    });
    var back = ["#0066FF","#ff7b00","#ff00b3", "#00f7ff", "#000000"];
    $(document).find('.icon__color').on('click', function(e) {
        e.preventDefault();
        var rand = back[Math.floor(Math.random() * back.length)];
        $('.bounce svg').css('fill', rand);
        
    });
})

