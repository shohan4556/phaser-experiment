MyGame.menuState = function(game){
  this.game = game;
};

    MyGame.menuState.prototype = {

        create: function(){
            console.log(game.state.getCurrentState());

            this.state.start('Play');
        }

    }
