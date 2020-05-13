class Scene1 extends Phaser.Scene {
  constructor(){
    super("premiere_scene")
  }


init(data){


}

preload(){
  this.load.image('fond','Asset_Mer.png',{frameWidth: 800, frameHeight: 800});
  this.load.image('carteDefault',"PNG/Cards/cardBack_red1.png");
  this.load.image('carte2',"PNG/Cards/cardClubs2.png");
  this.load.image('carte3',"PNG/Cards/cardDiamonds3.png");
  this.load.image('carte4',"PNG/Cards/cardSpades4.png");
  this.load.image('carte5',"PNG/Cards/cardHearts5.png");
  this.load.image('carte6',"PNG/Cards/cardClubs6.png");
  this.load.image('carte7',"PNG/Cards/cardDiamonds7.png");
}

create(){
  fond = this.add.image(400,300,'fond').setScale(2);

  corneille = new Carte (1, 0, this.physics.add.sprite(150,110,"carteDefault"));
  bernie = new Carte (1, 0, this.physics.add.sprite(310,110,"carteDefault"));
  eric = new Carte (2, 0, this.physics.add.sprite(470,110,"carteDefault"));
  ramzy = new Carte (2, 0, this.physics.add.sprite(630,110,"carteDefault"));
  rick = new Carte (3, 0, this.physics.add.sprite(150,315,"carteDefault"));
  morty = new Carte (3, 0, this.physics.add.sprite(310,315,"carteDefault"));
  bob = new Carte (4, 0, this.physics.add.sprite(470,315,"carteDefault"));
  patrick = new Carte (4, 0, this.physics.add.sprite(630,315,"carteDefault"));
  petain = new Carte (5, 0, this.physics.add.sprite(150,520,"carteDefault"));
  deGaulle = new Carte (5, 0, this.physics.add.sprite(310,520,"carteDefault"));
  robert = new Carte (6, 0, this.physics.add.sprite(470,520,"carteDefault"));
  jack = new Carte (6, 0, this.physics.add.sprite(630,520,"carteDefault"));


  cursors = this.input.keyboard.createCursorKeys();
  space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}

update(){


    if (Phaser.Input.Keyboard.JustDown(space)) {
        if (corneille._return == 0) {
            corneille.retourner();
        }
    }

}

}
