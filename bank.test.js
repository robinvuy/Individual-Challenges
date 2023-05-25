const Bank = require('./bank');
const Deposit = require('./deposit');

describe ('bank', () => {
  it("return empty array", () => {
  const account = new Bank;
  expect(account.display()).toEqual([]);
  });

  it("returns 10", () => {
    const account = new Bank;

    account.deposit(10, "01/01/2023");
    expect(account.display()).toContain("01/01/2023 || 10");
  });

  it("returns 5", () =>{
    const account = new Bank;
    account.deposit(10);
    account.withdraw(5);
    expect(account.display()).toContain(5);
  })

  it("returns 01/01/2023 as date of deposit", () => {
    const account = new Bank;
    account.deposit(10, "01/01/2023");
    expect(account.display()).toContainEqual(["01/01/2023"]);
  })

  
  
  
  
  
  
  
  
  // it("returns a tabular display with ", () => {

  // })
})