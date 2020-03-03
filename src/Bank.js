var Bank = function(bankstatement = new BankStatement(), printer = new Printer()) {
  this._bankstatement = bankstatement;
  this.printer = printer;
}

Bank.prototype.deposit = function(amount) {
  this._bankstatement.record(amount, 0)
  return this._bankstatement.balance
}

Bank.prototype.withdrawal = function(amount) {
   if (this._bankstatement.balance < amount) {
     throw new Error("Insufficient deposit")
   } else {
     this._bankstatement.record(0, amount)
   }
   return this._bankstatement.balance
}


Bank.prototype.printOut = function() {
 return this.printer.allTransaction(this._bankstatement._transaction);
}
