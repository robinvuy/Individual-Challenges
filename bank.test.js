// const Bank = require('./bank');

// describe ('bank', () => {
//   it("return empty array", () => {
//   const account = new Bank;
//   expect(account.display()).toEqual([]);
//   });

//   it("returns 10", () => {
//     const account = new Bank;

//     account.deposit(10, "01/01/2023");
//     expect(account.display()).toContain("01/01/2023 || 10");
//   });

//   it("returns 5", () =>{
//     const account = new Bank;
//     account.deposit(10);
//     account.withdraw(5);
//     expect(account.display()).toContain(5);
//   })

//   it("returns 01/01/2023 as date of deposit", () => {
//     const account = new Bank;
//     account.deposit(10, "01/01/2023");
//     expect(account.display()).toContainEqual(["01/01/2023"]);
//   })

//   it("returns default table structure", () => {
//     const account = new Bank;
//     expect(account.display()).toEqual("date || credit || debit || balance");
//   })

  
  
  
  
  
  
// })

// testing failed because I didnt do tdd- 
// remember to always do tdd!!!!

const Bank = require('./Bank');

describe('Bank', () => {
  let account;

  beforeEach(() => {
    account = new Bank();
  });

  it('displays the transaction history in table format', () => {
    // Mock console.log to capture the output
    const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();

    account.deposit(1000, '20-01-2023');
    account.withdraw(500, '21-01-2023');

    account.display();

    // Verify the console.log calls with expected output
    expect(consoleLogMock.mock.calls[0][0]).toBe('date || credit || debit || balance');
    expect(consoleLogMock.mock.calls[1][0]).toBe(' 21-01-2023 || || 500 || 500');
    expect(consoleLogMock.mock.calls[2][0]).toBe(' 20-01-2023 || 1000 || || 1000');

    // Restore console.log
    consoleLogMock.mockRestore();
  });

  it('updates the balance correctly after deposit and withdrawal', () => {
    expect(account.money).toBe(0);

    account.deposit(1000, '20-01-2023');
    expect(account.money).toBe(1000);

    account.withdraw(500, '21-01-2023');
    expect(account.money).toBe(500);
  });

  it('stores the transaction history correctly', () => {
    expect(account.transactions).toEqual([]);

    account.deposit(1000, '20-01-2023');
    expect(account.transactions).toEqual([{ date: '20-01-2023', amount: 1000, type: 'credit' }]);

    account.withdraw(500, '21-01-2023');
    expect(account.transactions).toEqual([
      { date: '20-01-2023', amount: 1000, type: 'credit' },
      { date: '21-01-2023', amount: 500, type: 'debit' },
    ]);
  });
});
