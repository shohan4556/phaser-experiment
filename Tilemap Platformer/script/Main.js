    game = new Phaser.Game(800,400,Phaser.CANVAS,'gameContainer');

	//Add all states
    game.state.add("Boot", MyGame.bootState);
    game.state.add("Preload", MyGame.loadState);
    game.state.add("Menu", MyGame.menuState);
    game.state.add("Help", MyGame.helpState);
    game.state.add("Credit", MyGame.creditState);
    game.state.add("Play", MyGame.playState);

    //define global var
    game.global = {
        score: 0,
        sound: null
    }



        //Start the first state
    game.state.start("Boot",true,false);
