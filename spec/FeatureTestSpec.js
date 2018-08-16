describe("FeatureTest", () => {
  var bank;

  beforeEach(function() {
    bank = new Bank();
    var baseTime = new Date(2018, 7, 15)
    jasmine.clock().install();
    jasmine.clock().mockDate(baseTime);
    jasmine.clock().tick(50);
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  describe(".deposit", () => {
    it("can show the balance after deposit", () => {
      expect(bank.deposit(1000)).toEqual(1000);
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
