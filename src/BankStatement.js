var BankStatement = function() {
  this._balance = 0;
  this._debt = 0;
  this._credit = 0;
  this._transaction = [];
}

BankStatement.prototype.record = function() {
  var current_time = this.time();
  var balance = this._balance;
  var debt_amount = this._debt;
  var credit_amount = this._credit;
  this._transaction.push({current_time, debt: debt_amount, credit: credit_amount, balance});
  this.cleanRecord();
  return this._transaction;
}

BankStatement.prototype.time = function() {
  time = new Date();
  day = time.getDate();
  month = time.getMonth()+1;
  year = time.getFullYear();
  return current_time = day + "/" + month + "/" + year;
}

BankStatement.prototype.cleanRecord = function() {
  this._debt = 0;
  this._credit = 0;
}
