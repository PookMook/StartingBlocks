export interface Context {
  test: string
}

export function createContext(): Context {
  return {
    test: "hello",
  }
}
