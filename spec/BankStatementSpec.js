describe("BankStatement", () => {
  var bankstatement;

  beforeEach(function() {
    bankstatement = new BankStatement;
    var baseTime = new Date(2018, 7, 15)
    jasmine.clock().install();
    jasmine.clock().mockDate(baseTime);
    jasmine.clock().tick(50);
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  describe(".balance", () => {
    it("start at 0 ", () => {
      expect(bankstatement.balance).toEqual(0);
    });
  });

  describe(".record", () => {
    it("can record to my bank statement when deposit", () => {
      bankstatement._credit = 1000
      bankstatement.balance = 1000
      expect(bankstatement.record()).toEqual([{current_time: "15/8/2018", debit: 0, credit: 1000, balance: 1000}]);
    });

    it("can record to my bank statement when withdrawal", () => {
      bankstatement._debit = 500
      bankstatement.balance = -500
      expect(bankstatement.record()).toEqual([{current_time: "15/8/2018", debit: 500, credit: 0, balance: -500}]);
    });
  });

  describe(".allTransaction", () => {
    it("can print out bank statement after deposit", () => {
      bankstatement._credit = 1000
      bankstatement.balance = 1000
      bankstatement.record()
      expect(bankstatement.allTransaction()).toEqual("date || credit || debit || balance\n" + "15/8/2018 || 1000 || 0 || 1000\n");
    });

    it("can print out bank statement after withdrawal", () => {
      bankstatement._debit = 500
      bankstatement.balance = -500
      bankstatement.record()
      expect(bankstatement.allTransaction()).toEqual("date || credit || debit || balance\n" + "15/8/2018 || 0 || 500 || -500\n");
    });
  });
});
