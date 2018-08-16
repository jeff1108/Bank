var BankStatement = function() {
  this.balance = 0;
  this._transaction = [];
}

BankStatement.prototype.record = function(credit, debit) {
  this.updateBalance(credit, debit)
  transaction = new Transaction(this.time(), credit, debit, this.balance)
  this._transaction.push(transaction);
  return this._transaction;
}

BankStatement.prototype.time = function() {
  time = new Date();
  day = time.getDate();
  month = time.getMonth()+1;
  year = time.getFullYear();
  return current_time = day + "/" + month + "/" + year;
}

BankStatement.prototype.updateBalance = function(credit, debit) {
  this.balance += credit
  this.balance -= debit
  return this.balance
}
