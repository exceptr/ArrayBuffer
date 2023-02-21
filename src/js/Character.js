export default class Character {
  constructor(name) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Допустимая длина имени от 2 до 10');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Невозможно повысить уровень мёртвого персонажа');
    }
    this.level += 1;
    this.attackValue *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }
}
