const fs = require('fs');

test("secretWord is defined in uppercase only", () => {
  const content = fs.readFileSync('index.html', 'utf8');

  const match = content.match(/const secretWord = "([A-Z]+)"/);

  expect(match).not.toBeNull();
});
