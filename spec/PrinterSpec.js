describe("Printer", () => {
  var printer;

  beforeEach(function() {
    printer = new Printer();
  });


  describe(".allTransaction", () => {
    it("can print out bank statement after deposit", () => {
      expect(printer.allTransaction([{date: "15/8/2018", credit: 1000, debit: 0, balance: 1000}])).toEqual("date || credit || debit || balance\n" + "15/8/2018 || 1000 || 0 || 1000\n");
    });

    it("can print out bank statement after withdrawal", () => {
      printer.allTransaction([{date: "15/8/2018", credit: 1000, debit: 0, balance: 1000}])
      expect(printer.allTransaction([{date: "15/8/2018", credit: 1000, debit: 0, balance: 1000}, {date: "15/8/2018", credit: 0, debit: 500, balance: 500}])).toEqual("date || credit || debit || balance\n" + "15/8/2018 || 0 || 500 || 500\n" + "15/8/2018 || 1000 || 0 || 1000\n");
    });
  });
});
