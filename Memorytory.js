var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	input: {
		gamepad: true
	},
physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },

scene: [Scene1]

};

this.game = new Phaser.Game(config);
