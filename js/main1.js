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

}); //document readyx;; //class to create matrix:

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
var array1 = new Arraynew(90);
var array2 = new Arraynew(40);

var matrixBackground = array1.matrix(array2);

function createTiles(array) {
    for (var i = 0; i < array.length; i++) {
        var tileRow = $("<div/>");
        tileRow.addClass("tile");

        $("#canvas").append(tileRow);
        for (var j = 0; j < array[i].length; j++) {
            var tileCol = $("<div/>");
            tileCol.addClass("tile");
            tileCol.addClass("tileSky");
            tileCol..attr('id', this.id + '_' + new_id);
            $("#canvas").append(tileCol);
        }
    }
}
createTiles(matrixBackground);

//added tarek

function cloud() {
    for (var i = 40; i < 80; i++) {

        var tree = $("#tt" + i);
        tree.removeClass("tileSky");
        tree.addClass(".wood");
    }
}

cloud();