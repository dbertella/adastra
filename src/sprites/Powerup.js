import Entity from './Entity';
import ThreeWay from '../behaviours/fire/ThreeWay';
import Marker from '../behaviours/Marker';

export default class extends Entity {

  constructor(game, owner, target, texture) {
    super(game, owner.x, owner.y, texture);
    game.physics.enable(this);
    this.anchor.setTo(0.5);

    this.fireBehaviour = new ThreeWay(game, target);
    this.addBehaviour(new Marker(game, this, target, 'marker_powerup'));
  }

  getBehaviour() {
    return this.fireBehaviour;
  }
}
