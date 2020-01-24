// TEST

const sum = (a, b) => {
  return a + b;
};

describe("тест суммы", () => {
  it("первый тест", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
