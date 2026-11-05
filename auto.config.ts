import type { AutoRc } from 'auto'
import type { INpmConfig } from '@auto-it/npm'
import type { ConventionalCommitsOptions } from '@auto-it/conventional-commits'
import type { IOmitCommitsPluginOptions } from '@auto-it/omit-commits'

export default {
  plugins: [
    [
      'npm',
      {
        forcePublish: false,
        // this is required for trusted publishing (OIDC)
        setRcToken: false
      } satisfies INpmConfig
    ],
    // use commit messages to determine the next version
    [
      'conventional-commits',
      {
        // defaultReleaseType: undefined
      } satisfies ConventionalCommitsOptions
    ],
    [
      'omit-commits',
      {
        // don't include these commit prefixes in the changelog
        subject: ['chore', 'spike']
      } satisfies IOmitCommitsPluginOptions
    ]
  ]
} satisfies AutoRc
