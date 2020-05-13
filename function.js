function Carte(numero, retournade, sprite) {
  this._number = numero;
  this._return = retournade;
  this._sprite = sprite;
  this._sprite.setInteractive();
    this._sprite.on('pointerdown', ()=>{
        this.retourner();
    });

    this._sprite.on('pointerover', function(){
        this.setAlpha(1);
    });
}

Carte.prototype = Object.create(Phaser.GameObjects.Sprite.prototype);
Carte.prototype.constructor = Carte;

Carte.prototype.retourner = function() {
    this._return = 1;
      if (this._number == 1) {
          this._sprite.setTexture('carte2');
      } else if (this._number == 2) {
          this._sprite.setTexture('carte3');
      } else if (this._number == 3) {
          this._sprite.setTexture('carte4');
      } else if (this._number == 4) {
          this._sprite.setTexture('carte5');
      } else if (this._number == 5) {
          this._sprite.setTexture('carte6');
      } else if (this._number == 6) {
          this._sprite.setTexture('carte7');
      }
}

Carte.prototype.getSprite = function() {
  return this._sprite;
}
