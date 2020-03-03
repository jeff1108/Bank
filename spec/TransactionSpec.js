describe("Transaction", () => {
  var transaction;

  beforeEach(function() {
    transaction = new Transaction("15/8/2018", 1000, 500, 500);
  });

  describe(".debit", () => {
    it("can show the debit", () => {
      expect(transaction.credit).toEqual(1000);
    });
  });

  describe(".credit", () => {
    it("can show the credit", () => {
      expect(transaction.debit).toEqual(500);
    });
  });

  describe(".balance", () => {
   it("can show balance", () => {
     expect(transaction.balance).toEqual(500);
   });
  });

  describe(".date", () => {
   it("can show date", () => {
     expect(transaction.date).toEqual("15/8/2018");
   });
  });
});
