import Character from '../Character';

test('Создание экземпляра класса Character', () => {
  const expectedResult = {
    health: 100, level: 1, name: 'test',
  };
  const answer = new Character('test', 'Bowman');
  expect(answer).toEqual(expectedResult);
});

test('Проверка исключения "Допустимая длина имени от 2 до 10"', () => {
  expect(() => new Character('t')).toThrowError();
});

test('Проверка исключения повышения уровня мертвого персонажа', () => {
  expect(() => {
    const answer = new Character('test');
    answer.health = 0;
    answer.levelUp();
  }).toThrowError();
});
