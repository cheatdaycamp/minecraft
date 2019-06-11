$(document).ready(function() {
        var pokemon = {};

        pokemon.start = function() {
            pokemon.bindMenuActions();
        };

        pokemon.bindMenuActions = function() {


                //button - On welcome screen - Closes welcome screen at the start
                $('#paint').click(pokemon.closeWelcomeScreen);

                //button - On navbar - Closes the game
                $('#exit').click(pokemon.redirecthtml);

                //Button - On navbar - Starts new game
                $('#btnNewGame').click(function() {
                    $('#startModal').modal('show')
                });

                //button - Inside YouWon Modal - Starts new game
                $('#again').click(function() {
                    $('#startModal').modal('show')
                });

                //button - Inside YouWon Modal - Takes you to 'thanks for playing' page.
                $('#notagain').click(pokemon.redirecthtml);

                //level buttons => grab level and start game.
                $('.buttonlevel').click(function() {
                    pokemon.startPlaying.call(this);
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


        pokemon.redirecthtml = function() {
            location.href = "success.html";
        }

        pokemon.closeWelcomeScreen = function() {
            $('#welcomeScreen').css("display", "none");
        }

        pokemon.startPlaying = function(e) {
            $("#mybulb").attr("src", "https://img.icons8.com/office/80/000000/light.png");
            $('.back-face').attr('src', "./img/pokeball.png");
            $('.back-face').css('background', '#ffce54');
            $('.front-face').css('background', '#ffce54');
            $('body').removeClass('bkg-yellow');
            $('body').addClass('bkg-white');
            var wrongs = 0;
            $('#wrongNumber').html(wrongs);
            $('#cardscontainer').html("");
            $('#audio')[0].play();

            var level = this.id; // cards amount according to difficulty
            switch (level) {
                case 'Easy':
                    level = 12;
                    break;
                case 'Intermediate':
                    level = 18;
                    break;
                case 'Hard':
                    level = 24;
                    break;
                default:
                    level = 12;
                    break;
            }

            //creating array of cards with 20 images. Then, deleting the extra randomly.
            var cards = [];
            for (var i = 0; i < 20; i++) {
                cards.push("./img/cards/" + (i + 1) + ".png")
            }

            //removing random cards to have always different images
            var cardsToRemove = 20 - (level / 2);
            for (var j = 0; j < cardsToRemove; j++) {
                var cardsfiltered = cards.indexOf(cards[Math.floor(Math.random() * cards.length)]);
                cards.splice(cardsfiltered, 1);
            }

            //at this point cards holds 9 different cards. Lets duplicate them:
            var deck = [];
            for (var z = 0; z < cards.length; z++) {
                var poop = cards[z];
                deck.push(poop);
                deck.push(poop);
            }
            //The deck has each card twice: but one is after the other. Lets randomize it:
            function randomize(array) {
                var currentIndex = array.length,
                    temporaryValue, randomIndex;
                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            }
            //assigning images to the cards
            var deckRandomized = randomize(deck);
            //creating amount of cards
            for (var i = 0; i < level; i++) {
                $('#cardscontainer').append('<div class="card box-shadow "></div>');
                $('#cardscontainer div:last-child').attr("id", "card-" + (i + 1));
                $('#cardscontainer div:last-child').append('<img class="front-face" src = "' + deckRandomized[i] + '" alt = ""/>' + '<img src = "./img/pokeball.png" class = "back-face" alt = ""/>');
            }
            // assigning function to the cards


            var hasFlippedCard = false;
            var lockBoard = false;
            var firstCard, secondCard;
            $('.card').bind('click', function() {
                if (lockBoard) return;
                if ($(this) === firstCard) return;
                $(this).addClass('flip');

                if (!hasFlippedCard) {
                    hasFlippedCard = true;
                    firstCard = $(this);
                    return;
                }
                secondCard = $(this);
                checkForMatch();
            });


            function checkForMatch() {
                var img1 = firstCard.children(":first").attr('src');
                var img2 = secondCard.children(":first").attr('src');
                if (img1 == img2) {
                    disableCards()
                } else {
                    unflipCards();
                }
                if ($("div.flip").length == level) {
                    setTimeout(() => {
                        $('#mistakes').html(wrongs);
                        $('#endgame').modal('show');
                    }, 2000)
                }
            }


            function disableCards() {
                firstCard.unbind('click');
                secondCard.unbind('click');
                resetBoard();
            }

            function unflipCards() {
                lockBoard = true;

                setTimeout(() => {
                    firstCard.removeClass('flip');
                    secondCard.removeClass('flip');
                    resetBoard();

                    wrongs++;
                    $('#wrongNumber').html(wrongs);
                }, 1000);
            }

            function resetBoard() {
                [hasFlippedCard, lockBoard] = [false, false];
                [firstCard, secondCard] = [null, null];
            }


        }



        pokemon.start();
    }) //document readyx