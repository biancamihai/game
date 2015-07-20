// game stuff
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

var PhaserGame = function (game) {
    
    
};


PhaserGame.prototype = {
    // preload the images for the game
    preload : function() {
        // the base url
        this.load.baseURL = 'http://examples.phaser.io/';
        this.load.crossOrigin = 'anonymous';
        // the examplemap, create your own
        this.load.atlasXML('octopus', 'assets/sprites/octopus.png', 'assets/sprites/octopus.xml');
    },
    
    // create the game
    create : function() {
        //  A more suitable underwater background color, blue
        this.stage.backgroundColor = '#1873CE';

        //  Create the octopus
        var octopus = game.add.sprite(300, 200, 'octopus');

        //  Create an animation called 'swim', the fact we don't specify any frames means it will use all frames in the atlas
        octopus.animations.add('swim');

        //  Play the animation at 30fps on a loop
        octopus.animations.play('swim', 30, true);

        //  Bob the octopus up and down with a tween
        this.add.tween(octopus).to({ y: 300 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true); 
    }
};

// add the states to the game
 game.state.add('Game', PhaserGame, true);