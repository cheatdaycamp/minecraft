$(document).ready(function() {
        var minecraft = {};

        minecraft.start = function() {
            minecraft.bindMenuActions();
        };

        minecraft.bindMenuActions = function() {
                minecraft.currentTool = "";

                //generating the board
                minecraft.generateSquares();
                minecraft.generateBoard();

                //main function to play
                $('#canvas div').click(minecraft.playOnCanvas);

                //Button - On Modal startGame - Starts new game
                $('#btnStartGame').click(minecraft.startGame);

                //User chooses a tool 
                $(".squares").on("click", minecraft.selectTool);

                //Button - On Main - Resets the board
                $('#btnReset').click(minecraft.resetMaterials);

                //Function for the toolbox buttons
                $('.square').click(function() {
                    minecraft.buttonClassFade("square")
                });

            } // end bind

        //Function to start the game
        minecraft.startGame = function() {
            $('#welcomeScreen').addClass('opacity-0');
            $('#mainScreen').show()
            $('#welcomeScreen').hide()
            minecraft.resetMaterials();
        }

        //Function to grab the button
        minecraft.buttonClassFade = function(someclass) {
            if (minecraft.currentTool !== event.target.id) {
                minecraft.currentTool = event.target.id;
                $(document.getElementsByClassName(someclass)).fadeTo('fast', '.5');
                $(document.getElementById(minecraft.currentTool)).fadeTo("fast", 1);
            }
            return minecraft.currentTool;
        }

        // function to reset the inventory, assigning quantity randomly every time.
        minecraft.resetMaterials = function() {
            $('#inventory .materialsIcons').each(function() {
                $(this).html(Math.floor((Math.random() * 8) + 1))
            })
        };

        //grabbing the amount of each materials
        minecraft.getInventory = function() {
            minecraft.counterClouds = (parseInt($('#clouds').html()));
            minecraft.counterTnt = (parseInt($('#tnt').html()));
            minecraft.counterEarth = (parseInt($('#earth').html()));
            minecraft.counterGrass = (parseInt($('#grass').html()));
            minecraft.counterWood = (parseInt($('#wood').html()));
            minecraft.counterLeaves = (parseInt($('#leaves').html()));
            minecraft.counterRock = (parseInt($('#rock').html()));
            minecraft.counterBrick = (parseInt($('#brick').html()));
        }

        //main click function
        minecraft.playOnCanvas = function() {
            minecraft.getInventory();
            if (minecraft.currentTool == "clouds") {
                if (minecraft.counterClouds > 0 && $(this).hasClass('sky')) {
                    $('#inventory div').css("border-color", "white");
                    $(this).removeClass("sky").addClass("clouds");
                    minecraft.counterClouds--;
                    $('#clouds').html(minecraft.counterClouds)
                } else {
                    $('#clouds').css("border-color", "red");
                }

            } else if (minecraft.currentTool == "earth") {
                if (minecraft.counterEarth > 0 && $(this).hasClass('sky')) {
                    $('#inventory div').css("border-color", "white");
                    $(this).removeClass("sky").addClass("earth");
                    minecraft.counterEarth--;
                    $('#earth').html(minecraft.counterEarth)
                } else {
                    $('#earth').css("border-color", "red");
                }

            } else if (minecraft.currentTool == "grass") {
                if (minecraft.counterGrass > 0 && $(this).hasClass('sky')) {
                    $('#inventory div').css("border-color", "white");
                    $(this).removeClass("sky").addClass("grass");
                    minecraft.counterGrass--;
                    $('#grass').html(minecraft.counterGrass)
                } else {
                    $('#grass').css("border-color", "red");
                }

            } else if (minecraft.currentTool == "wood") {
                if (minecraft.counterWood > 0 && $(this).hasClass('sky')) {
                    $('#inventory div').css("border-color", "white");
                    $(this).removeClass("sky").addClass("wood");
                    minecraft.counterWood--;
                    $('#wood').html(minecraft.counterWood)
                } else {
                    $('#wood').css("border-color", "red");
                }

            } else if (minecraft.currentTool == "rock") {
                if (minecraft.counterRock > 0 && $(this).hasClass('sky')) {
                    $('#inventory div').css("border-color", "white");
                    $(this).removeClass("sky").addClass("rock");
                    minecraft.counterRock--;
                    $('#rock').html(minecraft.counterRock)
                } else {
                    $('#rock').css("border-color", "red");
                }

            } else if (minecraft.currentTool == "brick") {
                if (minecraft.counterBrick > 0 && $(this).hasClass('sky')) {
                    $('#inventory div').css("border-color", "white");
                    $(this).removeClass("sky").addClass("brick");
                    minecraft.counterBrick--;
                    $('#brick').html(minecraft.counterBrick)
                } else {
                    $('#brick').css("border-color", "red");
                }

            } else if (minecraft.currentTool == "leaves") {
                if (minecraft.counterLeaves > 0 && $(this).hasClass('sky')) {
                    $('#inventory div').css("border-color", "white");
                    $(this).removeClass("sky").addClass("leaves");
                    minecraft.counterLeaves--;
                    $('#leaves').html(minecraft.counterLeaves)
                } else {
                    $('#leaves').css("border-color", "red");
                }

            } else if (minecraft.currentTool == "tnt") {
                if (minecraft.counterTnt > 0 && $(this).hasClass('sky')) {
                    $('#inventory div').css("border-color", "white");
                    $(this).removeClass("sky").addClass("tnt");
                    minecraft.counterTnt--;
                    $('#tnt').html(minecraft.counterTnt)
                } else {
                    $('#tnt').css("border-color", "red");
                }

            } else if (minecraft.currentTool == "toolAxe") {
                if ($(this).hasClass("wood")) {
                    $(this).removeClass("wood").addClass("sky");
                    minecraft.counterWood++;
                    $('#wood').html(minecraft.counterWood)
                } else {
                    $(this).css("border-color", "red");
                    $('#wood').css("border-color", "red");
                }
                if ($(this).hasClass("leaves")) {
                    $(this).removeClass("leaves").addClass("sky");
                    minecraft.counterLeaves++;
                    $('#leaves').html(minecraft.counterLeaves)

                } else {
                    $(this).css("border-color", "red");
                    $('#leaves').css("border-color", "red");
                }
            } else if (minecraft.currentTool == "toolPick") {
                if ($(this).hasClass("rock")) {
                    $(this).removeClass("rock").addClass("sky");
                    minecraft.counterRock++;
                    $('#rock').html(minecraft.counterRock)

                } else {
                    $(this).css("border-color", "red");
                    $('#rock').css("border-color", "red");
                }
                if ($(this).hasClass("brick")) {
                    $(this).removeClass("brick").addClass("sky");
                    minecraft.counterBrick++;
                    $('#brick').html(minecraft.counterBrick)
                } else {
                    $(this).css("border-color", "red");
                    $('#brick').css("border-color", "red");
                }
            } else if (minecraft.currentTool == "toolSword") {
                if ($(this).hasClass("clouds")) {
                    $(this).removeClass("clouds").addClass("sky");
                    minecraft.counterClouds++;
                    $('#clouds').html(minecraft.counterClouds)

                } else {
                    $(this).css("border-color", "red");
                    $('#clouds').css("border-color", "red");
                }
                if ($(this).hasClass("tnt")) {
                    $(this).removeClass("tnt").addClass("sky");
                    minecraft.counterTnt++;
                    $('#tnt').html(minecraft.counterTnt)
                } else {
                    $(this).css("border-color", "red");
                    $('#tnt').css("border-color", "red");
                }
            } else if (minecraft.currentTool == "toolShovel") {
                if ($(this).hasClass("earth")) {
                    $(this).removeClass("earth").addClass("sky");
                    minecraft.counterEarth++;
                    $('#earth').html(minecraft.counterEarth)
                } else {
                    $(this).css("border-color", "red");
                    $('#earth').css("border-color", "red");
                }
                if ($(this).hasClass("grass")) {
                    $(this).removeClass("grass").addClass("sky");
                    minecraft.counterGrass++;
                    $('#grass').html(minecraft.counterGrass)

                } else {
                    $(this).css("border-color", "red");
                    $('#grass').css("border-color", "red");
                }
            }
        }

        minecraft.generateSquares = function() {
            var unitSize = "40px";
            minecraft.bricksOnWidth = parseInt($('#canvas').width() / parseInt(unitSize));
            minecraft.bricksOnHeight = parseInt($('#canvas').height() / parseInt(unitSize));
            canvasArea = minecraft.bricksOnWidth * minecraft.bricksOnHeight;
            for (var i = 0; i < minecraft.bricksOnHeight; i++) {
                for (var j = 0; j < minecraft.bricksOnWidth; j++) {
                    var id = `R_${(parseInt([i]) + 1)} C_${(parseInt([j]) + 1)}`;
                    $("#canvas").append($(`<div class="${id} tile materialsIcons sky"></div>`))
                }
                $('#canvas div').height(unitSize);
                $('#canvas div').width(unitSize);
            }
        }

        minecraft.generateBoard = function() {

            // generating grass line
            $('.R_12').removeClass("sky").addClass("grass");
            var height = minecraft.bricksOnHeight;
            // generating earth
            for (var i = height; i > 11; i--) {
                $(`.R_${[i]}`).removeClass("sky").addClass("earth");
            }
            // generating random rocks
            var max = minecraft.bricksOnHeight;
            var min = minecraft.bricksOnHeight - 4;
            var randomRocks = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
            for (var i = 0; i < randomRocks; i++) {
                var randomX = (Math.floor((Math.random() * minecraft.bricksOnWidth) + 1));
                var randomY = Math.floor(Math.random() * (max - min + 1)) + min;
                ($(`.R_${[randomY]}.C_${[randomX]}`)).removeClass('earth', "rock", "grass").addClass("rock");
            }

            //random cloud
            minecraft.randomCloud(20, 6)

            //randomTrees
            var amountOfTres = Math.floor(Math.random() * 4) + 1
            console.log(amountOfTres)
            switch (amountOfTres) {
                case 1:
                    minecraft.randomTree(20, 3);
                    break;
                case 2:
                    minecraft.randomTree(10, 3);
                    minecraft.randomTree(20, 14);
                    break;
                case 3:
                    minecraft.randomTree(7, 3);
                    minecraft.randomTree(14, 9);
                    minecraft.randomTree(20, 16);
                    break;
                case 4:
                    minecraft.randomTree(5, 3);
                    minecraft.randomTree(10, 8);
                    minecraft.randomTree(15, 14);
                    minecraft.randomTree(20, 18);
                    break;
            }
        }

        minecraft.randomCloud = function(max, min) {
            var randomX = Math.floor(Math.random() * (max - min + 1)) + min;
            var H = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
            ($(`.R_${5-H}.C_${(randomX)}`)).removeClass('sky').addClass("clouds");
            ($(`.R_${5-H}.C_${(randomX-1)}`)).removeClass('sky').addClass("clouds");
            ($(`.R_${5-H}.C_${(randomX)-2}`)).removeClass('sky').addClass("clouds");
            ($(`.R_${5-H}.C_${(randomX)-3}`)).removeClass('sky').addClass("clouds");
            ($(`.R_${5-H}.C_${(randomX)-4}`)).removeClass('sky').addClass("clouds");
            ($(`.R_${4-H}.C_${(randomX)}`)).removeClass('sky').addClass("clouds");
            ($(`.R_${4-H}.C_${(randomX-1)}`)).removeClass('sky').addClass("clouds");
            ($(`.R_${4-H}.C_${(randomX)-2}`)).removeClass('sky').addClass("clouds");
            ($(`.R_${4-H}.C_${(randomX)-3}`)).removeClass('sky').addClass("clouds");
            ($(`.R_${3-H}.C_${(randomX)-1}`)).removeClass('sky').addClass("clouds");
        }


        minecraft.randomTree = function(max, min) {
            var H = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
            var randomX = Math.floor(Math.random() * (max - min + 1)) + min;
            ($(`.R_${7+H}.C_${(randomX)}`)).removeClass('sky').addClass("leaves");
            ($(`.R_${7+H}.C_${(randomX-1)}`)).removeClass('sky').addClass("leaves");
            ($(`.R_${7+H}.C_${(randomX-2)}`)).removeClass('sky').addClass("leaves");
            ($(`.R_${8+H}.C_${(randomX)}`)).removeClass('sky').addClass("leaves");
            ($(`.R_${8+H}.C_${(randomX-1)}`)).removeClass('sky').addClass("wood");
            ($(`.R_${8+H}.C_${(randomX-2)}`)).removeClass('sky').addClass("leaves");
            ($(`.R_${6+H}.C_${(randomX)}`)).removeClass('sky').addClass("leaves");
            ($(`.R_${6+H}.C_${(randomX-1)}`)).removeClass('sky').addClass("leaves");
            ($(`.R_${6+H}.C_${(randomX-2)}`)).removeClass('sky').addClass("leaves");
            ($(`.R_${9}.C_${(randomX-1)}`)).removeClass('sky').addClass("wood");
            ($(`.R_${10}.C_${(randomX-1)}`)).removeClass('sky').addClass("wood");
            ($(`.R_${11}.C_${(randomX-1)}`)).removeClass('sky').addClass("wood");

        }

        minecraft.start();


    }) //document readyx;5