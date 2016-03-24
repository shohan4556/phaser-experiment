MyGame.playState = function (game) {
    // body...
    this.game = game;
};

MyGame.playState.prototype = {

    create: function () {
        console.log(game.state.getCurrentState());

        this.game.stage.backgroundColor = '#4BDBF3';
        var sprite;
        sprite = this.game.add.image(this.game.world.centerX, this.game.world.centerY - 50, 'bg_Image');
        sprite.anchor.setTo(0.5);

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        // create and add tilemap
        var map = this.game.add.tilemap('TileMap');
        map.addTilesetImage('tileset-1', 'tileset');

        // create layer 
        this.groundLayer = map.createLayer('ground');
        this.backgroundLayer = map.createLayer('background');
        // set collision 
        map.setCollisionBetween(0, 656, true, 'ground'); // view json file
        // resize layer to fit gameWorld
        this.groundLayer.resizeWorld();
        this.backgroundLayer.resizeWorld();

        // player proprety
        this.player = this.game.add.sprite(50, this.game.world.height - 150, 'hero', 0);
        this.player.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this.player);
        this.player.body.setSize(40,45,5,5);
        this.player.body.collideWorldBounds = true;
        this.player.animations.add('right', [6, 7], 12, true);
        //physic property
        //this.player.body.bounce.y = 0.1;
        this.player.body.gravity.y = 400;

        this.cursorKeys = this.game.input.keyboard.createCursorKeys();

    },

    update: function () {
            // collission between player and tilemap layer
            this.game.physics.arcade.collide(this.groundLayer, this.player);
            //input handle
            var stand = this.player.body.touching.down || this.player.body.blocked.down;

            if (this.cursorKeys.left.isDown) {
                this.player.body.velocity.x = -150;
                this.player.animations.play('right');

            } else if (this.cursorKeys.right.isDown) {
                this.player.body.velocity.x = 150;
                this.player.animations.play('right');

            } else if (this.cursorKeys.up.isDown && stand) {
                this.player.body.velocity.y = -200;
                //console.log('jump press');

            } else {
                this.player.frame = 0;
                this.player.body.velocity.x = 0;
            }

        } // end update

}

MyGame.playState.prototype.render = function () {
    this.game.debug.body(this.player);
}
