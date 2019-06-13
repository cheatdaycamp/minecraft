$(document).ready(function() {
        var minecraft = {};

        minecraft.start = function() {
            minecraft.bindMenuActions();
        };

        minecraft.bindMenuActions = function() {
                //declaring variables inside the minecraft object:
                minecraft.inventorySky = "",
                    minecraft.inventoryClouds,
                    minecraft.inventoryTnt,
                    minecraft.inventoryEarth,
                    minecraft.inventoryGrass,
                    minecraft.inventoryRock,
                    minecraft.inventoryBrick,
                    minecraft.inventorywood,
                    minecraft.inventoryLeaves,
                    minecraft.currentTool = "",
                    minecraft.widthChoosen = "",
                    minecraft.heightChoosen = "";


                //Button - On Modal startGame - Starts new game
                // $('#btnStartGame').click(minecraft.startGame);

                //Button - On Main - Resets the board
                $('#btnReset').click(minecraft.resetMaterials);

                $('.square').click(function() { //buttons with class square: tool buttons, and material buttons.
                        // minecraft.removeMaterial.call(this);
                        minecraft.buttonClassFade("square");
                    })
                    // $('.temporaryclass').click(addRemoveBrick);
            } // end bind

        minecraft.buttonClassFade = function(someclass) {
            if (minecraft.currentTool !== event.target.id) {
                minecraft.currentTool = event.target.id;
                $(document.getElementsByClassName(someclass)).fadeTo('fast', '.5');
                $(document.getElementById(minecraft.currentTool)).fadeTo("fast", 1);
                console.log(minecraft.currentTool)
            }
            return minecraft.currentTool;
        }

        // minecraft.addRemoveBrick = function() {

        // }
        minecraft.grabCanvas = function() {

        }
        minecraft.startGame = function() {
            $('#welcomeScreen').addClass('opacity-0');
            $('#mainScreen').show()
            $('#welcomeScreen').hide()
            minecraft.resetMaterials();
            // minecraft.generateSquares();
        }

        // function to reset the inventory
        minecraft.resetMaterials = function() {
            // add counters here
            $('#clouds').html(8);
            $('#earth').html(5);
            $('#grass').html(3);
            $('#rock').html(4);
            $('#brick').html(5);
            $('#wood').html(3);
            $('#leaves').html(4);
            $('#tnt').html(3);
        };
        minecraft.generateSquares = function() {
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
        $('#canvas').append('<div class="second_' + 1 + i + ' tile tileSky materialsIcons" ></div>');


        for (var j = 0; j < array[i].length; j++) {

            $('#canvas').append('<div class="second_' + 1 + i + ' tile tileSky materialsIcons" ></div>');


        }
    }
}
createTiles(matrixBackground);

//added tarek



grass();

function grass() {
    for (var i = 111; i < 112; i++) {

        var grass = $(".second_" + i);
        grass.removeClass("tileSky");
        grass.addClass("grass");
    }
}

grass();

function earth() {
    for (var i = 111; i < 300; i++) {

        var earth = $(".second_" + i);
        earth.removeClass("tileSky");
        earth.addClass("earth");
    }
}

earth();

function tree() {
    $("div").eq(98).css('background-image', 'url(img/PNGS/leaves.png)')
    $("div").eq(99).css('background-image', 'url(img/PNGS/leaves.png)')
    $("div").eq(100).css('background-image', 'url(img/PNGS/leaves.png)')
    $("div").eq(117).css('background-image', 'url(img/PNGS/leaves.png)')
    $("div").eq(118).css('background-image', 'url(img/PNGS/leaves.png)')
    $("div").eq(119).css('background-image', 'url(img/PNGS/leaves.png)')
    $("div").eq(136).css('background-image', 'url(img/PNGS/leaves.png)')
    $("div").eq(138).css('background-image', 'url(img/PNGS/leaves.png)')

    $("div").eq(137).css('background-image', 'url(img/PNGS/trunk.png)')
    $("div").eq(156).css('background-image', 'url(img/PNGS/trunk.png)')
    $("div").eq(175).css('background-image', 'url(img/PNGS/trunk.png)')
    $("div").eq(194).css('background-image', 'url(img/PNGS/trunk.png)')


    $("div").eq(127).css('background-image', 'url(img/PNGS/leaves.png)')
    $("div").eq(128).css('background-image', 'url(img/PNGS/leaves.png)')
    $("div").eq(129).css('background-image', 'url(img/PNGS/leaves.png)')
    $("div").eq(146).css('background-image', 'url(img/PNGS/leaves.png)')
    $("div").eq(148).css('background-image', 'url(img/PNGS/leaves.png)')
    $("div").eq(147).css('background-image', 'url(img/PNGS/leaves.png)')
    $("div").eq(165).css('background-image', 'url(img/PNGS/leaves.png)')
    $("div").eq(166).css('background-image', 'url(img/PNGS/leaves.png)')
    $("div").eq(167).css('background-image', 'url(img/PNGS/leaves.png)')


    $("div").eq(166).css('background-image', 'url(img/PNGS/trunk.png)')
    $("div").eq(185).css('background-image', 'url(img/PNGS/trunk.png)')
    $("div").eq(204).css('background-image', 'url(img/PNGS/trunk.png)')


}
tree();

function rock() {
    $("div").eq(200).css('background-image', 'url(img/PNGS/rock02.png)')
    $("div").eq(240).css('background-image', 'url(img/PNGS/rock02.png)')
    $("div").eq(198).css('background-image', 'url(img/PNGS/rock02.png)')
    $("div").eq(260).css('background-image', 'url(img/PNGS/rock02.png)')

}
rock();

function clouds() {


    $("div").eq(47).css('background-image', 'url(img/PNGS/clouds.png)')
    $("div").eq(48).css('background-image', 'url(img/PNGS/clouds.png)')
    $("div").eq(49).css('background-image', 'url(img/PNGS/clouds.png)')

    $("div").eq(65).css('background-image', 'url(img/PNGS/clouds.png)')
    $("div").eq(66).css('background-image', 'url(img/PNGS/clouds.png)')
    $("div").eq(67).css('background-image', 'url(img/PNGS/clouds.png)')
    $("div").eq(68).css('background-image', 'url(img/PNGS/clouds.png)')
    $("div").eq(69).css('background-image', 'url(img/PNGS/clouds.png)')


    $("div").eq(85).css('background-image', 'url(img/PNGS/clouds.png)')
    $("div").eq(86).css('background-image', 'url(img/PNGS/clouds.png)')
    $("div").eq(87).css('background-image', 'url(img/PNGS/clouds.png)')

    $("div").eq(57).css('background-image', 'url(img/PNGS/clouds.png)')
    $("div").eq(58).css('background-image', 'url(img/PNGS/clouds.png)')

    $("div").eq(75).css('background-image', 'url(img/PNGS/clouds.png)')
    $("div").eq(77).css('background-image', 'url(img/PNGS/clouds.png)')
    $("div").eq(76).css('background-image', 'url(img/PNGS/clouds.png)')


    $("div").eq(95).css('background-image', 'url(img/PNGS/clouds.png)')
    $("div").eq(96).css('background-image', 'url(img/PNGS/clouds.png)')


}
clouds();