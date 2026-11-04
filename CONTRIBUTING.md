# Contributing guidelines

## Documentation

- Treat `README.md` and other docs as the public contract.
- Code changes that break the contract are either mistakes to be fixed or
  breaking changes that require documentation updates.

## Building and publishing

Run `npm run build` to generate CommonJS and ES module bundles and their
TypeScript declarations in `dist/`. The following [export maps] are available:

- `@sfgov/design-system` exports `react` and `tokens` namespaces
- `@sfgov/design-system/react` exports the React components and helpers,
  including `classed()`
- `@sfgov/design-system/formio` exports the `FormioForm` React component and
other support code.

Run `npm run verify` after building to check the packed package with [publint] and
[Are the Types Wrong]. `npm publish` runs both steps automatically through
`prepublishOnly`, and fails if either the build or package verification fails.

[are the types wrong]: https://www.npmjs.com/package/@arethetypeswrong/cli
[export maps]: https://dev.to/gabrielanhaia/the-packagejson-exports-map-is-the-most-important-file-youre-writing-wrong-5a0o
[publint]: https://publint.dev/docs/
