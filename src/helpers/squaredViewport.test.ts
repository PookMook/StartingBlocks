import { squaredViewport } from "./squaredViewport"

describe("squareViewport function", () => {
  it("should center valid viewports", () => {
    expect(squaredViewport("0 0 512 512")).toBe("0 0 512 512")
    expect(squaredViewport("0 0 87.36 87.36")).toBe("0 0 87.36 87.36")
    expect(squaredViewport("")).toBe("0 0 512 512")
    expect(squaredViewport()).toBe("0 0 512 512")
    expect(squaredViewport("0 0 100 512")).toBe("-206 0 306 512")
    expect(squaredViewport("-206 0 206 512")).toBe("-256 0 256 512")
    expect(squaredViewport("-10 0 10 50")).toBe("-25 0 25 50")
    expect(squaredViewport("0 0 10 50")).toBe("-20 0 30 50")
  })
})
