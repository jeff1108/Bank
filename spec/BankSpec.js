describe("Bank", () => {
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

  describe(".balance", () => {
    it("start at 0 ", () => {
      expect(bank._balance).toEqual(0);
    });
  });

  describe(".deposit", () => {
    it("can save the money", () => {
      expect(bank.deposit(1000)).toEqual(1000);
    });

    it("can record to my bank statement when deposit", () => {
      bank.deposit(1000);
      expect(bank._bank_statement).toEqual([{current_time: "15/8/2018", amount: 1000, balance: 1000}]);
    });
  });

  describe(".withdrawal", () => {
    it("can get the moeny", () => {
      bank.deposit(1000);
      expect(bank.withdrawal(500)).toEqual(500);
    });
    
    it("can record to my bank statement when withdrawal", () => {
      bank.deposit(1000);
      bank.withdrawal(500);
      expect(bank._bank_statement).toEqual([{current_time: "15/8/2018", amount: 1000, balance: 1000}, {current_time: "15/8/2018", amount: 500, balance: 500}]);
    });
  });
});
