import Character from './Character';

export default class Mathcharacter extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
    this.attackRatio = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
    this.stonedValue = false;
    this.distanceValue = 1;
  }

  set attack(value) {
    this.attackValue = value;
  }

  get attack() {
    const ratio = this.distance <= 10 ? this.distance - 1 : 9;
    const attackDamage = this.attackValue * this.attackRatio[ratio];

    if (!this.stoned) {
      return attackDamage;
    }
    const attackDamageStoned = Math.round(attackDamage - Math.log2(this.distance) * 5);
    return attackDamageStoned > 0 ? attackDamageStoned : 0;
  }

  set stoned(value) {
    this.stonedValue = value;
  }

  get stoned() {
    return this.stonedValue;
  }

  set distance(value) {
    this.distanceValue = value;
  }

  get distance() {
    return this.distanceValue;
  }
}
