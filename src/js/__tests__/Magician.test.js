import Magician from '../Magician';

test('Создание экземпляра класса Magician', () => {
  const expectedResult = {
    name: 'test',
    type: 'Magician',
    attackRatio: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
    stonedValue: false,
    distanceValue: 1,
    health: 100,
    level: 1,
    attackValue: 10,
    defence: 40,
  };
  const answer = new Magician('test');
  expect(answer).toEqual(expectedResult);
});


test('Повышение уровня персонажа', () => {
  const expectedResult = {
    health: 100,
    level: 2,
    name: 'test',
    type: 'Magician',
    attackValue: 12,
    defence: 48,
    distanceValue: 1,
    attackRatio: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
    stonedValue: false,
  };
  const answer = new Magician('test');
  answer.levelUp();
  expect(answer).toEqual(expectedResult);
});
