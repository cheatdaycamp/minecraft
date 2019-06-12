$(document).ready(function() {
        var minecraft = {};

        minecraft.start = function() {
            minecraft.bindMenuActions();
        };

        minecraft.bindMenuActions = function() {

                //Button - On Modal startGame - Starts new game
                $('#btnStartGame').click(minecraft.startGame);

                //Button - On Main - Resets the board
                $('#btnReset').click(minecraft.resetMaterials);

            } // end bind

        minecraft.startGame = function() {
            $('#welcomeScreen').addClass('opacity-0');
            $('#mainScreen').show()
            $('#welcomeScreen').hide()
            minecraft.resetMaterials();
            minecraft.generateSquares();
        }
        minecraft.resetMaterials = function() {
            $('.square span').html(0);
            $('#clouds span').html(8);
            $('#earth span').html(5);
            $('#grass span').html(3);
            $('#rock span').html(4);
            $('#brick span').html(5);
            $('#treeTrunk span').html(3);
            $('#treeTop span').html(4);
            $('#tnt span').html(3);
        };
        minecraft.generateSquares = function() {
            var unitSize = "20px",
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