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
      expect(bankstatement._balance).toEqual(0);
    });
  });

  describe(".record", () => {
    it("can record to my bank statement when deposit", () => {
      bankstatement._credit = 1000
      bankstatement._balance = 1000
      expect(bankstatement.record()).toEqual([{current_time: "15/8/2018", debt: 0, credit: 1000, balance: 1000}]);
    });

    it("can record to my bank statement when withdrawal", () => {
      bankstatement._credit = 1000
      bankstatement._debt = 500
      bankstatement._balance = 500
      expect(bankstatement.record()).toEqual([{current_time: "15/8/2018", debt: 500, credit: 1000, balance: 500}]);
    });
  });
});
