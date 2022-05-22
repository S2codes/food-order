$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 90) {
        $("#mainNav").addClass("stickyNav");
        $("#mainNav").removeClass("navbar-light");
        $("#mainNav").addClass("navbar-dark");
        $("#callus").addClass("text-light");
    } else {
        $("#mainNav").removeClass("stickyNav");
        $("#mainNav").removeClass("navbar-dark");
        $("#mainNav").addClass("navbar-light");
        $("#callus").removeClass("text-light");
    }
});