describe("Bank", () => {
  var bank;
  var mockBankStatement
  var mockPrinter

  beforeEach(function() {
    mockBankStatement = jasmine.createSpyObj("statement", ["record", "balance"])
    mockPrinter = jasmine.createSpyObj("statement", ["allTransaction"])

    bank = new Bank(mockBankStatement, mockPrinter);
  });

  describe(".deposit", () => {
    it("can deposit money", () => {
      bank.deposit(1000);
      expect(mockBankStatement.record).toHaveBeenCalled();
    });
  });

  describe(".withdrawal", () => {
    it("can get the moeny", () => {
      bank.deposit(1000);
      bank.withdrawal(500);
      expect(mockBankStatement.record).toHaveBeenCalled();
    });
  });

  describe(".printOut", () => {
    it("print out bank transaction", () => {
      mockPrinter.allTransaction.and.returnValue("date || credit || debit || balance\n" + "15/8/2018 || 1000 || 0 || 1000\n");
      expect(bank.printOut()).toEqual("date || credit || debit || balance\n" + "15/8/2018 || 1000 || 0 || 1000\n")
    });
  });
});
