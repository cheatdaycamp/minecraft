$(document).ready(function () {
    var minecraft = {};

    minecraft.start = function () {
        minecraft.bindMenuActions();
    };

    minecraft.bindMenuActions = function () {

        minecraft.chosenTool;
        minecraft.chosenMaterial;
        minecraft.currentTool = "";
        minecraft.widthChoosen = "",
            minecraft.heightChoosen = "";

        //main function to play
        $('#canvas div').click(minecraft.playOnCanvas);

        //Button - On Modal startGame - Starts new game
        $('#btnStartGame').click(minecraft.startGame);

        //Button - On Main - Resets the board
        $('#btnReset').click(minecraft.resetMaterials);

        //User chooses a tool 
        $(".squares").on("click", minecraft.selectTool);

        //Button - On Modal startGame - Starts new game
        $('#btnStartGame').click(minecraft.startGame);

        //Button - On Main - Resets the board
        $('#btnReset').click(minecraft.resetMaterials);

        //Function for the toolbox buttons
        $('.square').click(function () {
            minecraft.buttonClassFade("square")
        });

    } // end bind

    minecraft.buttonClassFade = function (someclass) {
        if (minecraft.currentTool !== event.target.id) {
            minecraft.currentTool = event.target.id;
            $(document.getElementsByClassName(someclass)).fadeTo('fast', '.5');
            $(document.getElementById(minecraft.currentTool)).fadeTo("fast", 1);
            console.log(minecraft.currentTool)
        }
        return minecraft.currentTool;
    }

    minecraft.grabCanvas = function () {

    }
    minecraft.startGame = function () {
        $('#welcomeScreen').addClass('opacity-0');
        $('#mainScreen').show()
        $('#welcomeScreen').hide()
        minecraft.resetMaterials();
        // minecraft.generateSquares();
    }

    // function to reset the inventory
    minecraft.resetMaterials = function () {
        // add counters here
        $('#clouds').html(2); //8
        $('#earth').html(1); //5
        $('#grass').html(1); //3
        $('#rock').html(1); //4
        $('#brick').html(1); //5
        $('#wood').html(1); //3
        $('#leaves').html(1); //1
        $('#tnt').html(1); //3
    };

    minecraft.getInventory = function () {
        minecraft.counterClouds = (parseInt($('.wrapperToolPallete a.clouds').html()));
        minecraft.counterTnt = (parseInt($('.wrapperToolPallete a.tnt').html()));
        minecraft.counterEarth = (parseInt($('.wrapperToolPallete a.earth').html()));
        minecraft.counterGrass = (parseInt($('.wrapperToolPallete a.grass').html()));
        minecraft.counterWood = (parseInt($('.wrapperToolPallete a.wood').html()));
        minecraft.counterLeaves = (parseInt($('.wrapperToolPallete a.leaves').html()));
        minecraft.counterRock = (parseInt($('.wrapperToolPallete a.rock').html()));
        minecraft.counterBrick = (parseInt($('.wrapperToolPallete a.brick').html()));
    }


    minecraft.playOnCanvas = function () {
        minecraft.getInventory();
        if (minecraft.currentTool == "clouds") {
            if (minecraft.counterClouds > 0 && $(this).hasClass('sky')) {
                $('#inventory div').css("border-color", "white");
                $(this).removeClass("sky");
                $(this).addClass("clouds").removeClass("sky");
                minecraft.counterClouds--;
                $('.wrapperToolPallete a.clouds').html(minecraft.counterClouds)
                $(this).css("border-color", "white");

            } else {
                $('#clouds').addClass('redBorderEffect');
                setTimeout(function () {
                    $('#clouds').removeClass('redBorderEffect');
                }, 300);
            }

        } else if (minecraft.currentTool == "earth") {
            if (minecraft.counterEarth > 0 && $(this).hasClass('sky')) {
                $('#inventory div').css("border-color", "white");
                $(this).removeClass("sky");
                $(this).addClass("earth");
                minecraft.counterEarth--;
                $('.wrapperToolPallete a.earth').html(minecraft.counterEarth)
                $(this).css("border-color", "white");

            } else {
                $('#earth').addClass('redBorderEffect');
                setTimeout(function () {
                    $('#earth').removeClass('redBorderEffect');
                }, 300);
            }

        } else if (minecraft.currentTool == "grass") {
            if (minecraft.counterGrass > 0 && $(this).hasClass('sky')) {
                $('#inventory div').css("border-color", "white");
                $(this).removeClass("sky");
                $(this).addClass("grass");
                minecraft.counterGrass--;
                $('.wrapperToolPallete a.grass').html(minecraft.counterGrass)
                $(this).css("border-color", "white");

            } else {
                $('#grass').addClass('redBorderEffect');
                setTimeout(function () {
                    $('#grass').removeClass('redBorderEffect');
                }, 300);
            }

        } else if (minecraft.currentTool == "wood") {
            if (minecraft.counterWood > 0 && $(this).hasClass('sky')) {
                $('#inventory div').css("border-color", "white");
                $(this).removeClass("sky");
                $(this).addClass("wood");
                minecraft.counterWood--;
                $('.wrapperToolPallete a.wood').html(minecraft.counterWood)
                $(this).css("border-color", "white");

            } else {
                $('#wood').addClass('redBorderEffect');
                setTimeout(function () {
                    $('#wood').removeClass('redBorderEffect');
                }, 300);;
            }

        } else if (minecraft.currentTool == "rock") {
            if (minecraft.counterRock > 0 && $(this).hasClass('sky')) {
                $('#inventory div').css("border-color", "white");
                $(this).removeClass("sky");
                $(this).addClass("rock");
                minecraft.counterRock--;
                $('.wrapperToolPallete a.rock').html(minecraft.counterRock)
                $(this).css("border-color", "white");

            } else {
                $('#rock').addClass('redBorderEffect');
                setTimeout(function () {
                    $('#rock').removeClass('redBorderEffect');
                }, 300);;
            }

        } else if (minecraft.currentTool == "brick") {
            if (minecraft.counterBrick > 0 && $(this).hasClass('sky')) {
                $('#inventory div').css("border-color", "white");
                $(this).removeClass("sky");
                $(this).addClass("brick");
                minecraft.counterBrick--;
                $('.wrapperToolPallete a.brick').html(minecraft.counterBrick)
                $(this).css("border-color", "white");

            } else {
                $('#brick').addClass('redBorderEffect');
                setTimeout(function () {
                    $('#brick').removeClass('redBorderEffect');
                }, 300);
            }

        } else if (minecraft.currentTool == "leaves") {
            if (minecraft.counterLeaves > 0 && $(this).hasClass('sky')) {
                $('#inventory div').css("border-color", "white");
                $(this).removeClass("sky");
                $(this).addClass("leaves");
                minecraft.counterLeaves--;
                $('.wrapperToolPallete a.leaves').html(minecraft.counterLeaves)
                $(this).css("border-color", "white");

            } else {
                $('#leaves').addClass('redBorderEffect');
                setTimeout(function () {
                    $('#leaves').removeClass('redBorderEffect');
                }, 300);
            }

        } else if (minecraft.currentTool == "tnt") {
            if (minecraft.counterTnt > 0 && $(this).hasClass('sky')) {
                $('#inventory div').css("border-color", "white");
                $(this).removeClass("sky");
                $(this).addClass("tnt");
                minecraft.counterTnt--;
                $('.wrapperToolPallete a.tnt').html(minecraft.counterTnt)
                $(this).css("border-color", "white");

            } else {
                $('#tnt').addClass('redBorderEffect');
                setTimeout(function () {
                    $('#tnt').removeClass('redBorderEffect');
                }, 300);
            }

        } else if (minecraft.currentTool == "toolAxe") {
            if ($(this).hasClass("wood")) {
                $(this).removeClass("wood");
                $(this).addClass("sky");
                minecraft.counterWood++;
                $('.wrapperToolPallete a.wood').html(minecraft.counterWood)
                $(this).css("border-color", "white");
            }
            else if ($(this).hasClass("leaves")) {
                $(this).removeClass("leaves");
                $(this).addClass("sky");
                minecraft.counterLeaves++;
                $('.wrapperToolPallete a.leaves').html(minecraft.counterLeaves)
                $(this).css("border-color", "white");

            } else {
                $('#toolAxe').addClass('redBorderEffect');
                setTimeout(function () {
                    $('#toolAxe').removeClass('redBorderEffect');
                }, 300);;
            }

        } else if (minecraft.currentTool == "toolPick") {
            if ($(this).hasClass("rock")) {
                $(this).removeClass("rock");
                $(this).addClass("sky");
                minecraft.counterRock++;
                $('.wrapperToolPallete a.rock').html(minecraft.counterRock)
                $(this).css("border-color", "white");

            }
            else if ($(this).hasClass("brick")) {
                $(this).removeClass("brick");
                $(this).addClass("sky");
                minecraft.counterBrick++;
                $('.wrapperToolPallete a.brick').html(minecraft.counterBrick)
                $(this).css("border-color", "white");

            } else {
                $('#toolPick').addClass('redBorderEffect');
                setTimeout(function () {
                    $('#toolPick').removeClass('redBorderEffect');
                }, 300);
            }

        } else if (minecraft.currentTool == "toolSword") {
            if ($(this).hasClass("clouds")) {
                $(this).removeClass("clouds");
                $(this).addClass("sky");
                minecraft.counterClouds++;
                $('.wrapperToolPallete a.clouds').html(minecraft.counterClouds)
                $(this).css("border-color", "white");

            }
            else if ($(this).hasClass("tnt")) {
                $(this).removeClass("tnt");
                $(this).addClass("sky");
                minecraft.counterTnt++;
                $('.wrapperToolPallete a.tnt').html(minecraft.counterTnt)
                $(this).css("border-color", "white");
            }
            else {
                $('#toolSword').addClass('redBorderEffect');
                setTimeout(function () {
                    $('#toolSword').removeClass('redBorderEffect');
                }, 300);
            }

        } else if (minecraft.currentTool == "toolShovel") {
            if ($(this).hasClass("earth")) {
                $(this).removeClass("earth");
                $(this).addClass("sky");
                minecraft.counterEarth++;
                $('.wrapperToolPallete a.earth').html(minecraft.counterEarth)
                $(this).css("border-color", "white");

            }
           else if ($(this).hasClass("grass")) {
                $(this).removeClass("grass");
                $(this).addClass("sky");
                minecraft.counterGrass++;
                $('.wrapperToolPallete a.grass').html(minecraft.counterGrass)
                $(this).css("border-color", "white");

            } else {

                $('#toolShovel').addClass('redBorderEffect');
                setTimeout(function () {
                    $('#toolShovel').removeClass('redBorderEffect');
                }, 300);
            }
        }

    }

    minecraft.generateSquares = function () {
        var unitSize = "40px",
            bricksOnWidth = parseInt($('#canvas').width() / parseInt(unitSize)),
            bricksOnHeight = parseInt($('#canvas').height() / parseInt(unitSize)),
            canvasArea = bricksOnWidth * bricksOnHeight
        console.log(canvasArea);
        for (var i = 0; i < canvasArea; i++) {
            $('#canvas').append($('<div>', { class: 'sky' }));
        }
        $('#canvas div').width(unitSize);
        $('#canvas div').height(unitSize);

    }

    minecraft.start();

}) //document readyx;

//added
class Arraynew {
    constructor(length) {
        this.length = length;
    }
    createArray() {
        var arraynew2 = [];
        for (var i = 0; i < this.length; i++) {
            arraynew2.push(i);
        }
        return arraynew2;
    }
    matrix(array) {
        var outerArray = this.createArray();
        var innerArray = array.createArray();
        for (var i = 0; i < this.length; i++) {
            outerArray.splice(i, 1, innerArray);
        }
        return outerArray;
    }
}
var array1 = new Arraynew(50);
var array2 = new Arraynew(18);

var matrixBackground = array1.matrix(array2);

function createTiles(array) {
    for (var i = 0; i < array.length; i++) {
        $('#canvas').append('<div class="second_' + 1 + i + ' tile sky materialsIcons" ></div>');


        for (var j = 0; j < array[i].length; j++) {

            $('#canvas').append('<div class="second_' + 1 + i + ' tile sky materialsIcons" ></div>');


        }
    }
}
createTiles(matrixBackground);

//added tarek

function grass() {
    for (var i = 111; i < 112; i++) {

        var grass = $(".second_" + i);
        grass.removeClass("sky");
        grass.addClass("grass");
    }
}
grass();

function earth() {
    for (var i = 112; i < 300; i++) {

        var earth = $(".second_" + i);
        earth.removeClass("sky");
        earth.addClass("earth");
    }
}
earth();

function tree() {
    $("div").eq(117).addClass("leaves").removeClass("sky");
    $("div").eq(118).addClass("leaves").removeClass("sky");
    $("div").eq(119).addClass("leaves").removeClass("sky");
    $("div").eq(136).addClass("leaves").removeClass("sky");
    $("div").eq(137).addClass("leaves").removeClass("sky");
    $("div").eq(138).addClass("leaves").removeClass("sky");
    $("div").eq(155).addClass("leaves").removeClass("sky");
    $("div").eq(157).addClass("leaves").removeClass("sky");

    $("div").eq(156).addClass("wood").removeClass("sky");
    $("div").eq(175).addClass("wood").removeClass("sky");
    $("div").eq(194).addClass("wood").removeClass("sky");
    $("div").eq(213).addClass("wood").removeClass("sky");


    $("div").eq(186).addClass("leaves").removeClass("sky");
    $("div").eq(184).addClass("leaves").removeClass("sky");
    $("div").eq(146).addClass("leaves").removeClass("sky");
    $("div").eq(148).addClass("leaves").removeClass("sky");
    $("div").eq(147).addClass("leaves").removeClass("sky");
    $("div").eq(165).addClass("leaves").removeClass("sky");
    $("div").eq(166).addClass("leaves").removeClass("sky");
    $("div").eq(167).addClass("leaves").removeClass("sky");


    $("div").eq(185).addClass("wood").removeClass("sky");
    $("div").eq(204).addClass("wood").removeClass("sky");
    $("div").eq(223).addClass("wood").removeClass("sky");
}
tree();

function rock() {
    $("div").eq(230).addClass("rock").removeClass("sky");
    $("div").eq(240).addClass("rock").removeClass("sky");
    $("div").eq(219).addClass("rock").removeClass("sky");
    $("div").eq(218).addClass("rock").removeClass("sky");
    $("div").eq(217).addClass("rock").removeClass("sky");
    $("div").eq(199).addClass("rock").removeClass("sky");
    $("div").eq(260).addClass("rock").removeClass("sky")


}
rock();

function clouds() {
    $("div").eq(47).addClass("clouds").removeClass("sky");
    $("div").eq(48).addClass("clouds").removeClass("sky");
    $("div").eq(49).addClass("clouds").removeClass("sky");

    $("div").eq(65).addClass("clouds").removeClass("sky");
    $("div").eq(66).addClass("clouds").removeClass("sky");
    $("div").eq(67).addClass("clouds").removeClass("sky");
    $("div").eq(68).addClass("clouds").removeClass("sky");
    $("div").eq(69).addClass("clouds").removeClass("sky");


    $("div").eq(85).addClass("clouds").removeClass("sky");
    $("div").eq(86).addClass("clouds").removeClass("sky");
    $("div").eq(87).addClass("clouds").removeClass("sky");

    $("div").eq(57).addClass("clouds").removeClass("sky");
    $("div").eq(94).addClass("clouds").removeClass("sky");
    $("div").eq(93).addClass("clouds").removeClass("sky");
    $("div").eq(92).addClass("clouds").removeClass("sky");
    $("div").eq(74).addClass("clouds").removeClass("sky");
    $("div").eq(75).addClass("clouds").removeClass("sky");
    $("div").eq(77).addClass("clouds").removeClass("sky");
    $("div").eq(76).addClass("clouds").removeClass("sky");


    $("div").eq(95).addClass("clouds").removeClass("sky");
}
clouds();