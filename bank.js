class Bank {
  constructor() { 
  this.money = 0;
  }


  display() {
    return this.money;
  }

  deposit(amount) {
    return this.money += amount;
    // doooo testing first numbskull
  }

  withdraw(amount) {
    return this.money -= amount;
  }

}


module.exports = Bank;