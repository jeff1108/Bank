describe("Bank", () => {
  var bank;

  beforeEach(function() {
    bank = new Bank();
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
  });

  describe(".withdrawal", () => {
    it("can get the moeny", () => {
      bank.deposit(1000)
      expect(bank.withdrawal(500)).toEqual(500);
    });
  });
});
