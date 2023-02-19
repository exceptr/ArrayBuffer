import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('ArrayBufferConverter должен вернуть строку', () => {
  const expectedResult = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const buffer = new ArrayBufferConverter();
  buffer.load(getBuffer());

  expect(expectedResult).toEqual(buffer.toString());
});
