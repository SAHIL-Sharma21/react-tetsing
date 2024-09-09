import { expect, test } from 'vitest';
import sum from '../sum';

test('add two numbers', () => {
    expect(sum(10, 30)).toBe(40);
});

test('add another two numbers', () => {
    const num1 = 100;
    const num2 = 300;
    expect(sum(num1, num2)).toBe(400);
});