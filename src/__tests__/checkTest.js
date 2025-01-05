import checkHealth from '../js/check';

test('check player health -healthy ', () => {
  const player = { name: 'Маг', health: 90 };
  const health = checkHealth(player);
  expect(health).toBe('healthy');
});

test('check player health - wounded', () => {
  const player = { name: 'Маг', health: 15 };
  const health = checkHealth(player);
  expect(health).toBe('wounded');
});

test('check player health - critical', () => {
  const player = { name: 'Маг', health: 10 };
  const health = checkHealth(player);
  expect(health).toBe('critical');
});
