$(document).ready(function() {

        //object that holds the whole functions:
        var minecraft = {};

        //launching the bind
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
                $('#btnStartPlay').click(minecraft.startGame)
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
            $('#audio')[0].play();
            $('#welcomeScreen').addClass('opacity-0');
            $('#mainScreen').show()
            $('#welcomeScreen').hide()
            minecraft.resetMaterials();
        }

        //Function to grab the actual button and fade away the remainning
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

        //retrieve material to canvas function
        minecraft.useMaterial = function(material, counter, that) {
            if (minecraft.currentTool == material) {
                if (counter > 0 && $(that).hasClass('sky')) {
                    $('#inventory div').css("border-color", "white");
                    var counterID = document.getElementById(material);
                    $(that).removeClass("sky").addClass(`${material}`);
                    counter--;
                    $(counterID).html(counter);
                } else {
                    $(counterID).css("border-color", "red");
                }
            }
        }

        //grab material from canvas function
        minecraft.useTool = function(tool, counter1, counter2, class1, class2, that) {
            if (minecraft.currentTool == tool) {
                if ($(that).hasClass(`${class1}`)) {
                    $(that).removeClass(`${class1}`).addClass("sky");
                    var counterID1 = document.getElementById(class1);
                    counter1++;
                    $(counterID1).html(counter1);
                } else {
                    $(that).css("border-color", "red");
                    $(counterID2).css("border-color", "red");
                }
                if ($(that).hasClass(`${class2}`)) {
                    $(that).removeClass(`${class2}`).addClass("sky");
                    var counterID2 = document.getElementById(class2);
                    counter2++;
                    $(counterID2).html(counter2);
                } else {
                    $(that).css("border-color", "red");
                    $(counterID2).css("border-color", "red");
                }
            }
        }

        minecraft.playOnCanvas = function() {
            minecraft.getInventory();

            var that = this;
            minecraft.useMaterial("clouds", minecraft.counterClouds, that);
            minecraft.useMaterial("earth", minecraft.counterEarth, that);
            minecraft.useMaterial("grass", minecraft.counterGrass, that);
            minecraft.useMaterial("wood", minecraft.counterWood, that);
            minecraft.useMaterial("rock", minecraft.counterRock, that);
            minecraft.useMaterial("brick", minecraft.counterBrick, that);
            minecraft.useMaterial("leaves", minecraft.counterLeaves, that);
            minecraft.useMaterial("tnt", minecraft.counterTnt, that);
            minecraft.useTool("toolAxe", minecraft.counterWood, minecraft.counterLeaves, "wood", "leaves", that);
            minecraft.useTool("toolPick", minecraft.counterBrick, minecraft.counterRock, "brick", "rock", that);
            minecraft.useTool("toolSword", minecraft.counterClouds, minecraft.counterTnt, "clouds", "tnt", that);
            minecraft.useTool("toolShovel", minecraft.counterEarth, minecraft.counterGrass, "earth", "grass", that);
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