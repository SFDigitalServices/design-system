import { addons, types } from '@storybook/addons'
import { components as allComponents } from '../../../../website/components'
import minimatch from 'minimatch'

/**
 * This Storybook addon doesn't expose a UI; all it does is cross-reference
 * the current path of the current story with the components index and, if
 * a matching component is found, adds the `sourceLink` and `sourceLinkPrefix`
 * parameters so that the Source Link addon links to the component docs.
 * <https://storybook.js.org/addons/storybook-source-link#component-level>
 */

const ADDON_ID = 'sourceLinkConnect'

/**
 * @typedef {import('../../../../website/components').ComponentMeta} ComponentMeta
 * @typedef {
 *  import('@storybook/api').Story | 
 *  import('@storybook/api').Group
 * } StoryOrGroup
 */

addons.register(ADDON_ID, api => {
  const components = allComponents.filter(comp => comp.story)

  addons.add(ADDON_ID, {
    type: types.PANEL,
    // XXX this effectively hides the tab because the empty tab button has no
    // clickable surface area
    title: '',
    match: () => true,
    render: () => {
      const Story = api.getCurrentStoryData()
      if (!Story) return null
      const comp = getComponentFromStory(Story)
      if (!comp || comp.parameters?.sourceLink) return null

      if (!Story.parameters) Story.parameters = {}
      Story.parameters.sourceLink = comp.href
      return null
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
})
