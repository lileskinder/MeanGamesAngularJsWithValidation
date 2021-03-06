angular.module("meanGames").controller("GamesController", GamesController);

function GamesController(GamesDataFactory) {
    const vm = this;

    GamesDataFactory.getAll().then(function (response) {
        vm.games = response;
    });

    vm.addGame = function () {
        const postData = {
            title: vm.newGameTitle,
            price: vm.newGamePrice,
            year: vm.newGameYear,
            rate: vm.newGameRate,
            minPlayers: vm.newGameMinPlayes,
            maxPlayers: vm.newGameMaxPlayers,
            minAge: vm.newGameMinAge,
            designers: vm.newGameDesigners,
            publisher: {}

        };

        if(vm.gameForm.$valid) {
            GamesDataFactory.addOne(postData)
            .then(function(response) {
                console.log("Saved", response)
            }).catch(function(error) {
                console.log("Error while saving ", error)
            });
        }
    } 
}