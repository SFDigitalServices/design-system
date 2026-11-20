// Custom matchers registered in jest.setup.ts
declare namespace jest {
  // Type parameters must match @types/jest's declaration to merge
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Matchers<R, T> {
    toHaveSelector(
      selector: string | RegExp,
      expected: Record<string, string>
    ): R
  }
}
