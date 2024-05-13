const {
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
} = require("./app.js");

describe("Conversion from Euro to Dollars", () => {
  test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    expect(dollars).toBe(expected);
  });

  test("Conversion que utiliza valores numericos", () => {
    const dollar = fromEuroToDollar(3.5);

    expect(typeof dollar).toBe("number");
  });

  test("Funcion que utiliza caracteres de texto", () => {
    const eurosToDollars = fromEuroToDollar("3.5");

    expect(eurosToDollars).not.toBeNaN();
  });
});

describe("Conversion from Dollar to Yens", () => {
  test("One dollar should be 163.5514 yen", () => {
    const yen = fromDollarToYen(3.5);
    const expected = 3.5 * (1 / 1.07) * 156.5;

    expect(yen).toBeCloseTo(expected);
  });

  test("Conversion que utiliza valores numericos", () => {
    const yen = fromDollarToYen(3.5);

    expect(typeof yen).toBe("number");
  });

  test("Funcion que utiliza caracteres de texto", () => {
    const dollarsToYen = fromDollarToYen("10");

    expect(dollarsToYen).not.toBeNaN();
  });
});

describe("Conversion from Yen to Pounds", () => {
  test("One yen should be 0.005557702194357366 pounds", () => {
    const pound = fromYenToPound(3.5);
    const expected = 3.5 * (1 / 156.5) * 0.87;

    expect(pound).toBe(expected);
  });

  test("Conversion que utiliza valores numericos", () => {
    const pound = fromYenToPound(3.5);

    expect(typeof pound).toBe("number");
  });
  test("Funcion que utiliza caracteres de texto", () => {
    const yenToPound = fromYenToPound("500");
    expect(yenToPound).not.toBeNaN();
  });
});
g;
