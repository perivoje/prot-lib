import { Utilities } from '../utilities';

const utilities = new Utilities();

test('My Greeter "Carl"', () => {
    expect(utilities.greeter('Carl')).toBe('Hello Carl!!!');
});

test('My Greeter "John"', () => {
    expect(utilities.greeter('John')).toBe('Hello John!!!');
});