import { isToday } from "./utils";

describe("isToday", () => {
  it("should return true if the given date is today", () => {
    const now = new Date();
    const result = isToday(now.getDate(), now.getMonth(), now.getFullYear());
    expect(result).toBe(true);
  });

  it("should return false for a date that is not today", () => {
    const result = isToday(1, 0, 2000); // A date far in the past
    expect(result).toBe(false);
  });
});
