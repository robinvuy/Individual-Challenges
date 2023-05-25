let table = require("table");
let data, config;
const Deposit = require('./deposit');

class Bank {
  constructor() { 
  this.money = 0;
  this.date = [];
  this.transactions = [];
  }

  display() {
    // let history = []
    
  console.log("date || credit || debit || balance"); 
  let balance = 0; 
  this.transactions.slice().reverse().forEach(data => {
    if (data.type === 'credit') {
      
      console.log(` ${data.date} || ${data.amount} || || ${this.money} `);
      balance += data.amount;
    } else if (data.type === 'debit') {
      balance -= data.amount;
      console.log(` ${data.date} || || ${data.amount} || ${balance} `)
      

    } else {
      console.log(` ${data.date} || || || ${balance} `)

    }
  });

    // history.push(`${data.date} || ${data.amount}`);
  

  
  // history.forEach(transaction => {
  //   console.log(` ${transaction.date} || ${transaction.amount} || 0 || ${this.money} `);

  // })
  // return history.join('');


// return [this.date , this.money];
    // return [this.date , this.money];
    

    // data = [
    //   ["date", "credit", "debit", "balance"],
      
      

    //   [this.date, deposit.amount, withdraw.amount, this.money]
    // ]

    // config = {
    //   border: table.getBorderCharacters("ramac"),
    // }

    // let x = table.table(data, config);
    // console.log(x);
    
  }
  
  deposit(amount, date) {
    this.money += amount;
    this.date.push(date);
    const transaction = { date: date, amount: amount, type: 'credit' };
    this.transactions.push(transaction);
    
    
    // const deposit = new Deposit(amount,date);
    // credit = deposit.amount += this.money;
    // date.push(credit);

  }
  // deposit(amount, date) {
  //   this.money += amount;
  //   this.date.push(date);
  //   // doooo testing first numbskull
  // }

  withdraw(amount, date) {
    this.money -= amount;
    this.date.push(date);
    const transaction = { date: date, amount: amount, type: 'debit' };
    this.transactions.push(transaction);

  }

}


module.exports = Bank;