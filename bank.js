class Bank {
  constructor() { 
  this.money = 0;
  this.transactions = [];
  }

  display() {
  console.log("date || credit || debit || balance"); 
  let balance = this.money;
  const reversedTransactions = this.transactions.slice().reverse();
  for (let i = 0; i < reversedTransactions.length; i++ ) {
    const transaction = reversedTransactions[i];
    if (transaction.type === 'credit') {
      console.log(` ${transaction.date} || ${transaction.amount} || || ${balance} `);
      balance -= transaction.amount;
    } else if (transaction.type === 'debit') {
    console.log(` ${transaction.date} || || ${transaction.amount} || ${balance} `)
    balance += transaction.amount;
    }
  }
  }

  
  deposit(amount, date) {
    this.money += amount;
    const transaction = { date: date, amount: amount, type: 'credit' };
    this.transactions.push(transaction);
  }
    

  withdraw(amount, date) {
    this.money -= amount;
    const transaction = { date: date, amount: amount, type: 'debit' };
    this.transactions.push(transaction);
  }
};


module.exports = Bank; 