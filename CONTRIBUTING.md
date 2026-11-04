# Contributing guidelines

## Documentation

- Treat `README.md` and other docs as the public contract.
- Code changes that break the contract are either mistakes to be fixed or
  breaking changes that require documentation updates.

## Linting and type checking

Run `npm run lint` for ESLint's recommended JavaScript and TypeScript rules,
React and Testing Library checks, and unresolved import checks. Run
`npm run lint:fix` to apply automatic fixes. Formatting is handled by Prettier.

The flat configuration in [eslint.config.mjs](./eslint.config.mjs) explicitly
includes TypeScript and TSX files. Generated output and the archived stories
are ignored. VS Code uses the same configuration for editor diagnostics.

Run `npm run typecheck` to check types and invalid named imports. ESLint does
not replace the TypeScript compiler; the TypeScript recommended import preset
intentionally leaves named-export validation to TypeScript.

> [!NOTE]
> The `src/formio/` directory is excluded from type checking because it's
> scheduled for deletion.

## Building and publishing

Run `npm run build` to generate CommonJS and ES module bundles and their
TypeScript declarations in `dist/`. The following [export maps] are available:

- `@sfgov/design-system` exports `react` and `tokens` namespaces
- `@sfgov/design-system/react` exports the React components and helpers,
  including `classed()`
- `@sfgov/design-system/formio` exports the `FormioForm` React component and
  other support code.
- `@sfgov/design-system/formio/factories` exports form.io-specific test
  factories like `FormFactory` that are used by sf.gov's `FormPage` tests.

Run `npm run verify` after building to check the packed package with [publint] and
[Are the Types Wrong]. `npm publish` runs both steps automatically through
`prepublishOnly`, and fails if either the build or package verification fails.

[are the types wrong]: https://www.npmjs.com/package/@arethetypeswrong/cli
[export maps]: https://dev.to/gabrielanhaia/the-packagejson-exports-map-is-the-most-important-file-youre-writing-wrong-5a0o
[publint]: https://publint.dev/docs/
