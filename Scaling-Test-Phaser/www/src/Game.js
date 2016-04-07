/* globals Phaser:false */
// create BasicGame Class
BasicGame = {

};

// create Game function in BasicGame
BasicGame.Game = function (game) {};

// set Game function prototype
BasicGame.Game.prototype = {

    init: function () {
        // set up input max pointers
        this.input.maxPointers = 1;
        // set up stage disable visibility change
        this.stage.disableVisibilityChange = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.RESIZE;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.forceOrientation(false, true);
        this.scale.setResizeCallback(this.gameResized, this);
        this.scale.updateLayout(true);
        // Re-calculate scale mode and update screen size. This only applies if
        // ScaleMode is not set to RESIZE.
        this.scale.refresh();

    },

    preload: function () {

        // Here we load the assets required for our preloader (in this case a 
        // background and a loading bar)
        this.load.image('logo', 'asset/phaser.png');
        this.load.image('cake', 'asset/cake-color.png');
    },

    create: function () {

        console.log(this.game.state.getCurrentState());

        this.game.stage.backgroundColor = "#ffffff";
        // Add logo to the center of the stage
        this.image1 = this.add.sprite(this.game.world.centerX, this.game.height - 250, 'cake');
        // Set the anchor to the center of the sprite
        this.image1.anchor.setTo(0.5, 0.5);
        // scale game object
        this.image1.scale.setTo(this.game.global.scaleRation);

        //console.log(this.game.global.scaleRation);
    },

    gameResized: function (width, height) {

        //console.log(width);
        //console.log(height);

        this.image1.x = this.game.world.centerX;
        this.image1.y = this.game.height - 250 * this.game.global.scaleRation;
    }

};