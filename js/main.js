$(document).ready(function() {

        //object that holds the whole functions:
        var minecraft = {};

        //launching the bind
        minecraft.start = function() {
            minecraft.bindMenuActions();
        };

        minecraft.bindMenuActions = function() {
                minecraft.currentTool = "";

                //Buttons - StartGame: on welcome screen, on instructions, and reset.
                $('#btnStartGame').click(minecraft.startGame);
                $('#btnStartPlay').click(minecraft.startGame);
                $('#btnReset').click(minecraft.startGame);

                //User chooses a tool 
                $(".squares").on("click", minecraft.selectTool);

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
                //generating the board
            minecraft.generateSquares();
            minecraft.generateBoard();
            minecraft.resetMaterials();
            $('#canvas div').click(minecraft.playOnCanvas);
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
            $('.square.materialsIcons').each(function() {
                $(this).html(Math.floor((Math.random() * 8) + 1))
            })
        }

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

        //paint to canvas 
        minecraft.useMaterial = function(material, counter, that) {
            if (minecraft.currentTool == material) {
                if (counter > 0 && $(that).hasClass('sky')) {
                    var counterID = document.getElementById(material);
                    $(this).fadeIn("slow", function() {
                        $(that).addClass(`${material}`);
                    });
                    $(that).removeClass("sky");
                    counter--;
                    $(counterID).html(counter);
                    $(`#${material}`).addClass('greenBorderEffect');
                    setTimeout(function() {
                        $(`#${material}`).removeClass('greenBorderEffect');
                    }, 300);
                } else {
                    $(`#${minecraft.currentTool}`).addClass('redBorderEffect');
                    setTimeout(function() {
                        $(`#${minecraft.currentTool}`).removeClass('redBorderEffect');
                    }, 300);;
                }
            }
        }

        //grab from canvas 
        minecraft.useTool = function(tool, counter1, counter2, class1, class2, that) {
            if (minecraft.currentTool == tool) {
                if ($(that).hasClass(`${class1}`)) {
                    $(that).removeClass(`${class1}`).addClass("sky");
                    var counterID1 = document.getElementById(class1);
                    counter1++;
                    $(counterID1).html(counter1);
                    $(`#${class1}`).addClass('greenBorderEffect');
                    $(`#${class1}`).fadeTo('fast', '1');
                    setTimeout(function() {
                        $(`#${class1}`).fadeTo('fast', '.5');
                        $(`#${class1}`).removeClass('greenBorderEffect');
                    }, 300);

                } else if ($(that).hasClass(`${class2}`)) {
                    $(that).removeClass(`${class2}`).addClass("sky");
                    var counterID2 = document.getElementById(class2);
                    counter2++;
                    $(counterID2).html(counter2);
                    $(`#${class2}`).addClass('greenBorderEffect');
                    $(`#${class2}`).fadeTo('fast', '1');
                    setTimeout(function() {
                        $(`#${class2}`).fadeTo('fast', '.5');
                        $(`#${class2}`).removeClass('greenBorderEffect');
                    }, 300);

                } else {
                    $(`#${minecraft.currentTool}`).addClass('redBorderEffect');
                    setTimeout(function() {
                        $(`#${minecraft.currentTool}`).removeClass('redBorderEffect');
                    }, 300);;
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
            $('#canvas').empty();
            var unitSize = "40px";
            minecraft.bricksOnWidth = 800 / parseInt(unitSize)
            minecraft.bricksOnHeight = 640 / parseInt(unitSize);
            canvasArea = minecraft.bricksOnWidth * minecraft.bricksOnHeight;
            for (var i = 0; i < minecraft.bricksOnHeight; i++) {
                for (var j = 0; j < minecraft.bricksOnWidth; j++) {
                    var id = `R_${(parseInt([i]) + 1)} C_${(parseInt([j]) + 1)}`;
                    $("#canvas").append($(`<div class="${id} tile materialsIcons sky"></div>`))
                }

            }
        }

        minecraft.generateBoard = function() {
            // generating grass line
            $('.R_12').removeClass("sky").addClass("grass");
            var height = minecraft.bricksOnHeight;
            // generating earth
            for (var i = height; i > 12; i--) {
                $(`.R_${[i]}`).removeClass("sky").addClass("earth");
            }
            // generating random amount of rocks between 10-2
            var randomRocks = Math.floor(Math.random() * (10 - 2 + 1)) + 2; // for the quantity

            // for setting the Y maximum height 
            var max = minecraft.bricksOnHeight,
                min = minecraft.bricksOnHeight - 4;
            //randomizing the locations
            for (var i = 0; i < randomRocks; i++) {
                var randomX = (Math.floor((Math.random() * minecraft.bricksOnWidth) + 1));
                var randomY = Math.floor(Math.random() * (max - min + 1)) + min;
                ($(`.R_${[randomY]}.C_${[randomX]}`)).removeClass("rock");
                ($(`.R_${[randomY]}.C_${[randomX]}`)).removeClass("grass");
                ($(`.R_${[randomY]}.C_${[randomX]}`)).removeClass("earth").addClass("rock");
            }
            // 2 random clouds
            minecraft.randomCloud(20, 15);
            minecraft.randomCloud(10, 5);

            //randomTrees between 1-4
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
                    minecraft.randomTree(14, 11);
                    minecraft.randomTree(20, 18);
                    break;
                case 4:
                    minecraft.randomTree(5, 3);
                    minecraft.randomTree(10, 8);
                    minecraft.randomTree(15, 13);
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