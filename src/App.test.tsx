import { expect, test } from "vitest"

import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import "@testing-library/jest-dom"

import App from "./App"

test("loads and displays greeting", async () => {
  render(<App />)

  const button = screen.getByText("Button")
  await userEvent.click(button)

  const heading = await screen.findByRole("heading")

  expect(heading).toHaveTextContent("hello")
})
