var Bank = function() {
  this._balance = 0;

}

Bank.prototype.deposit = function(amount) {
  return this._balance += amount
}

Bank.prototype.withdrawal = function(amount) {
  return this._balance -= amount;
}
