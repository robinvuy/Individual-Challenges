const Bank = require('./bank');

describe ('bank', () => {
  it("return 0", () => {
  const account = new Bank;
  expect(account.display()).toBe(0);
  });
})