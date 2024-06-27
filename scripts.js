$(document).ready(function () {
    $('.project-images img').on('click', function () {
        var slideTo = $(this).data('slide-to');
        $('#carouselProject1').carousel(slideTo);
    });
});
