const Bank = require('./bank');

describe ('bank', () => {
  it("return 0", () => {
  const account = new Bank;
  expect(account.display()).toBe(0);
  });

  it("returns 10", () => {
    const account = new Bank;
    account.deposit(10);
    expect(account.display()).toBe(10);
  })

  it("returns 5", () =>{
    const account = new Bank;
    account.deposit(10);
    account.withdraw(5);
    expect(account.display()).toBe(5);

  })
})