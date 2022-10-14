import React from 'react'
import { addons, types } from '@storybook/addons'
import { AddonPanel, Code } from '@storybook/components'
import { components as allComponents } from '../../../../website/components'
import { getDocsBaseUrl } from '../../utils'
import minimatch from 'minimatch'

/**
 * @typedef {{
 *  id?: string,
 *  name: string,
 *  href: string,
 *  story: {
 *    id?: string,
 *    name?: string,
 *    path?: string
 *  }
 * }} ComponentMeta
 * @typedef {
 *  import('@storybook/api').Story | 
 *  import('@storybook/api').Group
 * } StoryOrGroup
 */

const ADDON_ID = 'dox'
const PANEL_ID = `${ADDON_ID}/panel`

addons.register(ADDON_ID, (api) => {
  const components = allComponents.filter(comp => comp.story)

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Docs',
    match: () => true,
    render: ({ active, key }) => {
      const story = api.getCurrentStoryData()
      const component = getComponentFromStory(story)
      return (
        <AddonPanel active={active && story} key={key}>
          <div style={{ padding: '15px' }}>
            {component
              ? <ComponentDocs component={component} story={story} />
              : <NoComponentDocs story={story} />
            }
          </div>
        </AddonPanel>
      )
    }
  })

  /**
   * @param {StoryOrGroup} story
   * @returns {ComponentMeta | undefined}
   */
  function getComponentFromStory (story) {
    return story
      ? components.find(comp => {
        return [story.id, story.componentId]
          .some(path => path && minimatch(path, comp.story.path))
      })
      : undefined
  }

  /**
   * 
   * @param {{ component: ComponentMeta, story: StoryOrGroup }} props
   */
  function ComponentDocs ({ component, story }) {
    const href = `${getDocsBaseUrl()}${component.href}`
    return <>
      See the <a href={href}>{component.name} documentation</a> for more info.
    </>
  }

  /**
   * @param {{ story: StoryOrGroup }} props
   * @returns {JSX.Element}
   */
  function NoComponentDocs ({ story }) {
    const restartMessage = process.env.NODE_ENV === 'production' ? '' : ', then restart Storybook if developing locally'
    return story
      ? <>
      <b>No docs are linked to this story.</b>
      <br /><br />
      Set one of the component definitions&rsquo; <Code>story.path</Code> to <Code>{story.id}</Code> or <Code>{story.componentId}</Code>
      in <Code>website/components.js</Code> to link it{restartMessage}.
    </>
      : null
  }
})
