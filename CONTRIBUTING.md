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
TypeScript declarations in `dist/`. The export map entrypoints are documented in
the [README](./README.md#entrypoints); keep them in sync with `package.json` and
`tsup.config.ts`.

Run `npm run verify` after building to check the packed package with [publint] and
[Are the Types Wrong]. `npm publish` runs both steps automatically through
`prepublishOnly`, and fails if either the build or package verification fails.

### Continuous releases

This repo uses [auto] to version and publish releases to both npm and GitHub
with automatically generated release notes.

Every push to a pull request will publish a new [canary] release and update the
PR description with installation instructions for the latest version.

Merges to `main` will determine what version to publish from either
[conventional commits] or [release labels]. For example:

- Prefix the PR title with `fix:` to release a patch version, e.g. from `2.0.1`
  to `2.0.2`.
- Prefix it with `feat:` or add the <kbd>minor</kbd> label to release a minor
  version, e.g. from `1.2.3` to `1.3.0`.
- Prefix it with `BREAKING:` or add the <kbd>major</kbd> label to release a
  major version, e.g. from `1.5.3` to `2.0.0`.

`chore:` and `spike:` commits are explicitly omitted from release notes in the
[auto config](./auto.config.ts). You can use the <kbd>skip-release</kbd> label
or include `skip ci` (or `ci skip`) in the commit message to skip a release (or
a canary) entirely, e.g. for documentation updates that aren't published to npm.

The GitHub Actions [release workflow] always runs in the `release` environment,
which does not require human review. The `@sfgov/design-system` npm package is
configured to allow [trusted publishing] from this repo, and only from a
workflow named `release.yml`, so renaming it or changing `environment:` will
likely break automatic publishing.

[are the types wrong]: https://www.npmjs.com/package/@arethetypeswrong/cli
[auto]: https://intuit.github.io/auto/
[canary]: https://intuit.github.io/auto/docs/generated/canary
[conventional commits]: https://intuit.github.io/auto/docs/generated/conventional-commits
[publint]: https://publint.dev/docs/
[release labels]: https://intuit.github.io/auto/blog/using-shipit#release-labels
[release workflow]: ./.github/workflows/release.yml
[trusted publishing]: https://docs.npmjs.com/trusted-publishers
