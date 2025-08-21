
import { constructResponse } from "./constructResponse";

describe("constructResponse", () => {
  it("should return a greeting message", () => {
    const result = constructResponse("weavix");
    expect(result).toBe("Hello from weavix");
  });
});