var lenghart = function() {
    var screenHeight = $(window).height();
    var screenWidth = $(window).width();
    $(window).scroll(function(e) {
        e.preventDefault();
        if ($(window).scrollTop() > 20 && screenWidth > 900) {
            $(".menu__block").addClass("menu__top")
        } else {
            $(".menu__block").removeClass("menu__top")
        }
        if (screenWidth > 766) {
            var hT = $("#s5").offset().top,
                hH = $("#s5").outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop(),
                ratio = wS - (hT + hH - wH),
                main = wH - ratio,
                form = -main * .7,
                info = -main * 1.4;
            if (form > -800) {
                $("#s6 .form").css({
                    "-webkit-transform": "translateY(" + form + "px)",
                    "-moz-transform": "translateY(" + form + "px)",
                    "-o-transform": "translateY(" + form + "px)",
                    transform: "translateY(" + form + "px)"
                })
            }
            if (info > -1300) {
                $("#s6 .info").css({
                    "-webkit-transform": "translateY(" + info + "px)",
                    "-moz-transform": "translateY(" + info + "px)",
                    "-o-transform": "translateY(" + info + "px)",
                    transform: "translateY(" + info + "px)"
                })
            }
        }
        if (screenWidth > 1198) {
            var hT = $("#s5").offset().top,
                hH = $("#s5").outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop(),
                ratio = wS - (hT + hH - wH),
                main = wH - ratio,
                left_1 = -main * 3,
                left_2 = -main * 2,
                left_3 = -main * 1.5,
                right_1 = -main * 1.8,
                right_2 = -main * 1.2,
                right_3 = -main * .8;
            if (left_1 > -700) {
                $("#s6 .left_1").css({
                    "-webkit-transform": "translateY(" + left_1 + "px)",
                    "-moz-transform": "translateY(" + left_1 + "px)",
                    "-o-transform": "translateY(" + left_1 + "px)",
                    transform: "translateY(" + left_1 + "px)"
                })
            }
            if (left_2 > -800) {
                $("#s6 .left_2").css({
                    "-webkit-transform": "translateY(" + left_2 + "px)",
                    "-moz-transform": "translateY(" + left_2 + "px)",
                    "-o-transform": "translateY(" + left_2 + "px)",
                    transform: "translateY(" + left_2 + "px)"
                })
            }
            if (left_3 > -1e3) {
                $("#s6 .left_3").css({
                    "-webkit-transform": "translateY(" + left_3 + "px)",
                    "-moz-transform": "translateY(" + left_3 + "px)",
                    "-o-transform": "translateY(" + left_3 + "px)",
                    transform: "translateY(" + left_3 + "px)"
                })
            }
            if (right_1 > -750) {
                $("#s6 .right_1").css({
                    "-webkit-transform": "translateY(" + right_1 + "px)",
                    "-moz-transform": "translateY(" + right_1 + "px)",
                    "-o-transform": "translateY(" + right_1 + "px)",
                    transform: "translateY(" + right_1 + "px)"
                })
            }
            if (right_2 > -1e3) {
                $("#s6 .right_2").css({
                    "-webkit-transform": "translateY(" + right_2 + "px)",
                    "-moz-transform": "translateY(" + right_2 + "px)",
                    "-o-transform": "translateY(" + right_2 + "px)",
                    transform: "translateY(" + right_2 + "px)"
                })
            }
            if (right_3 > -600) {
                $("#s6 .right_3").css({
                    "-webkit-transform": "translateY(" + right_3 + "px)",
                    "-moz-transform": "translateY(" + right_3 + "px)",
                    "-o-transform": "translateY(" + right_3 + "px)",
                    transform: "translateY(" + right_3 + "px)"
                })
            }
        }
    });
    if (screenHeight > 470 && screenWidth > 542) {
        setTimeout(function() {
            $(".menu__block").animate({
                opacity: 1,
                marginTop: "30px"
            }, 700)
        }, 5300)
    } else {
        setTimeout(function() {
            $(".menu__block").animate({
                opacity: 1,
                marginTop: "10px"
            }, 700)
        }, 5300)
    }
    if (screenWidth < 470 || screenHeight < 470) {
        $(".promo__content .sub").removeClass("parallax")
    }
    if (screenWidth < 991) {
        $(".scroll__down").removeClass("parallax")
    }
    if (screenWidth < 767) {}
    setTimeout(function() {
        $(".title .ch13").delay(390).animate({
            opacity: 1
        }, 100);
        $(".title .ch12").delay(360).animate({
            opacity: 1
        }, 120);
        $(".title .ch11").delay(330).animate({
            opacity: 1
        }, 130);
        $(".title .ch10").delay(300).animate({
            opacity: 1
        }, 140);
        $(".title .ch9").delay(270).animate({
            opacity: 1
        }, 150);
        $(".title .ch8").delay(240).animate({
            opacity: 1
        }, 160);
        $(".title .ch7").delay(210).animate({
            opacity: 1
        }, 170);
        $(".title .ch6").delay(180).animate({
            opacity: 1
        }, 180);
        $(".title .ch5").delay(150).animate({
            opacity: 1
        }, 190);
        $(".title .ch4").delay(120).animate({
            opacity: 1
        }, 200);
        $(".title .ch3").delay(90).animate({
            opacity: 1
        }, 210);
        $(".title .ch2").delay(60).animate({
            opacity: 1
        }, 210);
        $(".title .ch1").delay(30).animate({
            opacity: 1
        }, 220);
        $("#s1 .border .in").animate({
            width: "0%"
        }, 390)
    }, 5050);
    setTimeout(function() {
        $("#s1 .name").animate({
            opacity: 1,
            marginTop: "35px"
        }, 200)
    }, 5500);
    setTimeout(function() {
        $("#s1 .text").filter(":nth-child(2)").animate({
            opacity: 1,
            marginTop: "75px"
        }, 200)
    }, 5650);
    setTimeout(function() {
        $("#s1 .text").filter(":nth-child(3)").animate({
            opacity: 1,
            marginTop: "10px"
        }, 200)
    }, 5750);
    $("#s2 .title__2").one("inview", function(event, visible) {
        if (visible == true) {
            setTimeout(function() {
                $(".title__2 .ch9").delay(270).animate({
                    opacity: 1
                }, 150);
                $(".title__2 .ch8").delay(240).animate({
                    opacity: 1
                }, 160);
                $(".title__2 .ch7").delay(210).animate({
                    opacity: 1
                }, 170);
                $(".title__2 .ch6").delay(180).animate({
                    opacity: 1
                }, 180);
                $(".title__2 .ch5").delay(150).animate({
                    opacity: 1
                }, 190);
                $(".title__2 .ch4").delay(120).animate({
                    opacity: 1
                }, 200);
                $(".title__2 .ch3").delay(90).animate({
                    opacity: 1
                }, 210);
                $(".title__2 .ch2").delay(60).animate({
                    opacity: 1
                }, 210);
                $(".title__2 .ch1").delay(30).animate({
                    opacity: 1
                }, 220);
                $("#s2 .border .in").animate({
                    width: "0%"
                }, 390)
            }, 1e3);
            setTimeout(function() {
                $("#s2 .main__title .text").delay(500).animate({
                    opacity: 1
                }, 400)
            }, 1e3);
            setTimeout(function() {
                $(".timeline .one").delay(50).animate({
                    opacity: 1
                }, 500);
                $(".timeline #line_01").delay(700).animate({
                    opacity: 1
                }, 100);
                $(".timeline .two").delay(550).animate({
                    opacity: 1
                }, 500);
                $(".timeline #line_02").delay(1200).animate({
                    opacity: 1
                }, 100);
                $(".timeline .three").delay(1050).animate({
                    opacity: 1
                }, 500);
                $(".timeline #line_03").delay(1700).animate({
                    opacity: 1
                }, 100);
                $(".timeline .four").delay(1550).animate({
                    opacity: 1
                }, 500)
            }, 2e3)
        }
    });
    $("#line_01 > line").attr({
        x1: $(".timeline .one .circle").offset().left - $(".timeline").offset().left + $(".timeline .one .circle").width() / 2,
        y1: $(".timeline .one .circle").offset().top - $(".timeline").offset().top + $(".timeline .one .circle").height() / 2,
        x2: $(".timeline .two .circle").offset().left - $(".timeline").offset().left + $(".timeline .two .circle").width() / 2,
        y2: $(".timeline .two .circle").offset().top - $(".timeline").offset().top + $(".timeline .two .circle").height() / 2,
        style: "stroke:#e74c3c;stroke-width:2"
    });
    $("#line_02 > line").attr({
        x1: $(".timeline .two .circle").offset().left - $(".timeline").offset().left + $(".timeline .two .circle").width() / 2,
        y1: $(".timeline .two .circle").offset().top - $(".timeline").offset().top + $(".timeline .two .circle").height() / 2,
        x2: $(".timeline .three .circle").offset().left - $(".timeline").offset().left + $(".timeline .three .circle").width() / 2,
        y2: $(".timeline .three .circle").offset().top - $(".timeline").offset().top + $(".timeline .three .circle").height() / 2,
        style: "stroke:#e74c3c;stroke-width:2"
    });
    $("#line_03 > line").attr({
        x1: $(".timeline .three .circle").offset().left - $(".timeline").offset().left + $(".timeline .three .circle").width() / 2,
        y1: $(".timeline .three .circle").offset().top - $(".timeline").offset().top + $(".timeline .three .circle").height() / 2,
        x2: $(".timeline .four .circle").offset().left - $(".timeline").offset().left + $(".timeline .four .circle").width() / 2,
        y2: $(".timeline .four .circle").offset().top - $(".timeline").offset().top + $(".timeline .four .circle").height() / 2,
        style: "stroke:#e74c3c;stroke-width:2"
    });
    $(".lines").css("height", $(".timeline").height());
    $("#s3 .title__3").one("inview", function(event, visible) {
        if (visible == true) {
            setTimeout(function() {
                $(".title__3 .ch10").delay(300).animate({
                    opacity: 1
                }, 140);
                $(".title__3 .ch9").delay(270).animate({
                    opacity: 1
                }, 150);
                $(".title__3 .ch8").delay(240).animate({
                    opacity: 1
                }, 160);
                $(".title__3 .ch7").delay(210).animate({
                    opacity: 1
                }, 170);
                $(".title__3 .ch6").delay(180).animate({
                    opacity: 1
                }, 180);
                $(".title__3 .ch5").delay(150).animate({
                    opacity: 1
                }, 190);
                $(".title__3 .ch4").delay(120).animate({
                    opacity: 1
                }, 200);
                $(".title__3 .ch3").delay(90).animate({
                    opacity: 1
                }, 210);
                $(".title__3 .ch2").delay(60).animate({
                    opacity: 1
                }, 210);
                $(".title__3 .ch1").delay(30).animate({
                    opacity: 1
                }, 220);
                $("#s3 .border .in").animate({
                    width: "0%"
                }, 390)
            }, 1e3)
        }
    });
    var wrapWidth = $(".images").width();
    var width_a = 0;
    var width_b = wrapWidth * .5;
    var width_c = wrapWidth * 1;
    $("#full__image").css("clip", "rect(0px, " + width_b + "px, 600px, 0px)");
    $("#full__image, #left__content").hover(function() {
        $("#full__image").css("clip", "rect(0px, " + width_c + "px, 600px, 0px)");
        $("#left__content").stop().animate({
            opacity: 1
        }, 500);
        $(".hidden__part.left").stop().animate({
            opacity: 1
        }, 500)
    }, function() {
        $("#full__image").css("clip", "rect(0px, " + width_b + "px, 600px, 0px)");
        $(".hidden__part.left").stop().animate({
            opacity: 0
        }, 500)
    });
    $("#outline-image, #right__content").hover(function() {
        $("#full__image").css("clip", "rect(0px, " + width_a + "px, 600px, 0px)");
        $("#right__content").stop().animate({
            opacity: 1
        }, 500);
        $(".hidden__part.right").stop().animate({
            opacity: 1
        }, 500)
    }, function() {
        $("#full__image").css("clip", "rect(0px, " + width_b + "px, 600px, 0px)");
        $(".hidden__part.right").stop().animate({
            opacity: 0
        }, 500)
    });
    $("#s4 .title__4").on("inview", function(event, visible) {
        if (visible == true) {
            setTimeout(function() {
                $(".title__4 .ch7").delay(210).animate({
                    opacity: 1
                }, 170);
                $(".title__4 .ch6").delay(180).animate({
                    opacity: 1
                }, 180);
                $(".title__4 .ch5").delay(150).animate({
                    opacity: 1
                }, 190);
                $(".title__4 .ch4").delay(120).animate({
                    opacity: 1
                }, 200);
                $(".title__4 .ch3").delay(90).animate({
                    opacity: 1
                }, 210);
                $(".title__4 .ch2").delay(60).animate({
                    opacity: 1
                }, 210);
                $(".title__4 .ch1").delay(30).animate({
                    opacity: 1
                }, 220);
                $("#s4 .border .in").animate({
                    width: "0%"
                }, 390)
            }, 1e3)
        }
    });
    $("#s5 .title__5").on("inview", function(event, visible) {
        if (visible == true) {
            setTimeout(function() {
                $(".title__5 .ch6").delay(180).animate({
                    opacity: 1
                }, 180);
                $(".title__5 .ch5").delay(150).animate({
                    opacity: 1
                }, 190);
                $(".title__5 .ch4").delay(120).animate({
                    opacity: 1
                }, 200);
                $(".title__5 .ch3").delay(90).animate({
                    opacity: 1
                }, 210);
                $(".title__5 .ch2").delay(60).animate({
                    opacity: 1
                }, 210);
                $(".title__5 .ch1").delay(30).animate({
                    opacity: 1
                }, 220);
                $("#s5 .border .in").animate({
                    width: "0%"
                }, 390)
            }, 1e3)
        }
    });
    $("#s6 .title__6").on("inview", function(event, visible) {
        if (visible == true) {
            setTimeout(function() {
                $(".title__6 .ch7").delay(210).animate({
                    opacity: 1
                }, 170);
                $(".title__6 .ch6").delay(180).animate({
                    opacity: 1
                }, 180);
                $(".title__6 .ch5").delay(150).animate({
                    opacity: 1
                }, 190);
                $(".title__6 .ch4").delay(120).animate({
                    opacity: 1
                }, 200);
                $(".title__6 .ch3").delay(90).animate({
                    opacity: 1
                }, 210);
                $(".title__6 .ch2").delay(60).animate({
                    opacity: 1
                }, 210);
                $(".title__6 .ch1").delay(30).animate({
                    opacity: 1
                }, 220);
                $("#s6 .border .in").animate({
                    width: "0%"
                }, 390)
            }, 1e3)
        }
    });
    if (screenWidth > 766) {
        var bh = screenHeight - 266;
        $("section#s6 .blocks").css("height", bh + "px")
    } else {
        $("section#s6 .blocks").css("height", "initial")
    }
    if (screenWidth > 766) {
        var fadeStartTitle = 0,
            fadeUntilTitle = 80,
            fadingTitle = $(".promo__content h1");
        var fadeStartText = 100,
            fadeUntilText = 500,
            fadingText = $(".promo__content .sub");
        $(window).bind("scroll", function() {
            var offset = $(document).scrollTop(),
                opacity = 0;
            if (offset <= fadeStartTitle) {
                opacity = 1
            } else if (offset <= fadeUntilTitle) {
                opacity = 1 - offset / fadeUntilTitle
            }
            fadingTitle.css("opacity", opacity);
            if (offset <= fadeStartText) {
                opacity = 1
            } else if (offset <= fadeUntilText) {
                opacity = 1 - offset / fadeUntilText
            }
            fadingText.css("opacity", opacity)
        })
    }
};
$(document).ready(lenghart);
$(window).resize(lenghart);
$(document).ready(function() {
    var screenWidth = $(window).width();
    if (screenWidth > 800) {
        $(".number").counterUp({
            delay: 700,
            time: 4200
        })
    }
    $(".frontend__number").counterUp({
        time: 3e3
    });
    $("#s4 .main__content").one("inview", function(event, visible) {
        if (visible == true) {
            setTimeout(svg__skills, 1500);
            setTimeout(text__skill, 2e3);
            setTimeout(svg__line_1, 3e3);
            setTimeout(svg__creativity, 4e3);
            setTimeout(text__creativity, 5e3);
            setTimeout(svg__line_2, 5600);
            setTimeout(svg__speed, 6300);
            setTimeout(text__speed, 7300);
            setTimeout(svg__line_3, 7900);
            setTimeout(svg__responsive, 8500);
            setTimeout(text__responsive, 9500);
            setTimeout(svg__line_4, 10300);
            setTimeout(svg__friendly, 11e3);
            setTimeout(text__friendly, 12e3);
            setTimeout(svg__line_5, 12800);
            setTimeout(svg__technology, 13500);
            setTimeout(text__technology, 14500);
            setTimeout(replay__button, 15500)
        }
    });

    function svg__skills() {
        new DrawFillSVG({
            elementId: "svg__skills"
        })
    }

    function svg__line_1() {
        new DrawFillSVG({
            elementId: "svg__line_1"
        })
    }

    function svg__creativity() {
        new DrawFillSVG({
            elementId: "svg__creativity"
        })
    }

    function svg__line_2() {
        new DrawFillSVG({
            elementId: "svg__line_2"
        })
    }

    function svg__speed() {
        new DrawFillSVG({
            elementId: "svg__speed"
        })
    }

    function svg__line_3() {
        new DrawFillSVG({
            elementId: "svg__line_3"
        })
    }

    function svg__responsive() {
        new DrawFillSVG({
            elementId: "svg__responsive"
        })
    }

    function svg__line_4() {
        new DrawFillSVG({
            elementId: "svg__line_4"
        })
    }

    function svg__friendly() {
        new DrawFillSVG({
            elementId: "svg__friendly"
        })
    }

    function svg__line_5() {
        new DrawFillSVG({
            elementId: "svg__line_5"
        })
    }

    function svg__technology() {
        new DrawFillSVG({
            elementId: "svg__technology"
        })
    }

    function text__skill() {
        $(".text__skills h3").delay(0).animate({
            opacity: 1,
            marginTop: "0px"
        }, 300);
        $(".text__skills p").delay(200).animate({
            opacity: 1,
            marginTop: "0px"
        }, 600)
    }

    function text__creativity() {
        $(".text__creativity h3").delay(0).animate({
            opacity: 1,
            marginTop: "0px"
        }, 300);
        $(".text__creativity p").delay(200).animate({
            opacity: 1,
            marginTop: "0px"
        }, 600)
    }

    function text__speed() {
        $(".text__speed h3").delay(0).animate({
            opacity: 1,
            marginTop: "0px"
        }, 300);
        $(".text__speed p").delay(200).animate({
            opacity: 1,
            marginTop: "0px"
        }, 600)
    }

    function text__responsive() {
        $(".text__responsive h3").delay(0).animate({
            opacity: 1,
            marginTop: "0px"
        }, 300);
        $(".text__responsive p").delay(200).animate({
            opacity: 1,
            marginTop: "0px"
        }, 600)
    }

    function text__friendly() {
        $(".text__friendly h3").delay(0).animate({
            opacity: 1,
            marginTop: "0px"
        }, 300);
        $(".text__friendly p").delay(200).animate({
            opacity: 1,
            marginTop: "0px"
        }, 600)
    }

    function text__technology() {
        $(".text__technology h3").delay(0).animate({
            opacity: 1,
            marginTop: "0px"
        }, 300);
        $(".text__technology p").delay(200).animate({
            opacity: 1,
            marginTop: "0px"
        }, 600)
    }

    function replay__button() {
        $(".replay").animate({
            opacity: 1
        }, 300)
    }
    $("#replay").click(function() {
        $("#s4 path").each(function() {
            $(this).css({
                "fill-opacity": 0,
                "stroke-opacity": "0",
                transition: "none",
                "stroke-dasharray": 0
            })
        });
        $("#s4 h3").each(function() {
            $(this).css({
                opacity: 0,
                "margin-top": "10px"
            })
        });
        $("#s4 p").each(function() {
            $(this).css({
                opacity: 0,
                "margin-top": "15px"
            })
        });
        $(".replay").css("opacity", 0);
        setTimeout(svg__skills, 1500);
        setTimeout(text__skill, 2e3);
        setTimeout(svg__line_1, 3e3);
        setTimeout(svg__creativity, 4e3);
        setTimeout(text__creativity, 5e3);
        setTimeout(svg__line_2, 5600);
        setTimeout(svg__speed, 6300);
        setTimeout(text__speed, 7300);
        setTimeout(svg__line_3, 7900);
        setTimeout(svg__responsive, 8500);
        setTimeout(text__responsive, 9500);
        setTimeout(svg__line_4, 10300);
        setTimeout(svg__friendly, 11e3);
        setTimeout(text__friendly, 12e3);
        setTimeout(svg__line_5, 12800);
        setTimeout(svg__technology, 13500);
        setTimeout(text__technology, 14500);
        setTimeout(replay__button, 15500)
    })
});
var screenWidth = $(window).width();
$(document).ready(function() {
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on("click", function(e) {
        e.preventDefault();
        $(document).off("scroll");
        $("nav ul li").each(function() {
            $(this).removeClass("current")
        });
        $(this).parent().addClass("current");
        var target = this.hash,
            menu = target;
        $target = $(target);
        $("html, body").stop().animate({
            scrollTop: $target.offset().top + 2
        }, 1e3, "swing", function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll)
        })
    })
});
if (screenWidth > 990) {
    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $("nav ul li a").each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            var exist = $(refElement);
            if (exist.length) {
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $("nav ul li").removeClass("current");
                    currLink.parent().addClass("current")
                } else {
                    currLink.removeClass("current")
                }
            }
        })
    }
}
$(window).scroll(function(e) {
    e.preventDefault();
    var scrollTop = $(window).scrollTop();

    function Utils() {}
    Utils.prototype = {
        constructor: Utils,
        isElementInView: function(element, fullyInView) {
            var pageTop = $(window).scrollTop();
            var pageBottom = pageTop + $(window).height();
            var nav = $(element);
            if (nav.length) {
                var elementTop = $(element).offset().top;
                var elementBottom = elementTop + $(element).height();
                elementTop = elementTop + 50;
                if (fullyInView === true) {
                    return pageTop < elementTop && pageBottom > elementBottom
                } else {
                    return elementBottom <= pageBottom && elementTop >= pageTop
                }
            }
        }
    };
    var Utils = new Utils;
    var titleParalax = Utils.isElementInView($(".title.parallax"), false);
    var subParalax = Utils.isElementInView($(".sub.parallax"), false);
    var scroll__downParalax = Utils.isElementInView($(".scroll__down.parallax"), false);
    if (titleParalax) {
        var ratio = $(".title.parallax").attr("data-parallax-ratio");
        $(".title.parallax").css({
            "-webkit-transform": "translateY(" + scrollTop * ratio + "px)",
            "-moz-transform": "translateY(" + scrollTop * ratio + "px)",
            "-o-transform": "translateY(" + scrollTop * ratio + "px)",
            transform: "translateY(" + scrollTop * ratio + "px)"
        })
    }
    if (subParalax) {
        var ratio = $(".sub.parallax").attr("data-parallax-ratio");
        $(".sub.parallax").css({
            "-webkit-transform": "translateY(" + scrollTop * ratio + "px)",
            "-moz-transform": "translateY(" + scrollTop * ratio + "px)",
            "-o-transform": "translateY(" + scrollTop * ratio + "px)",
            transform: "translateY(" + scrollTop * ratio + "px)"
        })
    }
    if (scroll__downParalax) {
        var ratio = $(".scroll__down.parallax").attr("data-parallax-ratio");
        $(".scroll__down.parallax").css({
            "-webkit-transform": "translateY(" + scrollTop * ratio + "px)",
            "-moz-transform": "translateY(" + scrollTop * ratio + "px)",
            "-o-transform": "translateY(" + scrollTop * ratio + "px)",
            transform: "translateY(" + scrollTop * ratio + "px)"
        })
    }
    var degrees1 = scrollTop * -.65;
    var degrees2 = scrollTop * -.6;
    var degrees3 = scrollTop * -.55;
    var degrees4 = scrollTop * -.5;
    var degrees5 = scrollTop * -.45;
    var degrees6 = scrollTop * -.4;
    var degrees7 = scrollTop * -.3;
    var degrees8 = scrollTop * .4;
    var degrees9 = scrollTop * .45;
    var degrees10 = scrollTop * .5;
    var degrees11 = scrollTop * .55;
    var degrees12 = scrollTop * .6;
    var degrees13 = scrollTop * .65;
    if (scrollTop < 200 && scrollTop >= -10) {
        $(".title h1 span").css({
            letterSpacing: scrollTop / 4
        });
        $(".title h1 span.ch1").css({
            "-webkit-transform": "rotate(" + degrees1 + "deg)",
            "-moz-transform": "rotate(" + degrees1 + "deg)",
            "-ms-transform": "rotate(" + degrees1 + "deg)",
            "-o-transform": "rotate(" + degrees1 + "deg)",
            transform: "rotate(" + degrees1 + "deg)"
        });
        $(".title h1 span.ch2").css({
            "-webkit-transform": "rotate(" + degrees2 + "deg)",
            "-moz-transform": "rotate(" + degrees2 + "deg)",
            "-ms-transform": "rotate(" + degrees2 + "deg)",
            "-o-transform": "rotate(" + degrees2 + "deg)",
            transform: "rotate(" + degrees2 + "deg)"
        });
        $(".title h1 span.ch3").css({
            "-webkit-transform": "rotate(" + degrees3 + "deg)",
            "-moz-transform": "rotate(" + degrees3 + "deg)",
            "-ms-transform": "rotate(" + degrees3 + "deg)",
            "-o-transform": "rotate(" + degrees3 + "deg)",
            transform: "rotate(" + degrees3 + "deg)"
        });
        $(".title h1 span.ch4").css({
            "-webkit-transform": "rotate(" + degrees4 + "deg)",
            "-moz-transform": "rotate(" + degrees4 + "deg)",
            "-ms-transform": "rotate(" + degrees4 + "deg)",
            "-o-transform": "rotate(" + degrees4 + "deg)",
            transform: "rotate(" + degrees4 + "deg)"
        });
        $(".title h1 span.ch5").css({
            "-webkit-transform": "rotate(" + degrees5 + "deg)",
            "-moz-transform": "rotate(" + degrees5 + "deg)",
            "-ms-transform": "rotate(" + degrees5 + "deg)",
            "-o-transform": "rotate(" + degrees5 + "deg)",
            transform: "rotate(" + degrees5 + "deg)"
        });
        $(".title h1 span.ch6").css({
            "-webkit-transform": "rotate(" + degrees6 + "deg)",
            "-moz-transform": "rotate(" + degrees6 + "deg)",
            "-ms-transform": "rotate(" + degrees6 + "deg)",
            "-o-transform": "rotate(" + degrees6 + "deg)",
            transform: "rotate(" + degrees6 + "deg)"
        });
        $(".title h1 span.ch7").css({
            "-webkit-transform": "rotate(" + degrees7 + "deg)",
            "-moz-transform": "rotate(" + degrees7 + "deg)",
            "-ms-transform": "rotate(" + degrees7 + "deg)",
            "-o-transform": "rotate(" + degrees7 + "deg)",
            transform: "rotate(" + degrees7 + "deg)"
        });
        $(".title h1 span.ch8").css({
            "-webkit-transform": "rotate(" + degrees8 + "deg)",
            "-moz-transform": "rotate(" + degrees8 + "deg)",
            "-ms-transform": "rotate(" + degrees8 + "deg)",
            "-o-transform": "rotate(" + degrees8 + "deg)",
            transform: "rotate(" + degrees8 + "deg)"
        });
        $(".title h1 span.ch9").css({
            "-webkit-transform": "rotate(" + degrees9 + "deg)",
            "-moz-transform": "rotate(" + degrees9 + "deg)",
            "-ms-transform": "rotate(" + degrees9 + "deg)",
            "-o-transform": "rotate(" + degrees9 + "deg)",
            transform: "rotate(" + degrees9 + "deg)"
        });
        $(".title h1 span.ch10").css({
            "-webkit-transform": "rotate(" + degrees10 + "deg)",
            "-moz-transform": "rotate(" + degrees10 + "deg)",
            "-ms-transform": "rotate(" + degrees10 + "deg)",
            "-o-transform": "rotate(" + degrees10 + "deg)",
            transform: "rotate(" + degrees10 + "deg)"
        });
        $(".title h1 span.ch11").css({
            "-webkit-transform": "rotate(" + degrees11 + "deg)",
            "-moz-transform": "rotate(" + degrees11 + "deg)",
            "-ms-transform": "rotate(" + degrees11 + "deg)",
            "-o-transform": "rotate(" + degrees11 + "deg)",
            transform: "rotate(" + degrees11 + "deg)"
        });
        $(".title h1 span.ch12").css({
            "-webkit-transform": "rotate(" + degrees12 + "deg)",
            "-moz-transform": "rotate(" + degrees12 + "deg)",
            "-ms-transform": "rotate(" + degrees12 + "deg)",
            "-o-transform": "rotate(" + degrees12 + "deg)",
            transform: "rotate(" + degrees12 + "deg)"
        });
        $(".title h1 span.ch13").css({
            "-webkit-transform": "rotate(" + degrees13 + "deg)",
            "-moz-transform": "rotate(" + degrees13 + "deg)",
            "-ms-transform": "rotate(" + degrees13 + "deg)",
            "-o-transform": "rotate(" + degrees13 + "deg)",
            transform: "rotate(" + degrees13 + "deg)"
        })
    }
    var scrollDeg = $(document).scrollTop() / 2;
    $(".wheel_1").css("transform", "rotate(" + -scrollDeg + "deg)");
    $(".wheel_2").css("transform", "rotate(" + -scrollDeg + "deg)");
    $(".wheel_3").css("transform", "rotate(" + -scrollDeg + "deg)");
    $(".wheel_6").css("transform", "rotate(" + scrollDeg + "deg)");
    $(".wheel_5").css("transform", "rotate(" + scrollDeg + "deg)");
    $("#form1_input-1").change(function() {
        $(".input.input__style.input-1").addClass("input__filled");
        var email = $("input[name=email]").val();
        if (email == "") {
            $(".input.input__style.input-2").removeClass("input__filled")
        }
        var phone = $("input[name=phone]").val();
        if (phone == "") {
            $(".input.input__style.input-3").removeClass("input__filled")
        }
        var message = $("textarea[name=message]").val();
        if (message == "") {
            $(".input.input__style.input-4").removeClass("input__filled")
        }
    });
    $("#form1_input-2").change(function() {
        $(".input.input__style.input-2").addClass("input__filled");
        var name = $("input[name=name]").val();
        if (name == "") {
            $(".input.input__style.input-1").removeClass("input__filled")
        }
        var phone = $("input[name=phone]").val();
        if (phone == "") {
            $(".input.input__style.input-3").removeClass("input__filled")
        }
        var message = $("textarea[name=message]").val();
        if (message == "") {
            $(".input.input__style.input-4").removeClass("input__filled")
        }
    });
    $("#form1_input-3").change(function() {
        $(".input.input__style.input-3").addClass("input__filled");
        var name = $("input[name=name]").val();
        if (name == "") {
            $(".input.input__style.input-1").removeClass("input__filled")
        }
        var email = $("input[name=email]").val();
        if (email == "") {
            $(".input.input__style.input-2").removeClass("input__filled")
        }
        var message = $("textarea[name=message]").val();
        if (message == "") {
            $(".input.input__style.input-4").removeClass("input__filled")
        }
    });
    $("#form1_input-4").change(function() {
        $(".input.input__style.input-4").addClass("input__filled");
        var name = $("input[name=name]").val();
        if (name == "") {
            $(".input.input__style.input-1").removeClass("input__filled")
        }
        var email = $("input[name=email]").val();
        if (email == "") {
            $(".input.input__style.input-2").removeClass("input__filled")
        }
        var phone = $("input[name=phone]").val();
        if (phone == "") {
            $(".input.input__style.input-3").removeClass("input__filled")
        }
    })
});
$(function() {
    var form = $("#form1_contact");
    $(form).submit(function(event) {
        var formData = $(form).serialize(),
            id = $(form).attr("id");
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: $(form).attr("action"),
            data: formData
        }).done(function(data) {
            $(form).replaceWith("<div class='text__success'>Thanks for contacting me! You'll hear from me soon.</div>")
        })
    })
});