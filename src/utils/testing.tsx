/**
 * @jest-environment jsdom
 */

import React, { FC, ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"

const AllTheProviders: FC = ({ children }) => {
  return <main>{children}</main>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "queries">) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { customRender as render }
