(function () {
    /* globals Phaser:false, BasicGame: false */
    //  Create your Phaser game and inject it into the game div.
    //  We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
    //  We're using a game size of 480 x 640 here, but you can use whatever you feel makes sense for your game of course.
    var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, 'game');

    //  Add the States your game has.
    //  You don't have to do this in the html, it could be done in your Game state too, but for simplicity I'll keep it here.
    // I think is the ok
    game.global = {
        scaleRation: 1
    }
    game.global.scaleRation = window.devicePixelRatio / 3 ;
    game.global.scaleRation = game.global.scaleRation.toFixed(2);
    //console.log(window.devicePixelRatio);

    game.state.add('Game', BasicGame.Game);

    //  Now start the Game state.
    game.state.start('Game');

})();