const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 1500,
  heigth: 1500,
  scale: {
    mode: Phaser.Scale.resize,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: {
    preload,
    create,
    update,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
      debug: true,
    },
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('background', 'assets/images/background.png');
    this.load.image('spike', 'assets/images/spike.png');
     this.load.atlas('player', 'assets/images/kenney_player.png','assets/images/kenney_player_atlas.json');
      this.load.image('tiles', 'assets/tilesets/platformPack_tilesheet.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/mazelevel1.json');

}

function create()
{

const map = this.make.tilemap({ key: 'map' });
const tileset = map.addTilesetImage('kenney_simple_platformer', 'tiles');
const platforms = map.createStaticLayer('Platforms', tileset, 0, 0);
platforms.setCollisionByExclusion(-1, true);
this.player = this.physics.add.sprite(100, 100, 'player');//this says where he will be placed
this.player.setBounce(0.1);
this.player.setCollideWorldBounds(true);
this.physics.add.collider(this.player, platforms);
this.anims.create({
  key: 'walk',
  frames: this.anims.generateFrameNames('player', {
    prefix: 'robo_player_',
    start: 2,
    end: 3,
  }),
  frameRate: 10,
  repeat: -1
});
this.anims.create({
  key: 'idle',
  frames: [{ key: 'player', frame: 'robo_player_0' }],
  frameRate: 10,
});
this.anims.create({
  key: 'jump',
  frames: [{ key: 'player', frame: 'robo_player_1' }],
  frameRate: 10,
});
this.cursors = this.input.keyboard.createCursorKeys();
this.spikes = this.physics.add.group({
  allowGravity: false,
  immovable: true
});

// Let's get the spike objects, these are NOT sprites
const spikeObjects = map.getObjectLayer('Spikes')['objects'];

// Now we create spikes in our sprite group for each object in our map
spikeObjects.forEach(spikeObject => {
  // Add new spikes to our sprite group, change the start y position to meet the platform
  const spike = this.spikes.create(spikeObject.x, spikeObject.y + 200 - spikeObject.height, 'spike').setOrigin(0, 0);
});
this.spikes = this.physics.add.group({
  allowGravity: false,
  immovable: true
});

// Let's get the spike objects, these are NOT sprites
spikeObjects.forEach(spikeObject => {
  const spike = this.spikes.create(spikeObject.x, spikeObject.y + 200 - spikeObject.height, 'spike').setOrigin(0, 0);
  spike.body.setSize(spike.width, spike.height - 20).setOffset(0, 20);
});
this.physics.add.collider(this.player, this.spikes, playerHit, null, this);
}


// Player can jump while walking any direction by pressing the space bar
// or the 'UP' arrow

function playerHit(player, spike) {
  player.setVelocity(0, 0);
  player.setX(100);
  player.setY(100);
  player.play('idle', true);
  player.setAlpha(0);
  let tw = this.tweens.add({
    targets: player,
    alpha: 1,
    duration: 100,
    ease: 'Linear',
    repeat: 5,
  });
}
function update() {
  if (this.cursors.left.isDown) {
    this.player.setVelocityX(-200);
    if (this.player.body.onFloor()) {
      this.player.play('walk', true);
    }
  } else if (this.cursors.right.isDown) {
    this.player.setVelocityX(200);
    if (this.player.body.onFloor()) {
      this.player.play('walk', true);
    }
  } else {
    // If no keys are pressed, the player keeps still
    this.player.setVelocityX(0);
    // Only show the idle animation if the player is footed
    // If this is not included, the player would look idle while jumping
    if (this.player.body.onFloor()) {
      this.player.play('idle', true);
    }
  }

  // Player can jump while walking any direction by pressing the space bar
  // or the 'UP' arrow
  if ((this.cursors.space.isDown || this.cursors.up.isDown) && this.player.body.onFloor()) {
    this.player.setVelocityY(-350);
    this.player.play('jump', true);
  }}
