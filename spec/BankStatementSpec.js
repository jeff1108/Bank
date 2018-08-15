describe("BankStatement", () => {
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

  describe(".record", () => {
    it("can record to my bank statement when deposit", () => {
      bank.deposit(1000);
      expect(bank._bankstatement._transaction).toEqual([{current_time: "15/8/2018", debt: 1000, credit: 0, balance: 1000}]);
    });

    it("can record to my bank statement when withdrawal", () => {
      bank.deposit(1000);
      bank.withdrawal(500);
      expect(bank._bankstatement._transaction).toEqual([{current_time: "15/8/2018", debt: 1000, credit: 0, balance: 1000}, {current_time: "15/8/2018", debt: 0, credit: 500, balance: 500}]);
    });
  });
});
