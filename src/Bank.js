var Bank = function() {
  this._bankstatement = new BankStatement();
}

Bank.prototype.deposit = function(amount) {
  this._bankstatement._balance += amount;
  this._bankstatement._debt = amount;
  this._bankstatement.record();
  return this._bankstatement._balance;
}

Bank.prototype.withdrawal = function(amount) {
  this._bankstatement._balance -= amount;
  this._bankstatement._credit = amount;
  this._bankstatement.record();
  return this._bankstatement._balance;
}
