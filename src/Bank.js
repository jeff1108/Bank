var Bank = function() {
  this._balance = 0;
  this._bank_statement = [];

}

Bank.prototype.deposit = function(amount) {
  this._balance += amount;
  this.record(amount);
  return this._balance;
}

Bank.prototype.withdrawal = function(amount) {
  this._balance -= amount;
  this.record(amount)
  return this._balance
}

Bank.prototype.record = function(amount) {
  var current_time = this.time();
  var balance = this._balance;
  this._bank_statement.push({current_time, amount, balance});
}

Bank.prototype.time = function() {
  time = new Date();
  day = time.getDate();
  month = time.getMonth()+1;
  year = time.getFullYear();
  return current_time = day + "/" + month + "/" + year;
}
