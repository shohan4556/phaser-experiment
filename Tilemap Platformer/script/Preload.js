MyGame.loadState = function (game) {
  // body...
  this.game = game;
};

  MyGame.loadState.prototype = {

      preload: function(){
          console.log(game.state.getCurrentState());
          
          // load assets here
          this.game.load.tilemap('TileMap','assets/MyTileMap.json',null,Phaser.Tilemap.TILED_JSON);
          this.game.load.image('tileset','assets/tileset-1.png');
          this.game.load.image('bg_Image','assets/forest-1.png');
          this.game.load.spritesheet('hero','assets/girl-1.png',59,64);
      },

      create: function(){
            // testing
          this.state.start('Menu');
      }

  }
