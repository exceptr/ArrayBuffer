import Magician from '../Magician';

test('Создание экземпляра класса Magician', () => {
  const expectedResult = {
    name: 'test',
    type: 'Magician',
    attackRatio: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
    stonedValue: false,
    distanceValue: 1,
  };
  const answer = new Magician('test');
  expect(answer).toEqual(expectedResult);
});
