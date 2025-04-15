import { expect, test } from "vitest";
import { suma } from "./suma.js";

test("Suma de 2 + 2 es 4", () => {
  expect(suma(2, 2)).toBe(5);
});
