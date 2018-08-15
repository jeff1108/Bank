describe("Bank", () => {
  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  describe(".deposit", () => {
    it("can show the balance after deposit", () => {
      bank.deposit(1000)
      expect(bank.deposit(1000)).toEqual(2000);
    });
  });

  describe(".withdrawal", () => {
    it("can show the balance after withdrawal", () => {
      bank.deposit(1000);
      bank.withdrawal(200)
      expect(bank.withdrawal(500)).toEqual(300);
    });
  });

  describe(".printOut", () => {
    it("print out bank transaction after deposit", () => {
      bank.deposit(1000);
      expect(bank.printOut()).toEqual("date || credit || debit || balance\n" + "15/8/2018 || 1000 || 0 || 1000\n")
    });

    it("print out bank transaction after deposit and withdrawal", () => {
      bank.deposit(1000);
      bank.withdrawal(500)
      expect(bank.printOut()).toEqual("date || credit || debit || balance\n" + "15/8/2018 || 1000 || 0 || 1000\n" + "15/8/2018 || 0 || 500 || 500\n")
    });
  });
});
