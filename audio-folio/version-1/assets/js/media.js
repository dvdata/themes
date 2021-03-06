var site_height;
var siteWidth;
var latestKnownScrollY = 0;
var ticking = false;
var requestAnimationFrame;
var transforms;
var transformProperty;
var scrolling = false;
var mouseWheelActive = false;
var count = 0;
var mouseDelta = 0;
var linesBg;
var mainBg;
var wwwContent;
var naviNumbersH;
var naviNumbers;
var browser_width;
var browser_height;
var tempXOld = 0;
var tempYOld = 0;
var updateInterval = 0;
var updateIntervalGravity = 0;
var scrollSpecialUseVar = false;
var rightClicked = false;
var scrollClicked = false;
var historyActive = false;
var isTouch;
var isMouse;
var needsRedrawBg = false;
var needsRedrawAnimation = false;
var needsRedrawRightNavi = false;
var needsDoScrollJob = false;
var needsDoMouseJob = false;
var needsRedrawProject = false;
var tempX = 0;
var tempY = 0;
var siteLoaded = false;
var siteVersion = 0;
var bgMobiH;
var shineMob1L;
var shineMob2L;
var projectText;
var projectTextD;
var containerPages;
var projectPage2;
var BMSite = new function() {
    this.currentSite = 0;
    this.currentSiteScroll = 0;
    this.currentScrollY = -8E3;
    this.currentScrollYS = -8E3;
    this.currentScrollYTmp = -8E3;
    this.menuReady = false;
    this.tempX = 0;
    this.tempY = 0;
    this.siteWidthN = 1024;
    this.siteWidthC = 1024;
    this.tempXT = 0;
    this.tempYT = 0;
    this.supportsTransforms = Modernizr.csstransforms3d;
    this.siteYAdd = 0;
    this.siteYAddSpec = 0;
    this.siteScale = 1;
    this.sitesArray = ["intro", "attitude", "creation", "technomagic", "youandwe", "contact", "projects"];
    this.sitesTitlesPL = ["", "Nastawienie", "Kreacja",
        "Technomagic", "Ty i my", "Kontakt", "To zrobili\u015bmy"
    ];
    this.sitesTitlesEN = ["", "Attitude", "Creation", "Technomagic", "You and we", "Contact", "Our work"];
    this.projectOpened = false;
    this.soundOff = false;
    this.lang = "PL";
    this.triggerHistory = true;
    this.oldSite = "";
    this.clack;
    this.clickSnd
};
$.ready(function() {
    BMSite.supportsTransforms = Modernizr.csstransforms3d;
    isTouch = DetectIt.isTouch;
    isMouse = DetectIt.isMouse;
    bgMobiH = document.getElementById("bgMobi");
    menuMobile = document.getElementById("menuMobile");
    heartContainer = document.getElementById("heartContainer");
    crownContainer = document.getElementById("crownContainer");
    roseContainer = document.getElementById("roseContainer");
    techContainer = document.getElementById("techContainer");
    naviNumbersH = document.getElementById("naviNumbersH");
    naviNumbers =
        document.getElementById("naviNumbers");
    wwwContent = document.getElementById("content");
    projectText = document.getElementById("projectText");
    projectTextD = document.getElementById("projectTextD");
    containerPages = document.getElementById("projectPager");
    projectPage2 = document.getElementById("projectPage2");
    if (isTouch) {
        siteVersion = 1;
        if (DetectIt.isTablet) siteVersion = 2
    } else siteVersion = 0;
    updateValues();
    if (browser_width <= 640) siteVersion = 1;
    if (siteVersion == 1) {
        document.getElementById("mainBgC").style.display = "none";
        document.getElementById("shinesBgC").style.display = "none";
        document.getElementById("animationC").style.display = "none";
        document.getElementById("projectPhotos").style.display = "none"
    } else menuMobile.style.display = "none"; if (window.addEventListener) {
        window.addEventListener("resize", updateValues, false);
        window.addEventListener("DOMContentLoaded", updateValues, false);
        window.addEventListener("load", updateValues, false)
    }
    if (siteVersion == 0) TweenLite.ticker.fps(30);
    else TweenLite.ticker.fps(24);
    TweenLite.ticker.addEventListener("tick",
        redraw);
    BMSite.currentSite = 0;
    BMSite.currentSiteScroll = 0;
    BMSite.currentScrollY = -8E3;
    BMSite.currentScrollYS = -8E3 / BMSite.siteScale;
    BMSite.currentScrollYTmp = -8E3 / BMSite.siteScale;
    BMSite.menuReady = false;
    BMSite.tempX = 0;
    BMSite.tempY = 0;
    BMSite.tempXT = 0;
    BMSite.tempYT = 0;
    BMSite.soundOff = false;
    loadBg();
    createAnimation();
    setMenu();
    History.Adapter.bind(window, "statechange", handleHashChange);
    handleHashChangeInit()
});

function handleHashChange() {
    if (!BMSite.triggerHistory) {
        BMSite.triggerHistory = true;
        return
    }
    if (!isTouch) TweenLite.to(window, 0, {
        scrollTo: {
            y: BMSite.currentScrollY
        },
        overwrite: "all",
        onUpdate: scrollHistoryUse
    });
    var currentSiteOld = BMSite.currentSiteScroll;
    var newPosition = 0;
    var State = History.getState();
    switch (BMSite.oldSite) {
        case "intro":
            currentSiteOld = 0;
            break;
        case "attitude":
            currentSiteOld = 1;
            break;
        case "creation":
            currentSiteOld = 2;
            break;
        case "technomagic":
            currentSiteOld = 3;
            break;
        case "youandwe":
            currentSiteOld =
                4;
            break;
        case "contact":
            currentSiteOld = 5;
            break;
        case "projects":
            currentSiteOld = 6;
            break
    }
    BMSite.oldSite = State.data.state;
    switch (State.data.state) {
        case "intro":
            newPosition = 0;
            BMSite.currentScrollY = newPosition * BMSite.siteScale;
            BMSite.currentSite = 0;
            break;
        case "attitude":
            newPosition = 1600;
            BMSite.currentScrollY = newPosition * BMSite.siteScale;
            BMSite.currentSite = 1;
            break;
        case "creation":
            newPosition = 3140;
            BMSite.currentScrollY = newPosition * BMSite.siteScale;
            BMSite.currentSite = 2;
            break;
        case "technomagic":
            newPosition = 4690;
            BMSite.currentScrollY = newPosition * BMSite.siteScale;
            BMSite.currentSite = 3;
            break;
        case "youandwe":
            newPosition = 6216;
            BMSite.currentScrollY = newPosition * BMSite.siteScale;
            BMSite.currentSite = 4;
            break;
        case "contact":
            newPosition = 7306;
            BMSite.currentScrollY = newPosition * BMSite.siteScale;
            BMSite.currentSite = 5;
            break;
        case "projects":
            BMSite.currentSite = 6;
            break
    }
    if (BMSite.currentSite == 6) {
        BMProject.selectedProject = parseInt(State.data.id);
        if (isNaN(BMProject.selectedProject)) BMProject.selectedProject = 0;
        if (BMProject.selectedProject >=
            BMProject.projects.length) BMProject.selectedProject = 0;
        loadProjects(0);
        return
    } else {
        closeProjectsFromHistory();
        BMSite.triggerHistory = true
    }
    mouseOut1(null);
    mouseOut3(null);
    mouseOut4(null);
    mouseOut5(null);
    mouseOut2(null);
    var dist = Math.abs(BMSite.currentSite - currentSiteOld);
    if (dist == 0) dist = 0.5;
    var pos = BMSite.currentSite - currentSiteOld > 0 ? -1 : 1;
    var tl = new TimelineLite;
    if (!isTouch) {
        if (dist == 1) tl.to(window, dist * 1.5, {
            scrollTo: {
                y: BMSite.currentScrollY + pos * 200 * BMSite.siteScale
            },
            ease: SlowMo.ease,
            onUpdate: scrollHistoryUse
        });
        tl.to(window, dist * 0.5, {
            scrollTo: {
                y: BMSite.currentScrollY
            },
            ease: Power4.easeOut,
            onUpdate: scrollHistoryUse
        })
    } else {
        Scroller.targetYUpdateTmp();
        if (dist == 1) tl.to(Scroller, dist * 1.5, {
            targetYTmp: (newPosition + pos * 200) * BMSite.siteScale,
            ease: SlowMo.ease,
            onUpdate: updateWithoutHistory
        });
        tl.to(Scroller, dist * 0.5, {
            targetYTmp: newPosition * BMSite.siteScale,
            ease: Power4.easeOut,
            onUpdate: updateWithoutHistory
        })
    }
}

function handleHashChangeInit() {
    historyActive = false;
    var h = 0;
    var len = BMSite.sitesArray.length;
    var idSite = 0;
    var State = History.getState();
    var siteToFind = "";
    if (typeof State.data.state === "undefined")
        if (window.location.href.indexOf("site") > -1) siteToFind = getUrlParameters("site", "", true);
        else siteToFind = "";
    else siteToFind = State.data.state;
    var titleT = "";
    var stateStr = "intro";
    for (h; h < len; h++)
        if (BMSite.sitesArray[h] == siteToFind) {
            idSite = h;
            stateStr = BMSite.sitesArray[h];
            if (h != 0)
                if (BMSite.lang == "PL") titleT = BMSite.sitesTitlesPL[h] +
                    " - ";
                else titleT = BMSite.sitesTitlesEN[h] + " - ";
            else titleT = ""
        }
    BMSite.currentSite = idSite;
    BMSite.triggerHistory = false;
    BMSite.oldSite = State.data.state;
    BMProject.selectedProject = parseInt(State.data.id);
    if (isNaN(BMProject.selectedProject)) BMProject.selectedProject = 0;
    if (BMProject.selectedProject >= BMProject.projects.length) BMProject.selectedProject = 0;
    if (stateStr != "projects") History.replaceState({
        state: State.data.state
    }, titleT + "BrightMedia", "?lang=" + BMSite.lang.toLowerCase() + "&site=" + stateStr);
    else History.replaceState({
        state: State.data.state,
        id: BMProject.selectedProject
    }, titleT + "BrightMedia", "?lang=" + BMSite.lang.toLowerCase() + "&site=" + stateStr + "&id=" + BMProject.selectedProject); if (idSite == 6) {
        newPosition = 0;
        BMSite.currentScrollY = newPosition * BMSite.siteScale;
        BMSite.currentSite = 0;
        BMSite.currentScrollYTmp = BMSite.currentScrollY / BMSite.siteScale;
        BMSite.currentScrollYS = BMSite.currentScrollY / BMSite.siteScale;
        BMSite.currentSiteScroll = BMSite.currentSite;
        loadProjects(0);
        return
    }
    if (idSite == 0) return;
    switch (idSite) {
        case 1:
            if (siteVersion != 1) newPosition =
                1600;
            else newPosition = 1030 + 350 + 400;
            BMSite.currentScrollY = newPosition * BMSite.siteScale;
            BMSite.currentSite = 1;
            break;
        case 2:
            if (siteVersion != 1) newPosition = 3140;
            else newPosition = 2580 + 350 + 700;
            BMSite.currentScrollY = newPosition * BMSite.siteScale;
            BMSite.currentSite = 2;
            break;
        case 3:
            if (siteVersion != 1) newPosition = 4690;
            else newPosition = 4130 + 250 + 1100;
            BMSite.currentScrollY = newPosition * BMSite.siteScale;
            BMSite.currentSite = 3;
            break;
        case 4:
            if (siteVersion != 1) newPosition = 6216;
            else newPosition = 5680 + 250 + 1500;
            BMSite.currentScrollY =
                newPosition * BMSite.siteScale;
            BMSite.currentSite = 4;
            break;
        case 5:
            if (siteVersion != 1) newPosition = 7306;
            else newPosition = 7230 + 350 + 1500 + 300;
            BMSite.currentScrollY = newPosition * BMSite.siteScale;
            BMSite.currentSite = 5;
            break
    }
    BMSite.currentScrollYTmp = BMSite.currentScrollY / BMSite.siteScale;
    BMSite.currentScrollYS = BMSite.currentScrollY / BMSite.siteScale;
    BMSite.currentSiteScroll = BMSite.currentSite;
    setScrollPosition(BMSite.currentScrollY);
    if (isTouch) {
        historyActive = false;
        mouseOut2(null);
        mouseOut3(null);
        mouseOut4(null);
        mouseOut5(null);
        mouseOut1(null);
        Scroller.targetYUpdateTmp();
        TweenLite.to(Scroller, 0, {
            targetYTmp: BMSite.currentScrollY,
            overwrite: "all",
            ease: Power4.easeOut,
            onUpdate: updateTargetScrollContact
        })
    }
}

function getUrlParameters(parameter, staticURL, decode) {
    var currLocation = staticURL.length ? staticURL : window.location.search,
        parArr = currLocation.split("?")[1].split("&"),
        returnBool = true;
    for (var i = 0; i < parArr.length; i++) {
        parr = parArr[i].split("=");
        if (parr[0] == parameter) {
            return decode ? decodeURIComponent(parr[1]) : parr[1];
            returnBool = true
        } else returnBool = false
    }
    if (!returnBool) return false
}

function setHashSilentlyProject(hash) {
    if (historyActive) return;
    var idSiteT = 0;
    var h = 0;
    var len = BMSite.sitesArray.length;
    var titleT = "";
    for (h; h < len; h++)
        if (BMSite.sitesArray[h] == hash)
            if (h != 0)
                if (BMSite.lang == "PL") titleT = BMSite.sitesTitlesPL[h] + " - ";
                else titleT = BMSite.sitesTitlesEN[h] + " - ";
    else titleT = "";
    BMSite.triggerHistory = false;
    BMSite.oldSite = History.getState().data.state;
    History.pushState({
            state: hash,
            id: BMProject.selectedProject
        }, titleT + "BrightMedia", "?lang=" + BMSite.lang.toLowerCase() + "&site=" + hash +
        "&id=" + BMProject.selectedProject)
}

function setHashSilently(hash) {
    if (historyActive) return;
    if (typeof hash === "undefined") hash = "intro";
    var idSiteT = 0;
    var h = 0;
    var len = BMSite.sitesArray.length;
    var titleT = "";
    for (h; h < len; h++)
        if (BMSite.sitesArray[h] == hash)
            if (h != 0)
                if (BMSite.lang == "PL") titleT = BMSite.sitesTitlesPL[h] + " - ";
                else titleT = BMSite.sitesTitlesEN[h] + " - ";
    else titleT = "";
    BMSite.triggerHistory = false;
    BMSite.oldSite = History.getState().data.state;
    History.pushState({
            state: hash
        }, titleT + "BrightMedia", "?lang=" + BMSite.lang.toLowerCase() + "&site=" +
        hash)
}

function addSpecialEvents() {
    if (window.addEventListener) {
        if (!isTouch) {
            window.addEventListener("scroll", scrollScrolling, false);
            window.addEventListener("mousewheel", mouseWheelHandler, false);
            window.addEventListener("DOMMouseScroll", mouseWheelHandler, false);
            window.addEventListener("mousemove", mouseMove, false)
        }
        if (isTouch) window.ondevicemotion = deviceMotion
    }
}

function updateTargetScroll() {
    scrollClicked = true;
    Scroller.targetYUpdate()
}

function updateTargetScrollContact() {
    historyActive = true;
    Scroller.targetYUpdate()
}

function updateWithoutHistory() {
    historyActive = true;
    Scroller.targetYUpdate()
}

function deviceMotion(event) {
    if (navigator.platform.indexOf("iPad") != -1) {
        var version = 1;
        if (event.acceleration) {
            version += window.devicePixelRatio;
            updateIntervalGravity += 1;
            var tempX;
            var tempY;
            DetectIt.landscapeOrientation = window.innerWidth / window.innerHeight > 1;
            if (DetectIt.landscapeOrientation) {
                tempX = parseInt(event.accelerationIncludingGravity.y * 300);
                tempY = parseInt(event.accelerationIncludingGravity.x * 150)
            } else {
                tempX = parseInt(event.accelerationIncludingGravity.x * 300);
                tempY = parseInt(event.accelerationIncludingGravity.y *
                    150)
            } if (Math.abs(tempX - tempXOld) > 500) {
                tempXOld = tempX;
                Scroller.targetX = tempX
            }
            if (Math.abs(tempY - tempYOld) > 150) {
                tempYOld = tempY;
                Scroller.targetY = tempY
            }
        } /*if(version==1)gotoMobile()*/
    }
}

function redraw() {
    updateInterval += 1;
    if (BMProject.projectOpened) {
        if (needsRedrawProject)
            if (siteVersion == 0) {
                BMSite.tempXT += (BMSite.tempX - BMSite.tempXT) / 10;
                BMProject.containerPhotos.x = parseInt(-(BMSite.tempXT - parseInt(browser_width / 2)) / 15 + (browser_width / BMProject.siteScale - 795) / 2);
                BMProject.rectangleBg.x = -(BMSite.tempXT - parseInt(browser_width / 2)) / 25 + browser_width / BMProject.siteScale / 2;
                BMProject.rectangleBgMask.x = -(BMSite.tempXT - parseInt(browser_width / 2)) / 15 + browser_width / BMProject.siteScale / 2;
                if (BMSite.supportsTransforms) {
                    setElementTransformM(projectText,
                        parseInt((browser_width - 380) / 2 - (BMSite.tempXT - parseInt(browser_width / 2)) / 20) + "px", parseInt(browser_height / 2 + 170 * BMProject.siteScale) + "px");
                    setElementTransformM(projectTextD, parseInt((browser_width - 380) / 2 - (BMSite.tempXT - parseInt(browser_width / 2)) / 20) + "px", parseInt(browser_height / 2 + 250 * BMProject.siteScale) + "px");
                    setElementTransformM(containerPages, parseInt((browser_width - 800 * BMProject.siteScale) / 2 - (BMSite.tempXT - parseInt(browser_width / 2)) / 15) + "px", parseInt(browser_height / 2 - 20 * BMProject.siteScale) + "px");
                    setElementTransformM(wwwContent, -(BMSite.tempXT - browser_width / 2) / 30 + "px", -BMSite.currentScrollYTmp * BMSite.siteScale + BMSite.siteYAdd + "px")
                } else {
                    set2dTransformM(projectText, parseInt((browser_width - 380) / 2 - (BMSite.tempXT - parseInt(browser_width / 2)) / 20) + "px", parseInt(browser_height / 2 + 170 * BMProject.siteScale) + "px");
                    set2dTransformM(projectTextD, parseInt((browser_width - 380) / 2 - (BMSite.tempXT - parseInt(browser_width / 2)) / 20) + "px", parseInt(browser_height / 2 + 250 * BMProject.siteScale) + "px");
                    set2dTransformM(containerPages,
                        parseInt((browser_width - 800 * BMProject.siteScale) / 2 - (BMSite.tempXT - parseInt(browser_width / 2)) / 15) + "px", parseInt(browser_height / 2 - 20 * BMProject.siteScale) + "px");
                    set2dTransformM(wwwContent, -(BMSite.tempXT - browser_width / 2) / 30 + "px", -BMSite.currentScrollYTmp * BMSite.siteScale + BMSite.siteYAdd + "px")
                }
                containerPages.style.width = 800 * BMProject.siteScale + "px";
                BMProject.stage.update()
            }
        return
    }
    if (BMProject.projectOpened) return;
    if (needsRedrawBg) {
        canvasMainBgObj.stage.scaleX = canvasMainBgObj.stage.scaleY = BMSite.siteScale;
        canvasShinesObj.stage.scaleX = canvasShinesObj.stage.scaleY = BMSite.siteScale;
        canvasAnimationObj.stage.scaleX = canvasAnimationObj.stage.scaleY = BMSite.siteScale;
        if (isTouch) canvasShinesObj.stage.update();
        else {
            canvasMainBgObj.stage.update();
            canvasShinesObj.stage.update()
        }
        canvasAnimationObj.stage.update();
        needsRedrawBg = false
    } else if (needsRedrawAnimation) {
        canvasAnimationObj.stage.update();
        needsRedrawAnimation = false
    }
    if (needsRedrawRightNavi) {
        canvasNaviObj.stage.scaleX = canvasNaviObj.stage.scaleY = BMSite.siteScale;
        canvasNaviObj.stage.update();
        needsRedrawRightNavi = false
    }
    if (needsDoScrollJob) {
        BMSite.currentScrollYTmp += (BMSite.currentScrollYS - BMSite.currentScrollYTmp) / 5;
        setContentPosition()
    }
    if (needsDoMouseJob) {
        BMSite.tempXT += (BMSite.tempX - BMSite.tempXT) / 10;
        setContentMotionPos()
    }
}

function setContentMotionPos() {
    if (!canvasMainBgObj) return;
    if (canvasMainBgObj.gfx2) {
        canvasMainBgObj.gfx2.x = -((BMSite.tempXT - parseInt(browser_width / 2)) / 15 + 153) / BMSite.siteScale;
        canvasMainBgObj.gfx3.x = -((BMSite.tempXT - parseInt(browser_width / 2)) / 40 + 153) / BMSite.siteScale;
        canvasMainBgObj.gfx4.x = -((BMSite.tempXT - parseInt(browser_width / 2)) / 25 + 154) / BMSite.siteScale;
        if (BMSite.supportsTransforms) setElementTransformM(wwwContent, -(BMSite.tempXT - browser_width / 2) / 30 + "px", -BMSite.currentScrollYTmp * BMSite.siteScale +
            BMSite.siteYAdd + "px");
        else set2dTransformM(wwwContent, -(BMSite.tempXT - browser_width / 2) / 30 + "px", -BMSite.currentScrollYTmp * BMSite.siteScale + BMSite.siteYAdd + "px");
        canvasAnimationObj.shineContainer.x = -(BMSite.tempXT - parseInt(browser_width / 2)) / 20 + parseInt((browser_width - BMSite.siteWidthC) / 2) / BMSite.siteScale;
        canvasShinesObj.shineContainer.x = -(BMSite.tempXT - parseInt(browser_width / 2)) / 20 + parseInt((browser_width - BMSite.siteWidthC) / 2) / BMSite.siteScale;
        updateStageBG();
        if (BMSite.tempX.toFixed(1) == BMSite.tempXT.toFixed(1)) {
            needsDoMouseJob =
                false;
            return
        }
    }
}

function setContentPosition() {
    if (!canvasMainBgObj) return;
    if (canvasMainBgObj.gfx2) {
        canvasMainBgObj.gfx2.y = -BMSite.currentScrollYTmp * 0.65 - 201 - 4E3 + BMSite.siteYAddSpec;
        canvasMainBgObj.gfx3.y = -BMSite.currentScrollYTmp * 0.35 - 108 - 4E3 + BMSite.siteYAddSpec;
        canvasMainBgObj.gfx4.y = -BMSite.currentScrollYTmp * 0.5 - 200 - 4E3 + BMSite.siteYAddSpec;
        canvasShinesObj.mask2.y = BMSite.currentScrollYTmp - BMSite.siteYAddSpec;
        canvasShinesObj.mask1.y = BMSite.currentScrollYTmp - BMSite.siteYAddSpec;
        canvasAnimationObj.shineContainer.y = -BMSite.currentScrollYTmp +
            BMSite.siteYAddSpec;
        canvasShinesObj.shineContainer.y = -BMSite.currentScrollYTmp + BMSite.siteYAddSpec;
        updateStageBG();
        if (BMSite.supportsTransforms) setElementTransformM(wwwContent, -(BMSite.tempXT - browser_width / 2) / 30 + "px", -BMSite.currentScrollYTmp * BMSite.siteScale + BMSite.siteYAdd + "px");
        else set2dTransformM(wwwContent, -(BMSite.tempXT - browser_width / 2) / 30 + "px", -BMSite.currentScrollYTmp * BMSite.siteScale + BMSite.siteYAdd + "px"); if (BMSite.currentScrollYTmp.toFixed(1) == BMSite.currentScrollYS.toFixed(1)) {
            needsDoScrollJob =
                false;
            return
        }
    }
}

function getScrollPosition() {
    if (document.documentElement.scrollTop == 0) return document.body.scrollTop;
    else return document.documentElement.scrollTop
}

function setScrollPosition(siteScroll) {
    if (document.documentElement.scrollTop == 0) document.body.scrollTop = siteScroll;
    else document.documentElement.scrollTop = siteScroll
}

function mouseMove(ev) {
    if (DetectIt.isIE) {
        BMSite.tempX = ev.clientX + document.body.scrollLeft;
        BMSite.tempY = ev.clientY + document.body.scrollTop
    } else {
        BMSite.tempX = ev.pageX;
        BMSite.tempY = ev.pageY
    } if (BMSite.tempX < 0) BMSite.tempX = 0;
    if (BMSite.tempY < 0) BMSite.tempY = 0;
    doMouseJob()
}

function mouseWheelHandler(ev) {
    if (!siteLoaded) return;
    mouseWheelActive = true;
    parallaxScroll(ev);
    if (ev.preventDefault) ev.preventDefault();
    else ev.returnValue = false
}

function scrollScrolling(ev) {
    if (!siteLoaded) return;
    TweenLite.killTweensOf(BMSite);
    parallaxScroll(ev);
    if (ev.preventDefault) ev.preventDefault();
    else ev.returnValue = false
}

function parallaxScroll(e) {
    BMSite.currentScrollY = getScrollPosition();
    BMSite.currentScrollYS = BMSite.currentScrollY / BMSite.siteScale;
    updateCanvasElements();
    if (mouseWheelActive) {
        mouseWheelActive = false;
        var e = window.event || e;
        var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
        if (delta < 0) TweenLite.to(window, 1.5, {
            scrollTo: {
                y: BMSite.currentScrollY + 250
            },
            overwrite: "all",
            ease: Power4.easeOut,
            onUpdate: scrollSpecialUse
        });
        else if (BMSite.currentScrollY - 250 > 0) TweenLite.to(window, 1.5, {
            scrollTo: {
                y: BMSite.currentScrollY -
                    250
            },
            overwrite: "all",
            ease: Power4.easeOut,
            onUpdate: scrollSpecialUse
        });
        else {
            BMSite.currentScrollY = 0;
            TweenLite.to(window, 1.5, {
                scrollTo: {
                    y: BMSite.currentScrollY
                },
                overwrite: "all",
                ease: Power4.easeOut,
                onUpdate: scrollSpecialUse
            })
        }
    } else if (scrollSpecialUseVar) {
        scrollSpecialUseVar = false;
        scrollClicked = false;
        rightClicked = false;
        historyActive = false;
        BMSite.currentScrollYTmp = BMSite.currentScrollYS;
        if (canvasMainBgObj.gfx2) {
            canvasMainBgObj.gfx2.y = -BMSite.currentScrollYTmp * 0.65 - 201 - 4E3 + BMSite.siteYAddSpec;
            canvasMainBgObj.gfx3.y = -BMSite.currentScrollYTmp * 0.35 - 108 - 4E3 + BMSite.siteYAddSpec;
            canvasMainBgObj.gfx4.y = -BMSite.currentScrollYTmp * 0.5 - 200 - 4E3 + BMSite.siteYAddSpec;
            canvasShinesObj.mask2.y = BMSite.currentScrollYTmp - BMSite.siteYAddSpec;
            canvasShinesObj.mask1.y = BMSite.currentScrollYTmp - BMSite.siteYAddSpec;
            canvasAnimationObj.shineContainer.y = -BMSite.currentScrollYTmp + BMSite.siteYAddSpec;
            canvasShinesObj.shineContainer.y = -BMSite.currentScrollYTmp + BMSite.siteYAddSpec;
            updateStageBG()
        }
        if (BMSite.supportsTransforms) setElementTransformM(wwwContent, -(BMSite.tempXT - browser_width / 2) / 30 + "px", -BMSite.currentScrollY + BMSite.siteYAdd + "px");
        else set2dTransformM(wwwContent, -(BMSite.tempXT - browser_width / 2) / 30 + "px", -BMSite.currentScrollY + BMSite.siteYAdd + "px")
    } else doScrollJob()
}

function doScrollJob() {
    needsDoScrollJob = true
}

function doMouseJob() {
    needsDoMouseJob = true
}

function doIntroJob() {
    needsDoScrollJob = true;
    updateCanvasElements()
}

function updateCanvasElements() {
    if (!BMProject.projectOpened) {
        updateShines();
        updateBoxes()
    }
}
var deviceDetection = function() {
    var osVersion, device, deviceType, userAgent, isSmartphoneOrTablet;
    device = navigator.userAgent.match(/Android|iPhone|iPad|iPod/i);
    if (/Android/i.test(device)) {
        if (!/mobile/i.test(navigator.userAgent)) deviceType = "tablet";
        else deviceType = "phone";
        osVersion = navigator.userAgent.match(/Android\s+([\d\.]+)/i);
        osVersion = osVersion[0];
        osVersion = osVersion.replace("Android ", "")
    } else if (/iPhone/i.test(device)) {
        deviceType = "phone";
        osVersion = navigator.userAgent.match(/OS\s+([\d\_]+)/i);
        osVersion =
            osVersion[0];
        osVersion = osVersion.replace(/_/g, ".");
        osVersion = osVersion.replace("OS ", "")
    } else if (/iPad/i.test(device)) {
        deviceType = "tablet";
        osVersion = navigator.userAgent.match(/OS\s+([\d\_]+)/i);
        osVersion = osVersion[0];
        osVersion = osVersion.replace(/_/g, ".");
        osVersion = osVersion.replace("OS ", "")
    }
    isSmartphoneOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    userAgent = navigator.userAgent;
    return {
        "isSmartphoneOrTablet": isSmartphoneOrTablet,
        "device": device,
        "osVersion": osVersion,
        "userAgent": userAgent,
        "deviceType": deviceType
    }
}();
var DetectIt = new function() {
    this.isTouch = !!("ontouchstart" in window);
    this.isMouse = !!("onmousemove" in window);
    this.landscapeOrientation = window.innerWidth / window.innerHeight > 1;
    var ua = navigator.userAgent.toLowerCase(),
        re = new RegExp("msie ([0-9]{1,}[.0-9]{0,})");
    this.isTablet = deviceDetection.deviceType == "phone" ? false : true;
    this.isOpera = !!window.opera || ua.indexOf("opera") >= 0;
    this.isFirefox = typeof InstallTrigger !== "undefined";
    this.isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0;
    this.isChrome = !!window.chrome;
    this.isIE = false;
    this.isTriangle = true;
    this.ieVersion = 100;
    if (re.exec(ua) != null) this.ieVersion = parseInt(RegExp.$1);
    window.ondevicemotion = function(event) {
        if (navigator.platform.indexOf("iPad") != -1) {
            var version = 1;
            if (event.acceleration) version += window.devicePixelRatio; /*if(version==1)gotoMobile()*/
        }
        window.ondevicemotion = null
    }
};

function updateStageBG() {
    if (!BMProject.projectOpened) needsRedrawBg = true
}

function updateAnimation() {
    needsRedrawAnimation = true
}

function updateRightNavi() {
    needsRedrawRightNavi = true
}

function scrollSpecialUse() {
    scrollSpecialUseVar = true
}

function scrollHistoryUse() {
    historyActive = true;
    scrollSpecialUseVar = true
}

function scrollSpecialUseClick() {
    scrollClicked = true;
    scrollSpecialUseVar = true
}

function scrollSpecialUseRight() {
    rightClicked = true;
    scrollSpecialUseVar = true
}

function updateValues() {
    browser_width = window.innerWidth;
    browser_height = window.innerHeight;
    siteWidth = 1E3;
    if (browser_width > 1148) {
        siteWidth = 1148;
        BMSite.siteWidthN = siteWidth - 148;
        BMSite.siteWidthC = siteWidth - 154;
        BMSite.siteScale = 1
    }
    if (browser_width <= 1148) {
        BMSite.siteScale = browser_width / 1148;
        siteWidth = browser_width;
        BMSite.siteWidthN = siteWidth - 148 * BMSite.siteScale;
        BMSite.siteWidthC = siteWidth - 154 * BMSite.siteScale
    }
    if (siteVersion == 1) {
        var menuHolder = document.getElementById("menuHolder");
        menuHolder.style.width =
            browser_width + "px";
        menuHolder.style.height = browser_height + "px"
    }
    if (siteVersion != 1) {
        BMSite.siteYAdd = parseInt((browser_height - 800 * BMSite.siteScale) / 2);
        BMSite.siteYAddSpec = parseInt((browser_height / BMSite.siteScale - 800) / 2)
    } else {
        BMSite.siteYAdd = parseInt((browser_height - 1100 * BMSite.siteScale) / 2);
        BMSite.siteYAddSpec = parseInt((browser_height / BMSite.siteScale - 1100) / 2);
        if (BMSite.siteYAdd < 100) {
            BMSite.siteYAdd = 100;
            BMSite.siteYAddSpec = 227
        }
    } if (BMProject.projectOpened) resizeProject(false);
    site_height = 8100 * BMSite.siteScale +
        BMSite.siteYAdd * 2;
    if (siteVersion == 1) site_height = 10500;
    var www = document.getElementById("www");
    www.width = browser_width;
    www.height = site_height;
    www.style.width = browser_width + "px";
    www.style.height = site_height + "px";
    var contentMain = document.getElementById("content");
    contentMain.width = browser_width - (browser_width - siteWidth);
    contentMain.style.width = browser_width - (browser_width - siteWidth) + "px";
    if (siteVersion == 1) contentMain.style.height = site_height + "px";
    contentMain.style.left = parseInt((browser_width - BMSite.siteWidthC) /
        2) + "px";
    var projectOpen0 = document.getElementById("projectOpen0");
    projectOpen0.style.width = BMSite.siteScale * 151 + "px";
    projectOpen0.style.height = BMSite.siteScale * 151 + "px";
    projectOpen0.style.left = 128 * BMSite.siteScale + "px";
    projectOpen0.style.top = 458 * BMSite.siteScale + "px";
    var projectOpen1 = document.getElementById("projectOpen1");
    projectOpen1.style.width = BMSite.siteScale * 151 + "px";
    projectOpen1.style.height = BMSite.siteScale * 151 + "px";
    projectOpen1.style.left = 128 * BMSite.siteScale + "px";
    projectOpen1.style.top = 2038 *
        BMSite.siteScale + "px";
    var projectOpen2 = document.getElementById("projectOpen2");
    projectOpen2.style.width = BMSite.siteScale * 151 + "px";
    projectOpen2.style.height = BMSite.siteScale * 151 + "px";
    projectOpen2.style.left = 128 * BMSite.siteScale + "px";
    projectOpen2.style.top = 3580 * BMSite.siteScale + "px";
    var projectOpen3 = document.getElementById("projectOpen3");
    projectOpen3.style.width = BMSite.siteScale * 151 + "px";
    projectOpen3.style.height = BMSite.siteScale * 151 + "px";
    projectOpen3.style.left = 128 * BMSite.siteScale + "px";
    projectOpen3.style.top =
        5120 * BMSite.siteScale + "px";
    var projectOpen4 = document.getElementById("projectOpen4");
    projectOpen4.style.width = BMSite.siteScale * 151 + "px";
    projectOpen4.style.height = BMSite.siteScale * 151 + "px";
    projectOpen4.style.left = 128 * BMSite.siteScale + "px";
    projectOpen4.style.top = 6662 * BMSite.siteScale + "px";
    if (roseContainer != null) {
        roseContainer.style.width = BMSite.siteScale * 425 * 1.6 + "px";
        crownContainer.style.width = BMSite.siteScale * 506 * 1.6 + "px";
        heartContainer.style.width = BMSite.siteScale * 461 * 1.6 + "px";
        techContainer.style.width =
            BMSite.siteScale * 549 * 1.6 + "px";
        roseContainer.style.height = BMSite.siteScale * 454 * 1.6 + "px";
        crownContainer.style.height = BMSite.siteScale * 428 * 1.6 + "px";
        heartContainer.style.height = BMSite.siteScale * 395 * 1.6 + "px";
        techContainer.style.height = BMSite.siteScale * 535 * 1.6 + "px";
        heartContainer.style.left = parseInt((BMSite.siteWidthC - heartContainer.offsetWidth) / 2) + "px";
        heartContainer.style.top = parseInt((1030 + 350 + 300) * BMSite.siteScale) + "px";
        crownContainer.style.left = parseInt((BMSite.siteWidthC - crownContainer.offsetWidth) /
            2) + "px";
        crownContainer.style.top = parseInt((2600 + 350 + 600) * BMSite.siteScale) + "px";
        roseContainer.style.left = parseInt((BMSite.siteWidthC - roseContainer.offsetWidth) / 2) + "px";
        roseContainer.style.top = parseInt((6120 + 250 + 900) * BMSite.siteScale) + "px";
        techContainer.style.left = parseInt((BMSite.siteWidthC - techContainer.offsetWidth) / 2) + "px";
        techContainer.style.top = parseInt((3670 + 250 + 1200) * BMSite.siteScale) + "px"
    }
    naviNumbersH.style.height = 36 * BMSite.siteScale + "px";
    var menuHolder = document.getElementById("menuHolder");
    menuHolder.width = siteWidth + 100;
    menuHolder.height = 44;
    menuHolder.style.width = siteWidth + 100 + "px";
    menuHolder.style.height = 44 + "px";
    menuHolder.style.left = parseInt((browser_width - BMSite.siteWidthN) / 2) + "px";
    menuMobile.style.left = parseInt(browser_width - 80) + "px";
    var n0r = document.getElementById("n0r");
    var n1r = document.getElementById("n1r");
    var n2r = document.getElementById("n2r");
    var n3r = document.getElementById("n3r");
    var n4r = document.getElementById("n4r");
    var n5r = document.getElementById("n5r");
    var n0roll = document.getElementById("n0roll");
    var n1roll = document.getElementById("n1roll");
    var n2roll = document.getElementById("n2roll");
    var n3roll = document.getElementById("n3roll");
    var n4roll = document.getElementById("n4roll");
    var n5roll = document.getElementById("n5roll");
    n0roll.style.height = parseInt(42 * BMSite.siteScale) + "px";
    n1roll.style.height = parseInt(42 * BMSite.siteScale) + "px";
    n2roll.style.height = parseInt(42 * BMSite.siteScale) + "px";
    n3roll.style.height = parseInt(42 * BMSite.siteScale) + "px";
    n4roll.style.height = parseInt(42 * BMSite.siteScale) + "px";
    n5roll.style.height =
        parseInt(42 * BMSite.siteScale) + "px";
    n0roll.style.top = parseInt(0 * BMSite.siteScale) + "px";
    n1roll.style.top = parseInt(41 * BMSite.siteScale) + "px";
    n2roll.style.top = parseInt(83 * BMSite.siteScale) + "px";
    n3roll.style.top = parseInt(125 * BMSite.siteScale) + "px";
    n4roll.style.top = parseInt(167 * BMSite.siteScale) + "px";
    n5roll.style.top = parseInt(209 * BMSite.siteScale) + "px";
    if (parseInt(17 * BMSite.siteScale) > 11) {
        n0r.style.fontSize = parseInt(17 * BMSite.siteScale) + "px";
        n1r.style.fontSize = parseInt(17 * BMSite.siteScale) + "px";
        n2r.style.fontSize =
            parseInt(17 * BMSite.siteScale) + "px";
        n3r.style.fontSize = parseInt(17 * BMSite.siteScale) + "px";
        n4r.style.fontSize = parseInt(17 * BMSite.siteScale) + "px";
        n5r.style.fontSize = parseInt(17 * BMSite.siteScale) + "px"
    } else {
        n0r.style.fontSize = "11px";
        n1r.style.fontSize = "11px";
        n2r.style.fontSize = "11px";
        n3r.style.fontSize = "11px";
        n4r.style.fontSize = "11px";
        n5r.style.fontSize = "11px"
    }
    n0r.style.top = parseInt(0 * BMSite.siteScale) + "px";
    n1r.style.top = parseInt(41 * BMSite.siteScale) + "px";
    n2r.style.top = parseInt(83 * BMSite.siteScale) + "px";
    n3r.style.top = parseInt(125 * BMSite.siteScale) + "px";
    n4r.style.top = parseInt(167 * BMSite.siteScale) + "px";
    n5r.style.top = parseInt(209 * BMSite.siteScale) + "px";
    var intro = document.getElementById("intro");
    var creation = document.getElementById("creation");
    var quality = document.getElementById("quality");
    var solutions = document.getElementById("solutions");
    var technology = document.getElementById("technology");
    var contact = document.getElementById("contact");
    var introW = document.getElementById("item01_1");
    var creationW =
        document.getElementById("item02_1");
    var qualityW = document.getElementById("item03_1");
    var solutionsW = document.getElementById("item04_1");
    var technologyW = document.getElementById("item05_1");
    var contactW = document.getElementById("item06_1");
    var fullOffset = introW.offsetWidth + creationW.offsetWidth + qualityW.offsetWidth + solutionsW.offsetWidth + technologyW.offsetWidth + contactW.offsetWidth + 5 * 10;
    var dist = parseInt((BMSite.siteWidthN - fullOffset) / 5);
    if (siteVersion != 1) {
        menuHolder.style.fontSize = "12px";
        intro.style.left =
            "0px";
        creation.style.left = parseInt(introW.offsetWidth + dist) + "px";
        quality.style.left = parseInt(creationW.offsetWidth + dist + creation.offsetLeft) + "px";
        solutions.style.left = parseInt(qualityW.offsetWidth + dist + quality.offsetLeft) + "px";
        technology.style.left = parseInt(solutionsW.offsetWidth + dist + solutions.offsetLeft) + "px";
        contact.style.left = parseInt(technologyW.offsetWidth + dist + technology.offsetLeft) + "px"
    } else {
        var nr00 = document.getElementById("nr00");
        var nr01 = document.getElementById("nr01");
        var nr02 = document.getElementById("nr02");
        var nr03 = document.getElementById("nr03");
        var nr04 = document.getElementById("nr04");
        var nr05 = document.getElementById("nr05");
        menuHolder.style.fontSize = "15px";
        nr00.style.display = "none";
        nr01.style.display = "none";
        nr02.style.display = "none";
        nr03.style.display = "none";
        nr04.style.display = "none";
        nr05.style.display = "none";
        intro.style.left = parseInt((BMSite.siteWidthN - introW.offsetWidth - 28) / 2) + "px";
        creation.style.left = parseInt((BMSite.siteWidthN - creationW.offsetWidth - 28) / 2) + "px";
        quality.style.left = parseInt((BMSite.siteWidthN -
            qualityW.offsetWidth - 28) / 2) + "px";
        solutions.style.left = parseInt((BMSite.siteWidthN - solutionsW.offsetWidth - 28) / 2) + "px";
        technology.style.left = parseInt((BMSite.siteWidthN - technologyW.offsetWidth - 28) / 2) + "px";
        contact.style.left = parseInt((BMSite.siteWidthN - contactW.offsetWidth - 28) / 2) + "px";
        var distHM = browser_height / 8;
        intro.style.top = distHM + "px";
        creation.style.top = distHM * 2 + "px";
        quality.style.top = distHM * 3 + "px";
        solutions.style.top = distHM * 4 + "px";
        technology.style.top = distHM * 5 + "px";
        contact.style.top = distHM * 6 + "px";
        var showMenuT = document.getElementById("showMenuT");
        var menuMobileI = document.getElementById("menuMobile");
        $(menuMobileI).bind("touchstart", menuShow)
    }
    var creationHeader = document.getElementById("creationHeader");
    var qualityHeader = document.getElementById("qualityHeader");
    var solutionsHeader = document.getElementById("solutionsHeader");
    var technologyHeader = document.getElementById("technologyHeader");
    var contactHeader = document.getElementById("contactHeader");
    var textContact = document.getElementById("textContact");
    var contactAdress = document.getElementById("contactAdress");
    if (parseInt(14 * BMSite.siteScale) > 12) {
        contactAdress.style.fontSize = parseInt(14 * BMSite.siteScale) + "px";
        contactAdress.style.lineHeight = parseInt(18 * BMSite.siteScale) + "px"
    } else {
        contactAdress.style.fontSize = "12px";
        contactAdress.style.lineHeight = "15px"
    }
    contactAdress.style.letterSpacing = parseInt(4 * BMSite.siteScale) + "px";
    contactAdress.style.marginTop = parseInt(15 * BMSite.siteScale) + "px";
    textContact.style.width = parseInt(600 * BMSite.siteScale) + "px";
    creationHeader.style.top = parseInt(1810 * BMSite.siteScale) + "px";
    qualityHeader.style.top = parseInt(3357 * BMSite.siteScale) + "px";
    solutionsHeader.style.top = parseInt(4895 * BMSite.siteScale) + "px";
    technologyHeader.style.top = parseInt(6434 * BMSite.siteScale) + "px";
    textContact.style.top = parseInt(7664 * BMSite.siteScale) + "px";
    if (parseInt(55 * BMSite.siteScale) > 15) {
        creationHeader.style.fontSize = parseInt(55 * BMSite.siteScale) + "px";
        qualityHeader.style.fontSize = parseInt(55 * BMSite.siteScale) + "px";
        solutionsHeader.style.fontSize = parseInt(55 * BMSite.siteScale) + "px";
        technologyHeader.style.fontSize =
            parseInt(55 * BMSite.siteScale) + "px";
        contactHeader.style.fontSize = parseInt(55 * BMSite.siteScale) + "px"
    } else if (siteVersion == 0) {
        creationHeader.style.fontSize = "15px";
        qualityHeader.style.fontSize = "15px";
        solutionsHeader.style.fontSize = "15px";
        technologyHeader.style.fontSize = "15px";
        contactHeader.style.fontSize = "15px"
    } else {
        creationHeader.style.fontSize = "25px";
        qualityHeader.style.fontSize = "25px";
        solutionsHeader.style.fontSize = "25px";
        technologyHeader.style.fontSize = "25px";
        contactHeader.style.fontSize = "25px"
    }
    creationHeader.style.letterSpacing =
        parseInt(18 * BMSite.siteScale) + "px";
    qualityHeader.style.letterSpacing = parseInt(18 * BMSite.siteScale) + "px";
    solutionsHeader.style.letterSpacing = parseInt(18 * BMSite.siteScale) + "px";
    technologyHeader.style.letterSpacing = parseInt(18 * BMSite.siteScale) + "px";
    contactHeader.style.letterSpacing = parseInt(18 * BMSite.siteScale) + "px";
    if (siteVersion == 0) {
        creationHeader.style.left = parseInt(470 * BMSite.siteScale) + "px";
        qualityHeader.style.left = parseInt(470 * BMSite.siteScale) + "px";
        solutionsHeader.style.left = parseInt(470 * BMSite.siteScale) +
            "px";
        technologyHeader.style.left = parseInt(470 * BMSite.siteScale) + "px";
        textContact.style.left = parseInt(212 * BMSite.siteScale) + "px"
    } else {
        creationHeader.style.opacity = 1;
        qualityHeader.style.opacity = 1;
        solutionsHeader.style.opacity = 1;
        technologyHeader.style.opacity = 1;
        contactAdress.style.opacity = 1;
        contactHeader.style.opacity = 1;
        if (siteVersion == 1) {
            creationHeader.style.left = parseInt((BMSite.siteWidthC - creationHeader.offsetWidth) / 2) + "px";
            qualityHeader.style.left = parseInt((BMSite.siteWidthC - qualityHeader.offsetWidth) /
                2) + "px";
            solutionsHeader.style.left = parseInt((BMSite.siteWidthC - solutionsHeader.offsetWidth) / 2) + "px";
            technologyHeader.style.left = parseInt((BMSite.siteWidthC - technologyHeader.offsetWidth) / 2) + "px";
            textContact.style.left = parseInt((BMSite.siteWidthC - textContact.offsetWidth) / 2) + "px";
            creationHeader.style.top = parseInt((1030 + 350 + 300 + 650) * BMSite.siteScale) + "px";
            qualityHeader.style.top = parseInt((2580 + 350 + 600 + 650) * BMSite.siteScale) + "px";
            solutionsHeader.style.top = parseInt((4130 + 350 + 900 + 650) * BMSite.siteScale) +
                "px";
            technologyHeader.style.top = parseInt((5680 + 450 + 1200 + 650) * BMSite.siteScale) + "px";
            textContact.style.top = parseInt((7230 + 350 + 1500 + 600) * BMSite.siteScale) + "px"
        } else {
            creationHeader.style.left = parseInt(470 * BMSite.siteScale) + "px";
            qualityHeader.style.left = parseInt(470 * BMSite.siteScale) + "px";
            solutionsHeader.style.left = parseInt(470 * BMSite.siteScale) + "px";
            technologyHeader.style.left = parseInt(470 * BMSite.siteScale) + "px";
            textContact.style.left = parseInt(212 * BMSite.siteScale) + "px"
        }
    }
    var textContainer1 = document.getElementById("textContainer1");
    var textContainer2 = document.getElementById("textContainer2");
    var textContainer3 = document.getElementById("textContainer3");
    var textContainer4 = document.getElementById("textContainer4");
    var textContainer5 = document.getElementById("textContainer5");
    if (parseInt(14 * BMSite.siteScale) > 12) {
        textContainer1.style.fontSize = parseInt(14 * BMSite.siteScale) + "px";
        textContainer2.style.fontSize = parseInt(14 * BMSite.siteScale) + "px";
        textContainer3.style.fontSize = parseInt(14 * BMSite.siteScale) + "px";
        textContainer4.style.fontSize =
            parseInt(14 * BMSite.siteScale) + "px";
        textContainer5.style.fontSize = parseInt(14 * BMSite.siteScale) + "px";
        textContainer1.style.lineHeight = parseInt(21 * BMSite.siteScale) + "px";
        textContainer2.style.lineHeight = parseInt(21 * BMSite.siteScale) + "px";
        textContainer3.style.lineHeight = parseInt(21 * BMSite.siteScale) + "px";
        textContainer4.style.lineHeight = parseInt(21 * BMSite.siteScale) + "px";
        textContainer5.style.lineHeight = parseInt(21 * BMSite.siteScale) + "px"
    } else {
        textContainer1.style.fontSize = "12px";
        textContainer2.style.fontSize =
            "12px";
        textContainer3.style.fontSize = "12px";
        textContainer4.style.fontSize = "12px";
        textContainer5.style.fontSize = "12px";
        textContainer1.style.lineHeight = "18px";
        textContainer2.style.lineHeight = "18px";
        textContainer3.style.lineHeight = "18px";
        textContainer4.style.lineHeight = "18px";
        textContainer5.style.lineHeight = "18px"
    } if (siteVersion == 1) {
        textContainer1.style.textAlign = "center";
        textContainer2.style.textAlign = "center";
        textContainer3.style.textAlign = "center";
        textContainer4.style.textAlign = "center";
        textContainer5.style.textAlign =
            "center";
        textContainer1.style.top = parseInt(460 * BMSite.siteScale) + "px";
        textContainer2.style.top = parseInt((1030 + 350 + 300 + 650 + 175) * BMSite.siteScale) + "px";
        textContainer3.style.top = parseInt((2580 + 350 + 600 + 650 + 175) * BMSite.siteScale) + "px";
        textContainer4.style.top = parseInt((4130 + 350 + 900 + 650 + 175) * BMSite.siteScale) + "px";
        textContainer5.style.top = parseInt((5680 + 450 + 1200 + 650 + 175) * BMSite.siteScale) + "px";
        for (var z = 1; z < 12; z++) {
            var t1 = document.getElementById("text1_" + z);
            t1.style.textIndent = "0px"
        }
        for (var z1 = 1; z1 < 9; z1++) {
            var t2 =
                document.getElementById("text2_" + z1);
            t2.style.textIndent = "0px"
        }
        for (var z2 = 1; z2 < 10; z2++) {
            var t3 = document.getElementById("text3_" + z2);
            t3.style.textIndent = "0px"
        }
        for (var z3 = 1; z3 < 7; z3++) {
            var t4 = document.getElementById("text4_" + z3);
            t4.style.textIndent = "0px"
        }
        for (var z4 = 1; z4 < 9; z4++) {
            var t5 = document.getElementById("text5_" + z4);
            t5.style.textIndent = "0px"
        }
        textContainer1.style.width = BMSite.siteWidthC + "px";
        textContainer2.style.width = BMSite.siteWidthC + "px";
        textContainer3.style.width = BMSite.siteWidthC + "px";
        textContainer4.style.width =
            BMSite.siteWidthC + "px";
        textContainer5.style.width = BMSite.siteWidthC + "px";
        textContainer1.style.left = parseInt((BMSite.siteWidthC - textContainer1.offsetWidth) / 2) + "px";
        textContainer2.style.left = parseInt((BMSite.siteWidthC - textContainer2.offsetWidth) / 2) + "px";
        textContainer3.style.left = parseInt((BMSite.siteWidthC - textContainer3.offsetWidth) / 2) + "px";
        textContainer4.style.left = parseInt((BMSite.siteWidthC - textContainer4.offsetWidth) / 2) + "px";
        textContainer5.style.left = parseInt((BMSite.siteWidthC - textContainer5.offsetWidth) /
            2) + "px"
    } else {
        textContainer1.style.left = parseInt(278 * BMSite.siteScale) + "px";
        textContainer2.style.left = parseInt(278 * BMSite.siteScale) + "px";
        textContainer3.style.left = parseInt(278 * BMSite.siteScale) + "px";
        textContainer4.style.left = parseInt(278 * BMSite.siteScale) + "px";
        textContainer5.style.left = parseInt(278 * BMSite.siteScale) + "px";
        textContainer1.style.top = parseInt(460 * BMSite.siteScale) + "px";
        textContainer2.style.top = parseInt(2040 * BMSite.siteScale) + "px";
        textContainer3.style.top = parseInt(3586 * BMSite.siteScale) +
            "px";
        textContainer4.style.top = parseInt(5121 * BMSite.siteScale) + "px";
        textContainer5.style.top = parseInt(6664 * BMSite.siteScale) + "px";
        for (var z = 1; z < 12; z++) document.getElementById("text1_" + z).style.textIndent = (z - 1) * 21 + "px";
        for (var z1 = 1; z1 < 9; z1++) document.getElementById("text2_" + z1).style.textIndent = (z1 - 1) * 21 + "px";
        for (var z2 = 1; z2 < 10; z2++) document.getElementById("text3_" + z2).style.textIndent = (z2 - 1) * 21 + "px";
        for (var z3 = 1; z3 < 7; z3++) document.getElementById("text4_" + z3).style.textIndent = (z3 - 1) * 21 + "px";
        for (var z4 =
            1; z4 < 9; z4++) document.getElementById("text5_" + z4).style.textIndent = (z4 - 1) * 21 + "px"
    }
    var followUs = document.getElementById("followUs");
    var language = document.getElementById("language");
    var soundCont = document.getElementById("soundCont");
    var logoBM = document.getElementById("logoContainer");
    logoBM.style.width = parseInt(392 * BMSite.siteScale) + "px";
    logoBM.style.height = parseInt(236 * BMSite.siteScale) + "px";
    if (siteVersion == 0) {
        logoBM.style.left = parseInt(474 * BMSite.siteScale) + "px";
        logoBM.style.top = parseInt(158 * BMSite.siteScale) +
            "px"
    } else if (siteVersion == 2) {
        logoBM.style.left = parseInt(474 * BMSite.siteScale) + "px";
        logoBM.style.top = parseInt(158 * BMSite.siteScale) + "px"
    } else {
        logoBM.style.width = parseInt(392 * BMSite.siteScale * 1.7) + "px";
        logoBM.style.height = parseInt(236 * BMSite.siteScale * 1.7) + "px";
        logoBM.style.left = parseInt((BMSite.siteWidthC - logoBM.offsetWidth + 40 * BMSite.siteScale) / 2) + "px";
        logoBM.style.top = parseInt(0) + "px"
    }
    var sndImg1 = document.getElementById("sndImg1");
    var sndImg1 = document.getElementById("sndImg1");
    if (BMSite.lang == "PL") {
        followUs.style.width =
            "160px";
        sndImg1.style.left = "64px";
        sndImg1.style.left = "64px"
    } else {
        followUs.style.width = "160px";
        sndImg1.style.left = "52px";
        sndImg2.style.left = "52px"
    } if (BMSite.siteScale < 1) {
        followUs.style.left = parseInt((380 + 95) * BMSite.siteScale) + "px";
        language.style.left = parseInt(790 * BMSite.siteScale) + "px";
        soundCont.style.left = parseInt(640 * BMSite.siteScale) + "px"
    } else {
        followUs.style.left = parseInt((485 + 95) * BMSite.siteScale) + "px";
        language.style.left = parseInt(860 * BMSite.siteScale) + "px";
        soundCont.style.left = parseInt(720 * BMSite.siteScale) +
            "px"
    } if (siteVersion == 1) {
        followUs.style.left = "10px";
        language.style.left = parseInt(browser_width - 140) + "px"
    }
    if (siteVersion == 2) followUs.style.left = parseInt((520 + 95) * BMSite.siteScale) + "px";
    var menuBottom = document.getElementById("menuHolderB");
    menuBottom.width = siteWidth;
    menuBottom.height = 44;
    menuBottom.style.width = siteWidth + "px";
    menuBottom.style.height = 44 + "px";
    menuBottom.style.left = parseInt((browser_width - BMSite.siteWidthN) / 2) + "px";
    if (canvasAnimationObj)
        if (canvasAnimationObj.gfx2) {
            canvasAnimationObj.shineContainer.x = -(BMSite.tempXT - parseInt(browser_width / 2)) / 20 + parseInt((browser_width - BMSite.siteWidthC) / 2) / BMSite.siteScale;
            canvasShinesObj.shineContainer.x = -(BMSite.tempXT - parseInt(browser_width / 2)) / 20 + parseInt((browser_width - BMSite.siteWidthC) / 2) / BMSite.siteScale;
            canvasMainBgObj.gfx2.x = -((BMSite.tempXT - parseInt(browser_width / 2)) / 15 + 153) / BMSite.siteScale;
            canvasMainBgObj.gfx3.x = -((BMSite.tempXT - parseInt(browser_width / 2)) / 40 + 153) / BMSite.siteScale;
            canvasMainBgObj.gfx4.x = -((BMSite.tempXT - parseInt(browser_width / 2)) /
                25 + 154) / BMSite.siteScale;
            canvasMainBgObj.gfx2.y = -BMSite.currentScrollYTmp * 0.65 - 201 - 4E3 + BMSite.siteYAddSpec;
            canvasMainBgObj.gfx3.y = -BMSite.currentScrollYTmp * 0.35 - 108 - 4E3 + BMSite.siteYAddSpec;
            canvasMainBgObj.gfx4.y = -BMSite.currentScrollYTmp * 0.5 - 200 - 4E3 + BMSite.siteYAddSpec;
            canvasShinesObj.mask2.y = BMSite.currentScrollYTmp - BMSite.siteYAddSpec;
            canvasShinesObj.mask1.y = BMSite.currentScrollYTmp - BMSite.siteYAddSpec;
            canvasAnimationObj.shineContainer.y = -BMSite.currentScrollYTmp + BMSite.siteYAddSpec;
            canvasShinesObj.shineContainer.y = -BMSite.currentScrollYTmp + BMSite.siteYAddSpec;
            updateStageBG()
        }
    if (BMSite.menuReady) document.getElementById("menuBottom").style.top = browser_height - 44 + "px";
    else document.getElementById("menuBottom").style.top = browser_height + "px";
    Scroller.resize()
}

function menuShow(e) {
    var menuHolder = document.getElementById("menuHolder");
    var menuTop = document.getElementById("menuTop");
    menuTop.style.height = browser_height + "px";
    var showMenuT = document.getElementById("showMenuT");
    showMenuT.style.opacity = 0.95;
    menuHolder.style.display = "inline";
    menuMobile.style.opacity = 0.2;
    var intro = document.getElementById("intro");
    var creation = document.getElementById("creation");
    var quality = document.getElementById("quality");
    var solutions = document.getElementById("solutions");
    var technology =
        document.getElementById("technology");
    var contact = document.getElementById("contact");
    var introW = document.getElementById("item01_1");
    var creationW = document.getElementById("item02_1");
    var qualityW = document.getElementById("item03_1");
    var solutionsW = document.getElementById("item04_1");
    var technologyW = document.getElementById("item05_1");
    var contactW = document.getElementById("item06_1");
    intro.style.left = parseInt((BMSite.siteWidthN - introW.offsetWidth - 28) / 2) + "px";
    creation.style.left = parseInt((BMSite.siteWidthN -
        creationW.offsetWidth - 28) / 2) + "px";
    quality.style.left = parseInt((BMSite.siteWidthN - qualityW.offsetWidth - 28) / 2) + "px";
    solutions.style.left = parseInt((BMSite.siteWidthN - solutionsW.offsetWidth - 28) / 2) + "px";
    technology.style.left = parseInt((BMSite.siteWidthN - technologyW.offsetWidth - 28) / 2) + "px";
    contact.style.left = parseInt((BMSite.siteWidthN - contactW.offsetWidth - 28) / 2) + "px"
}

function hasTouch() {
    return "ontouchstart" in window
}

function set2dTransformM(ele, x, y) {
    var v = "translate(" + x + "," + y + ")";
    ele.style.transform = v;
    ele.style.WebkitTransform = v;
    ele.style.msTransform = v;
    ele.style.MozTransform = v
}

function setElementTransformM(ele, x, y) {
    var v = "translate3d(" + x + "," + y + ", 0px)";
    ele.style.transform = v;
    ele.style.WebkitTransform = v
};