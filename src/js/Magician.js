import Mathcharacter from './Mathcharacter';

export default class Magician extends Mathcharacter {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attackValue = 10;
    this.defence = 40;
  }
}
