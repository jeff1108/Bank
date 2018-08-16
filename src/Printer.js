var Printer = function() {
}

Printer.prototype.list = function() {
  return "date" + " || " + "credit" + " || " + "debit" + " || " + "balance" + "\n"
}

Printer.prototype.allTransaction = function(transaction) {
  var text = this.list()
  for( var i = 0; i < transaction.length; i++ ) {
    text += transaction[i].date + " || " + transaction[i].credit +
    " || " + transaction[i].debit + " || " + transaction[i].balance + "\n"
  }
  return text
}
