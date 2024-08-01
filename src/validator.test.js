import Validator from './validator';

test('valid usernames', () => {
  expect(Validator.validateUsername('Valid_Username')).toBe(true);
  expect(Validator.validateUsername('Valid-Username')).toBe(true);
  expect(Validator.validateUsername('Valid123Username')).toBe(true);
});

test('invalid usernames', () => {
  expect(Validator.validateUsername('123Invalid')).toBe(false);
  expect(Validator.validateUsername('-Invalid')).toBe(false);
  expect(Validator.validateUsername('Invalid_')).toBe(false);
  expect(Validator.validateUsername('Invalid-')).toBe(false);
  expect(Validator.validateUsername('InvalidUsername1234')).toBe(false);
  expect(Validator.validateUsername('InvalidUsername_')).toBe(false);
  expect(Validator.validateUsername('Invalid_Username123')).toBe(false);
});
