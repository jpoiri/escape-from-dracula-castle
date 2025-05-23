import Phaser from 'phaser';
import { LoaderKey } from '../constants';

export default class LoadingScene extends Phaser.Scene {

    constructor() {
        super('loading');
    }

    preload() {
		this.load.tilemapTiledJSON('room-one', 'assets/json/room-one-map.json');
		this.load.tilemapTiledJSON('room-two', 'assets/json/room-two-map.json');
		this.load.image(LoaderKey.TILESET, 'assets/img/castle-tiles/Tileset.png');
		this.load.image(LoaderKey.FRAME, 'assets/img/frame.png');
		this.load.spritesheet(LoaderKey.ITEMS, 'assets/img/items.png', { frameWidth: 16, frameHeight: 16 });
		this.load.spritesheet(LoaderKey.UI, 'assets/img/ui.png', { frameWidth: 32, frameHeight: 13 });
		this.load.spritesheet(LoaderKey.CHEST, 'assets/img/chest.png', { frameWidth: 32, frameHeight: 32 });
		this.load.spritesheet(LoaderKey.DOOR, 'assets/img/door.png', { frameWidth: 24, frameHeight: 32 });
		this.load.spritesheet(LoaderKey.SAFE, 'assets/img/safe.png', { frameWidth: 32, frameHeight: 40 });
		this.scene.start('menu');
	}
}