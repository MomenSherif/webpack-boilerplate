export function getRandomNumbers(length) {
  if (typeof length != 'number') return;
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * 10 + 1));
  }
  return result;
}
