"use strict";
$(document).scroll(function () {
    $('video').each(function () {
        var offset = $(this).offset().top;
        if (docScroll + docHeight > offset && docScroll < offset + $(this).height() && docWidth > 1200) {
            $(this)[0].play();
        }
        else {
            $(this)[0].pause();
        }
    });
    $('.head').each(function () {
        var offset = $(this).offset().top;
        if (docScroll + 300 > offset) {
            $(this).removeClass("border");
        }

    });
    link = $('.link-next').last().attr('href');

    if ($('.case') && page != link && window.location.pathname != link && docScroll > $(document).height() - docHeight - 100) {

        page = link;
        $('.end-load').load(link + ' #case', function () {
            var html = $('.end-load .case').html();
            $(this).before(html).remove();
            $('.head').each(function () {
                $(this).addClass('border');
            });
            $("img.img_cases").each(function () {
                var src = $(this).data('src');
                $(this).attr('src', src);
            });
        });

    }
    $('.case-anim').each(function () {
        var offset = $(this).offset().top;
        if (docScroll + docHeight * .7 > offset) {
            $(this).addClass("active");
        }
        else {
            $(this).removeClass('active');
        }
    })
});

$(document).ready(function () {
    if (docWidth < 1200) {
        $('video').each(function () {
            $(this).attr('controls', 'true');
        })
    }
});