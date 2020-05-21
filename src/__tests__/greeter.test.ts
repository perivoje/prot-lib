import { Greeter } from '../utilities';

test('My Greeter "Carl"', () => {
    expect(Greeter('Carl')).toBe('Hello Carl');
});

test('My Greeter "John"', () => {
    expect(Greeter('John')).toBe('Hello John');
});