import formatMoney from "../lib/formatMoney";

describe("format money fn", () => {
  it("works with fractional naira", () => {
    expect(formatMoney(1)).toBe("NGN 0.01");
    expect(formatMoney(10)).toBe("NGN 0.10");
    expect(formatMoney(9)).toBe("NGN 0.09");
    expect(formatMoney(40)).toBe("NGN 0.40");
  });
  it("leaves kobo off for whole naira", () => {
    expect(formatMoney(5000)).toBe("NGN N50");
    expect(formatMoney(100)).toBe("NGN 5");
    expect(formatMoney(50000000)).toBe("NGN 500,000");
  });
  it("works with whole and fractional naira", () => {
    expect(formatMoney(5012)).toBe("NGN 50.12");
    expect(formatMoney(101)).toBe("NGN 1.01");
    expect(formatMoney(111)).toBe("NGN 1.11");
  });
});
