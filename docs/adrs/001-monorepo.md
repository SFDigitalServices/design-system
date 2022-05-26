---
# These are optional elements. Feel free to remove any of them.
status: proposed
date: 2022-05-25
deciders:
  - @sfdigitalservices/design-system
---

# Use a monorepo

## Context and problem statement

As the design system grows, so will the number and complexity of implementations. We need to decide how we will organize these implementations so that they're easy to find, install, and use.

Modern published code takes the shape of versioned **packages**, specifically on a platform called [npm][] (the de facto **N**ode.js **p**ackage **m**anager). At this time, we have one package to which we publish all of our CSS, JavaScript, and SVG icon assets: [sfgov-design-system]. As the system grows, implementations of the system for different technologies (React is first on our list, but we might also support other popular frameworks like [Vue] in the future) will need their own "places" to be published. We have three different options for organizing them, [described below](#considered-options).

### Requirements

For the purposes of this ADR, we'll consider the following needs:

- We will continue to maintain and publish the `sfgov-design-system` package for SF.gov
- A new docs setup (running Docusaurus) will consume a shared Tailwind preset/config
- In the near future, we will separate out design tokens into a new package shared among diverging implementations (CSS, React, etc.)
- For DX consistency, our packages will need to share tools, such as linting presets and custom rules

## Considered options

* [One repo per package](#one-repo-per-package)
* [Monorepo](#monorepo)
* [Single package](#single-package)

## Decision outcome

TBD

### Positive consequences

* …

### Negative consequences

* …

## Pros and cons of the options

### One repo per package

This is the tried-and-true method of organizing packages. Each package gets its own GitHub repo, and interdependency versions are managed individually. In this model, each package has all of its own tools, including development dependencies (for testing and building assets) and CI/CD workflows.

* Good, because each package just works on its own, and can be developed and debugged in isolation
* Good, because packages don't _have_ to depend on the latest version of another design system package
<!-- use "neutral" if the given argument weights neither for good nor bad -->
* Bad, because it can be tedious testing changes to a widely (or "deeply") shared package, such as an [eslint preset]
* Bad, because shared package versions can quickly fall out of date and lead to inconsistencies

### Monorepo

Monorepos organize multiple packages into a single GitHub repo and link them together with either built-in package manager features ([npm] or [yarn] workspaces) or tools that sit on top of the package managers (e.g. [Lerna] and [nx]).

* Good, because it's easier to test changes to shared packages
* Good, because there's only on GitHub repo to manage
<!-- * Neutral, because {argument c} -->
* Bad, because monorepos can be a pain to run/develop/maintain

### Single package

In this setup there's only one published package (i.e. `sfgov-design-system`), and subdirectories of the package house different implementations. For instance:

- `sfgov-design-system/css` would contain static CSS
- `sfgov-design-system/react` would contain React components
- `sfgov-design-system/tailwind` would contain Tailwind configs/presets/etc.
- `sfgov-design-system/tokens` would contain design tokens

* Good, because it's easier to run and maintain
* Bad, because it can be tricky to manage an ever-growing list of production and development dependencies (think: `npm audit`, peer dependency versions, and other conflicts)
* Bad, because it requires package consumers to download the production dependencies of _every implementation_. In this setup, you would download both the CSS and React (and Vue, etc.) implementations whether you needed them or not.
