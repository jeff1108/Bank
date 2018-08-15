var Bank = function(bankstatement = new BankStatement()) {
  this._bankstatement = bankstatement;
}

Bank.prototype.deposit = function(amount) {
  this._bankstatement.balance += amount;
  this._bankstatement._credit = amount;
  this._bankstatement.record();
  return this._bankstatement.balance;
}

Bank.prototype.withdrawal = function(amount) {
  this._bankstatement.balance -= amount;
  this._bankstatement._debit = amount;
  this._bankstatement.record();
  return this._bankstatement.balance;
}

Bank.prototype.printOut = function() {
 return this._bankstatement.allTransaction();
}
