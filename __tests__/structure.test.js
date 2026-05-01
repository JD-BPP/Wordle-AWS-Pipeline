const fs = require('fs');

test("index.html exists in repository", () => {
  expect(fs.existsSync('index.html')).toBe(true);
});
