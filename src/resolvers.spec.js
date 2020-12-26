import { resolvers } from "./resolvers";

describe("Query", () => {
  it("should return \"Hello, World!\"", () => {
    expect(resolvers.Query.hello()).toBe("Hello, World!");
  });
})