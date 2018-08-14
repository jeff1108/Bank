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
});
