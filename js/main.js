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
                $('#btnStartGame').click(minecraft.startGame);

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
var array2 = new Arraynew(21);

var matrixBackground = array1.matrix(array2);

function createTiles(array) {
    for (var i = 0; i < array.length; i++) {
        $('#canvas').append('<div class="second_' + i + 1 + ' tile tileSky" ></div>');


        for (var j = 0; j < array[i].length; j++) {

            $('#canvas').append('<div class="second_' + i + 1 + ' tile tileSky" ></div>');


        }
    }
}
createTiles(matrixBackground);

//added tarek



grass();

function grass() {
    for (var i = 151; i < 152; i++) {

        var grass = $(".second_" + i);
        grass.removeClass("tileSky");
        grass.addClass("grass");
    }
}

grass();

function earth() {
    for (var i = 171; i < 300; i++) {

        var earth = $(".second_" + i);
        earth.removeClass("tileSky");
        earth.addClass("earth");
    }
}

earth();
// function wood() {
//     for (var i = 40; i < 80; i++) {

//         var wood = $("#first_");
//         wood.removeClass("tileSky");
//         wood.addClass("wood");
//     }
// }

// wood();

// function earth() {
//     for (var i = 0; i < 10; i++) {

//         var earth = $(".tile");
//         earth.removeClass("tileSky");
//         earth.addClass("earth");
//     }
// }

// earth();

// function rock() {
//     for (var i = 0; i < 10; i++) {

//         var tree = $(".tile");
//         tree.removeClass("tileSky");
//         tree.addClass("rock");
//     }
// }

// rock();