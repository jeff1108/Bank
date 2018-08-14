var Bank = function() {
  this._balance = 0;
  this._debt = 0;
  this._credit = 0;
  this._bank_statement = [];

}

Bank.prototype.deposit = function(amount) {
  this._balance += amount
  this._debt = amount
  this.record()
  return this._balance;
}

Bank.prototype.withdrawal = function(amount) {
  this._balance -= amount;
  this._credit = amount
  this.record(amount)
  return this._balance;
}

Bank.prototype.record = function() {
  var current_time = this.time()
  var balance = this._balance
  var debt_amount = this._debt
  var credit_amount = this._credit
  this._bank_statement.push({current_time, debt: debt_amount, credit: credit_amount, balance});
  this.cleanRecord();
}

Bank.prototype.time = function() {
  time = new Date();
  day = time.getDate()
  month = time.getMonth()+1
  year = time.getFullYear()
  return current_time = day + "/" + month + "/" + year
}

Bank.prototype.cleanRecord = function() {
  this._debt = 0
  this._credit = 0
}
