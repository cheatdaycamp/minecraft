$(document).ready(function() {
        var minecraft = {};

        minecraft.start = function() {
            minecraft.bindMenuActions();
        };

        minecraft.bindMenuActions = function() {
                minecraft.inventorySky = "",
                    minecraft.inventoryClouds,
                    minecraft.inventoryTnt,
                    minecraft.inventoryEarth,
                    minecraft.inventoryGrass,
                    minecraft.inventoryRock,
                    minecraft.inventoryBrick,
                    minecraft.inventorywood,
                    minecraft.inventoryLeaves,
                    minecraft.currentTool = "";


                //Button - On Modal startGame - Starts new game
                $('#btnStartGame').click(minecraft.startGame);

                //Button - On Main - Resets the board
                $('#btnReset').click(minecraft.resetMaterials);

                $('.square').click(function() {
                    // minecraft.removeMaterial.call(this);
                    minecraft.buttonClassFade("square");

                })
            } // end bind

        minecraft.buttonClassFade = function(someclass) {
            console.log("entry tool: " + minecraft.currentTool)
            if (minecraft.currentTool !== event.target.id) {
                minecraft.currentTool = event.target.id;
                $(document.getElementsByClassName(someclass)).fadeTo('fast', '.2');
                $(document.getElementById(minecraft.currentTool)).fadeTo("fast", 1);
                console.log(minecraft.currentTool)
            }
            return minecraft.currentTool;

        }

        minecraft.removeMaterial = function() {

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