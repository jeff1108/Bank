var BankStatement = function() {
  this.balance = 0;
  this._debit = 0;
  this._credit = 0;
  this._transaction = [];
}

BankStatement.prototype.record = function() {
  var current_time = this.time();
  var balance = this.balance;
  var debit_amount = this._debit;
  var credit_amount = this._credit;
  this._transaction.push({current_time, debit: debit_amount, credit: credit_amount, balance});
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
  this._debit = 0;
  this._credit = 0;
}
