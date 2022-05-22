$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 20) {
        $("#mainNav").removeClass("navbar-light");
        $("#mainNav").addClass("stickyNav");
        $("#mainNav").addClass("navbar-dark");
        $("#callus").addClass("text-light");
    } else {
        $("#mainNav").removeClass("stickyNav");
        $("#mainNav").addClass("navbar-light");
        $("#callus").removeClass("text-light");
    }
});