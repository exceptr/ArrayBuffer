import Mathcharacter from '../Mathcharacter';

test('stoned = false, distande = 2, and attack', () => {
  const answer = new Mathcharacter('Test', 'Daemon');
  answer.attack = 200;
  answer.distance = 2;

  expect(answer.stoned).toEqual(false);
  expect(answer.distance).toEqual(2);
  expect(answer.attack).toEqual(180);
});

test('stoned=true, distance=3 and attack', () => {
  const answer = new Mathcharacter('Test', 'Daemon');
  answer.attack = 200;
  answer.distance = 3;
  answer.stoned = true;

  expect(answer.distance).toEqual(3);
  expect(answer.stoned).toEqual(true);
  expect(answer.attack).toEqual(152);
});

test('distance=9999, stoned=true and attack', () => {
  const answer = new Mathcharacter('Test', 'Daemon');
  answer.attack = 200;
  answer.distance = 9999;
  answer.stoned = true;

  expect(answer.attack).toEqual(0);
});
