import Daemon from '../Daemon';

test('Создание экземпляра класса Daemon', () => {
  const expectedResult = {
    name: 'test',
    type: 'Daemon',
    attackRatio: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
    stonedValue: false,
    health: 100,
    level: 1,
    distanceValue: 1,
  };
  const answer = new Daemon('test');
  expect(answer).toEqual(expectedResult);
});
