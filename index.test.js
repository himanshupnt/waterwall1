const { getMaxWater } = require("./index");

describe("get max water", () => {
  const sample1 = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
  const sample2 = [7, 3, 7, 2, 6, 4, 5, 9, 1, 2];
  const sample3 = [9, 3, 7, 2, 6, 4, 5, 9, 1, 2];
  const sample4 = [5, 3, 4, 2, 6, 4, 5, 9, 1, 10];
  const sample5 = [4, 4, 4, 4];

  const maxWater1 = getMaxWater(sample1);
  const maxWater2 = getMaxWater(sample2);
  const maxWater3 = getMaxWater(sample3);
  const maxWater4 = getMaxWater(sample4);
  const maxWater5 = getMaxWater(sample5);

  it("should have correct max water trapped and wall positions", () => {
    expect(maxWater1).toEqual([3, 8, 11]);
    expect(maxWater2).toEqual([3, 8, 11]);
    expect(maxWater3).toEqual([1, 8, 27]);
    expect(maxWater4).toEqual([8, 10, 8]);
    expect(maxWater5).toEqual([1, 1, 0]);
  });
});
