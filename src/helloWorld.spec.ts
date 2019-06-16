import { hello } from "~/helloWorld";

describe("hello", () => {
  describe("正常系", () => {
    test("期待する文字列が得られる", () => {
      const actual = hello();
      const expected = "Hello, world.";
      expect(actual).toBe(expected);
    });
  });
});
