$(document).ready(function() {
        var minecraft = {};

        minecraft.start = function() {
            minecraft.bindMenuActions();
        };

        minecraft.bindMenuActions = function() {



                //button - On welcome screen - Closes welcome screen at the start
                $('#paint').click(minecraft.closeWelcomeScreen);

                //button - On navbar - Closes the game
                $('#exit').click(minecraft.redirecthtml);

                //Button - On navbar - Starts new game
                $('#btnNewGame').click(function() {
                    $('#startModal').modal('show')
                });

                //button - Inside YouWon Modal - Starts new game
                $('#again').click(function() {
                    $('#startModal').modal('show')
                });

                //button - Inside YouWon Modal - Takes you to 'thanks for playing' page.
                $('#notagain').click(minecraft.redirecthtml);

                //level buttons => grab level and start game.
                $('.buttonlevel').click(function() {
                    minecraft.startPlaying.call(this);
                });

                //button change theme
                $('#mybulb').click(function() {
                    if ($("#mybulb").attr("src") == "https://img.icons8.com/office/80/000000/light.png") {
                        $("#mybulb").attr("src", "https://img.icons8.com/ultraviolet/80/000000/light.png");
                        $('.back-face').attr('src', "./img/ultraball.png");
                        $('.back-face').css('background', 'black');
                        $('.front-face').css('background', 'black');


                    } else {
                        $("#mybulb").attr("src", "https://img.icons8.com/office/80/000000/light.png");
                        $('.back-face').attr('src', "./img/pokeball.png");
                        $('.back-face').css('background', '#ffce54');
                        $('.front-face').css('background', '#ffce54');

                    }
                    $('body').toggleClass('bkg-yellow');
                    $('body').toggleClass('bkg-white');
                });

            } // end bind
        $('#btnStartGame').click(function() {
            $('#welcomeScreen').addClass('opacity-0');
            $('#mainScreen').show()

            setTimeout(() => {
                $('#welcomeScreen').hide()
            }, 100);
        });



    }) //document readyx;