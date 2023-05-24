let table = require("table");
let data, config;

class Bank {
  constructor() { 
  this.money = 0;
  this.date = [];
  }


  display() {
    // return [this.date , this.money];

    data = [
      ["date", "credit", "debit", "balance"],
      [this.date, this.date.amount, this.date.amount, this.money]
    ]

    config = {
      border: table.getBorderCharacters("ramac"),
    }

    let x = table.table(data, config);
    console.log(x);
    
  }

  deposit(amount, date) {
    this.money += amount;
    this.date.push(date);
    // doooo testing first numbskull
  }

  withdraw(amount) {
    this.money -= amount;
  }

}


module.exports = Bank;