const Bank = require('./bank');

describe ('bank', () => {
  it("return 0", () => {
  const account = new Bank;
  expect(account.display()).toContain(0);
  });

  it("returns 10", () => {
    const account = new Bank;
    account.deposit(10);
    expect(account.display()).toContain(10);
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