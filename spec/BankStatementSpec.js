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
      bankstatement.record(1000, 0)
      expect(bankstatement.balance).toEqual(1000);
    });
    it("can record to my bank statement when withdrawal", () => {
      bankstatement.record(1000, 0)
      bankstatement.record(0, 500)
      expect(bankstatement.balance).toEqual(500);
    });
  });
});
