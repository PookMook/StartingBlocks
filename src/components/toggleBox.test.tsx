import "@testing-library/jest-dom"
import { render, fireEvent } from "testing"
import { ToggleBox } from "./toggleBox"

test("you can open the Box", () => {
  const { getByRole, queryByText } = render(<ToggleBox id="7d8f0eeb-4ebe-4d44-a2b9-174d6c79537b" />)

  const button = getByRole("button", { name: /Click Me/i })
  const box = queryByText(/opened/i)
  expect(button).toBeInTheDocument()
  expect(box).toBeNull()

  fireEvent.click(button)
  const box2 = queryByText(/opened/i)
  expect(box2).toBeInTheDocument()

  fireEvent.click(button)
  const box3 = queryByText(/opened/i)
  expect(box3).toBeNull()
})
