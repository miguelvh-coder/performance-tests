const { performance } = require('perf_hooks');
const { waterTrap } = require('./problem-01.js');
const { longestPalindrome } = require('./problem-02.js');
const { maxArea } = require('./problem-03.js');

describe('problem-01', () => {
  const performanceData = {};

  afterAll(() => {
    console.log(performanceData);
  });

  test('case-01', () => {
    const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    const correctAnswer = 6;

    const startTime = performance.now();
    const answer = waterTrap(input);
    const endTime = performance.now();

    performanceData['case-01'] = `${(endTime - startTime) * 1000} μs`;

    expect(answer).toBe(correctAnswer);
  });

  test('case-02', () => {
    const input = [4, 2, 0, 3, 2, 5];
    const correctAnswer = 9;

    const startTime = performance.now();
    const answer = waterTrap(input);
    const endTime = performance.now();

    performanceData['case-02'] = `${(endTime - startTime) * 1000} μs`;

    expect(answer).toBe(correctAnswer);
  });

  test('case-03', () => {
    const input = [
      67, 45, 89, 23, 56, 78, 92, 34, 76, 11, 53, 87, 39, 64, 81, 29, 72, 98, 50, 16, 83, 42, 70,
      58, 95, 27, 74, 36, 69, 18, 62, 84, 31, 80, 52, 91, 48, 75, 33, 88, 44, 77, 25, 63, 96, 60,
      38, 71, 19, 86, 54, 94, 30, 82, 57, 99, 28, 73, 47, 85, 59, 97, 55, 90, 22, 68, 35, 79, 24,
      41, 61, 37, 93, 26, 43, 65, 32, 66, 49, 100, 20, 21, 15, 14, 17, 13, 12,
    ];
    const correctAnswer = 2962;

    const startTime = performance.now();
    const answer = waterTrap(input);
    const endTime = performance.now();

    performanceData['case-03'] = `${(endTime - startTime) * 1000} μs`;

    expect(answer).toBe(correctAnswer);
  });
});

describe('problem-02', () => {
  const performanceData = {};

  afterAll(() => {
    console.log(performanceData);
  });

  test('case-01', () => {
    const input = 'babad';
    const correctAnswer = 'bab';

    const startTime = performance.now();
    const answer = longestPalindrome(input);
    const endTime = performance.now();

    performanceData['case-01'] = `${(endTime - startTime) * 1000} μs`;

    expect(answer).toBe(correctAnswer);
  });

  test('case-02', () => {
    const input = 'cbbd';
    const correctAnswer = 'bb';

    const startTime = performance.now();
    const answer = longestPalindrome(input);
    const endTime = performance.now();

    performanceData['case-02'] = `${(endTime - startTime) * 1000} μs`;

    expect(answer).toBe(correctAnswer);
  });

  test('case-03', () => {
    const input = 'racecarforgeeksskeegforracecar';
    const correctAnswer = 'geeksskeeg';

    const startTime = performance.now();
    const answer = longestPalindrome(input);
    const endTime = performance.now();

    performanceData['case-03'] = `${(endTime - startTime) * 1000} μs`;

    expect(answer).toBe(correctAnswer);
  });

  test('case-04', () => {
    const input =
      'abacdfgdcabaqwertyuiopasdfghjklzxcvbnmmnbvcxkljhgfdsapoiuytrewqqwertyuiopasdfghjklzxcvbnmmnbvcxkljhgfdsapoiuytrewq';
    const correctAnswer = 'jhgfdsapoiuytrewqqwertyuiopasdfghj';

    const startTime = performance.now();
    const answer = longestPalindrome(input);
    const endTime = performance.now();

    performanceData['case-04'] = `${(endTime - startTime) * 1000} μs`;

    expect(answer).toBe(correctAnswer);
  });
});

describe('problem-03', () => {
  const performanceData = {};

  afterAll(() => {
    console.log(performanceData);
  });

  test('case-01', () => {
    const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const correctAnswer = 49;

    const startTime = performance.now();
    const answer = maxArea(input);
    const endTime = performance.now();

    performanceData['case-01'] = `${(endTime - startTime) * 1000} μs`;

    expect(answer).toBe(correctAnswer);
  });

  test('case-02', () => {
    const input = [1, 1];
    const correctAnswer = 1;

    const startTime = performance.now();
    const answer = maxArea(input);
    const endTime = performance.now();

    performanceData['case-02'] = `${(endTime - startTime) * 1000} μs`;

    expect(answer).toBe(correctAnswer);
  });

  test('case-03', () => {
    const input = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const correctAnswer = 250;

    const startTime = performance.now();
    const answer = maxArea(input);
    const endTime = performance.now();

    performanceData['case-03'] = `${(endTime - startTime) * 1000} μs`;

    expect(answer).toBe(correctAnswer);
  });

  test('case-04', () => {
    const input = [
      87, 24, 36, 51, 65, 29, 44, 92, 78, 56, 33, 69, 80, 47, 55, 72, 63, 38, 85, 97, 41, 21, 60,
      74, 50, 88, 70, 59, 82, 45, 31, 68, 26, 95, 83, 49, 76, 42, 66, 23, 90, 35, 57, 71, 32, 64,
      28, 89, 52, 93, 84, 22, 39, 96, 77, 30, 61, 48, 91, 34, 67, 27, 75, 40, 81, 98, 53, 25, 62,
      86, 37, 94, 58, 73, 99,
    ];
    const correctAnswer = 6438;

    const startTime = performance.now();
    const answer = maxArea(input);
    const endTime = performance.now();

    performanceData['case-04'] = `${(endTime - startTime) * 1000} μs`;

    expect(answer).toBe(correctAnswer);
  });
});
