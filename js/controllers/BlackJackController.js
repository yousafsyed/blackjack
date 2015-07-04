define(['./module'], function(app) {
    'use strict';
    app.controller('BlackJackController', function($scope) {
        $scope.BlackJack = {};
        $scope.BlackJack.playerIndex = new Array(),
        $scope.BlackJack.playerHand = new Array(),
        $scope.BlackJack.playerHandSuit = new Array(),
        $scope.BlackJack.dealerHand = new Array(),
        $scope.BlackJack.dealerHandSuit = new Array(),
        $scope.BlackJack.dealerCardNumber = 0;
        $scope.BlackJack.playerHandValueHard = 0,
        $scope.BlackJack.playerHandValueSoft = 0,
        $scope.BlackJack.dealerHandValueHard = 0,
        $scope.BlackJack.dealerHandValueSoft = 0,
        $scope.BlackJack.playerCardNumber = 0;
        $scope.BlackJack.playerNumber = 0;
        $scope.BlackJack.totalPlayers = 1;
        $scope.BlackJack.StillIn = true;
        $scope.message = "";
        $scope.disabled = false;
        $scope.resetGame = function() {
            $scope.BlackJack.playerIndex = new Array(),
            $scope.BlackJack.playerHand = new Array(),
            $scope.BlackJack.playerHandSuit = new Array(),
            $scope.BlackJack.dealerHand = new Array(),
            $scope.BlackJack.dealerHandSuit = new Array(),
            $scope.BlackJack.dealerCardNumber = 0;
            $scope.BlackJack.playerHandValueHard = 0,
            $scope.BlackJack.playerHandValueSoft = 0,
            $scope.BlackJack.dealerHandValueHard = 0,
            $scope.BlackJack.dealerHandValueSoft = 0,
            $scope.BlackJack.playerCardNumber = 0;
            $scope.BlackJack.playerNumber = 0;
            $scope.BlackJack.totalPlayers = 1;
            $scope.BlackJack.StillIn = true;
            $scope.message = "";
            $scope.disabled = false;
        }
        $scope.totalPlayers = function(num) {
            return new Array(num);
        }
        $scope.BlackJack.playeStart = function() {
            $scope.BlackJack.playerHit();
        }
        $scope.BlackJack.dealer = function() {
            $scope.BlackJack.victoryCheck();
            while ($scope.BlackJack.dealerHandValueHard < 21) {
                $scope.BlackJack.dealerHit();
            }
            $scope.BlackJack.victoryCheck();
        }
        $scope.BlackJack.victoryCheck = function() {
            var currentPlayer, dealerWins = true;
            if ($scope.BlackJack.StillIn) {
                dealerWins = false;
            }
            if ($scope.BlackJack.dealerHandValueHard == 21) {
                dealerWins = true;
            }
            if (dealerWins) {
                $scope.message = 'Dealer Wins';
                $scope.disabled = true;
            }
            if ($scope.BlackJack.playerHandValueHard == 21) {
                $scope.message = 'Player Wins';
                $scope.disabled = true;
            }
            if ($scope.BlackJack.playerHandValueHard > 21) {
                $scope.BlackJack.playerHandValueHard = 0;
                $scope.message = 'Player Lost the game';
                $scope.disabled = true;
            }
            if ($scope.BlackJack.dealerHandValueHard > 21) {
                $scope.BlackJack.dealerHandValueHard = 0;
                $scope.message = 'Dealer is Out Everyone Wins';
                $scope.disabled = true;
            }
        }
        $scope.BlackJack.dealerHit = function() {
            var suit = $scope.BlackJack.randSuit(),
                card = $scope.BlackJack.randCard();
            $scope.BlackJack.dealerCardNumber = $scope.BlackJack.dealerCardNumber + 1;
            $scope.BlackJack.dealerHand[$scope.BlackJack.dealerCardNumber] = card[0];
            $scope.BlackJack.dealerHandSuit[$scope.BlackJack.dealerCardNumber] = suit;
            $scope.BlackJack.dealerHandValueHard = $scope.BlackJack.dealerHandValueHard + card[1];
            $scope.BlackJack.dealerHandValueSoft = $scope.BlackJack.dealerHandValueSoft + card[2];
        }
        $scope.BlackJack.playerHit = function() {
            var suit = $scope.BlackJack.randSuit(),
                card = $scope.BlackJack.randCard();
            $scope.BlackJack.playerCardNumber = $scope.BlackJack.playerCardNumber + 1;
            $scope.BlackJack.playerHand[$scope.BlackJack.playerCardNumber] = card[0];
            $scope.BlackJack.playerHandSuit[$scope.BlackJack.playerCardNumber] = suit;
            $scope.BlackJack.playerHandValueHard = $scope.BlackJack.playerHandValueHard + card[1];
            $scope.BlackJack.playerHandValueSoft = $scope.BlackJack.playerHandValueSoft + card[2];
            $scope.BlackJack.StillIn = $scope.BlackJack.BustCheck($scope.BlackJack.playerHandValueHard, 1);
            $scope.BlackJack.victoryCheck();
        }
        $scope.BlackJack.BustCheck = function(x, y) {
            if (x > 21) {
                if (y == 1) {
                    $scope.message = "You are busted";
                    $scope.disabled = true;
                } else {
                    $scope.message = "Dealer bust!! everyone is winner";
                    $scope.disabled = true;
                }
                return false;
            } else {
                return true;
            }
        }
        $scope.BlackJack.randSuit = function() {
            var rand = $scope.BlackJack.random(0, 3),
                suit = "";
            switch (rand) {
                case 0:
                    suit = "Hearts";
                    break;
                case 1:
                    suit = "Spades";
                    break;
                case 2:
                    suit = "Diamonds";
                    break;
                case 3:
                    suit = "Clubs";
                    break;
                default:
                    alert("Unknown error getting suit");
            }
            return suit;
        }
        //card Array card[0] is what shown to player and card[1] is Hardvalue and card[2] is SoftValue;
        $scope.BlackJack.randCard = function() {
            var randCard = $scope.BlackJack.random(1, 13),
                cardArray = new Array();
            switch (randCard) {
                case 1:
                    cardArray[0] = "A";
                    cardArray[1] = 1;
                    cardArray[2] = 11;
                    break;
                case 11:
                    cardArray[0] = "J";
                    cardArray[1] = 10;
                    cardArray[2] = 10;
                    break;
                case 12:
                    cardArray[0] = "Q";
                    cardArray[1] = 10;
                    cardArray[2] = 10;
                    break;
                case 13:
                    cardArray[0] = "K";
                    cardArray[1] = 10;
                    cardArray[2] = 10;
                    break;
                default:
                    cardArray[0] = randCard;
                    cardArray[1] = randCard;
                    cardArray[2] = randCard;
            }
            return cardArray;
        }
        $scope.BlackJack.random = function(x, y) {
            return Math.floor(Math.random() * (y - x + 1)) + x;
        }
    });
});